'use client';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Icons,
  useToast,
} from 'ui';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function PaymentButtons({
  plan,
  months,
}: {
  plan: string;
  months: number;
}) {
  const { toast } = useToast();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Go to Payment <Icons.ChevronRight />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='items-center justify-center'>
        <DrawerHeader>
          <DrawerTitle>Payment</DrawerTitle>
          <DrawerDescription>Choose your payment method</DrawerDescription>
        </DrawerHeader>
        <div className='h-96 w-full max-w-xl overflow-y-scroll'>
          <PayPalButtons
            createOrder={async () => {
              if (!plan || !months) '';
              if (!['basic', 'standard', 'pro'].includes(plan)) '';
              if (months < 1) '';
              const res = await fetch('/api/createOrder', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  plan,
                  numberOfMonths: months,
                }),
              });
              const order = (await res.json()) as { id: string };
              return order.id;
            }}
            onApprove={async (data, actions) => {
              if (!actions.order) return;
              return actions.order.capture().then(async details => {
                toast({
                  title: 'Payment successful',
                  description: `Thank you for your purchase, ${details.payer?.name?.given_name}! You paid ${details.purchase_units?.[0]?.amount?.value} ${details.purchase_units?.[0]?.amount?.currency_code}.`,
                });

                // Update the order and billing
                const response = await fetch('/api/captureOrder', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ orderId: details.id }),
                });

                const json = (await response.json()) as {
                  plan: string;
                  months: number;
                };
                if (response.ok) {
                  toast({
                    title: 'Billing updated',
                    description: `Your billing has been updated to the ${json.plan} plan for ${json.months} months.`,
                  });
                }
              });
            }}
          />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
