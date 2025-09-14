export default function PaymentCancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <h1 className="text-3xl font-bold text-yellow-700">Payment Cancelled!</h1>
      <p className="mt-4 text-lg text-yellow-600">
        You cancelled the payment process.
      </p>
      <a
        href="/checkout"
        className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
      >
        Back to Checkout
      </a>
    </div>
  );
}
