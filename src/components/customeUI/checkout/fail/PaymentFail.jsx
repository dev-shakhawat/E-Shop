export default function PaymentFail() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h1 className="text-3xl font-bold text-red-700">Payment Failed!</h1>
      <p className="mt-4 text-lg text-red-600">
        দুঃখিত, আপনার পেমেন্ট সফল হয়নি। আবার চেষ্টা করুন।
      </p>
      <a
        href="/checkout"
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
      >
        Try Again
      </a>
    </div>
  );
}
