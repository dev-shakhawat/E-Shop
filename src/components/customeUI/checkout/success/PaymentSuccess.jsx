export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
      <p className="mt-4 text-lg text-green-600">
        আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। ধন্যবাদ!
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Go Home
      </a>
    </div>
  );
}
