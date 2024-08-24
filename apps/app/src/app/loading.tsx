export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='space-y-6'>
        <div className='flex items-center justify-center'>
          <div className='border-muted-foreground h-32 w-32 animate-spin rounded-full border-b-2 border-t-2' />
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-muted-foreground text-lg font-semibold'>
            Please Wait 请稍等...
          </p>
        </div>
      </div>
    </div>
  );
}
