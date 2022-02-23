import toast, { Toaster } from "react-hot-toast";

const Bar: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center p-4 text-green-700 rounded bg-green-50"
      role="alert"
    >
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h3 className="ml-3 text-sm font-medium">Product added to cart!</h3>
    </div>
  );
};

const Alert: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={true}
      gutter={8}
      toastOptions={{
        custom: {
          duration: 2000,
        },
      }}
    />
  );
};

export const toastShow = () => toast.custom(<Bar />);

export default Alert;
