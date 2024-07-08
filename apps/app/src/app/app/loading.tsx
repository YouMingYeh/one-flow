export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='space-y-6'>
        <div className='flex items-center justify-center'>
          <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900' />
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-lg font-semibold text-gray-900'>Loading...</p>
        </div>
      </div>
    </div>
  );
}
