import { signIn } from "next-auth/react";

function SignInPopUp({ setIsPopUpOpen }) {
  const handleRandomClicks = (e) => {
    const popUp = e.target.dataset.popup;
    if (popUp !== "signIn") {
      setIsPopUpOpen(false);
      document.body.removeEventListener("click", handleRandomClicks);
    }
  };
  document.body.addEventListener("click", handleRandomClicks);

  const handleClose = () => {
    setIsPopUpOpen(false);
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  };

  return (
    <section
      data-popup="signIn"
      className="p-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden bg-white shadow-lg rounded-lg text-black"
    >
      <h1 data-popup="signIn" className="font-bold">
        SignIn
      </h1>
      <div
        onClick={handleClose}
        className="absolute bg-gray-500 cursor-pointer px-2 top-0 right-0"
      >
        X
      </div>
      <button
        data-popup="signIn"
        className="bg-gray-200 text-black/80  px-3 py-2 m-2 rounded-lg text-lg cursor-pointer"
        onClick={handleGoogleSignIn}
      >
        Continue with Google
      </button>
    </section>
  );
}

export default SignInPopUp;
