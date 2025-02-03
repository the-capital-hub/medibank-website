"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function SignupPopup({ isOpen, setIsOpen }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [showSuccessPopup, setShowSuccessPopup] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSubmit = async (data) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://medibank-website-backend.onrender.com/api/user/addUserdataToSheet`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to process signup");
			}

			// Send confirmation email after successful signup
			await sendConfirmationEmail(data);

			reset();
			setIsOpen(false);
			setShowSuccessPopup(true);
		} catch (error) {
			console.error("Error during submission:", error);
			setError(error.message || "Failed to process signup");
		} finally {
			setIsLoading(false);
		}
	};

	const sendConfirmationEmail = async (userData) => {
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					to_email: userData.email,
					from_name: "Team Medibank",
					to_name: `${userData.firstName} ${userData.lastName}`,
					message: "Thank you for signing up!",
				},
				{
					publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
				}
			);
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	const handleClose = () => {
		reset();
		setIsOpen(false);
		setError(null);
	};

	if (error) {
		return <div className="text-red-500 p-4">{error}</div>;
	}

	return (
		<div>
			{isOpen && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center mt-[88px] z-50">
					<div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full h-fit my-16 md:my-5">
						<h2 className="text-2xl font-bold mb-4">
							Join{" "}
							<span className="text-sm text-transparent bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text">
								(Beta Version)
							</span>
						</h2>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="firstName"
										className="block text-gray-700 text-sm font-bold mb-2"
									>
										First Name
									</label>
									<input
										id="firstName"
										{...register("firstName", {
											required: "First name is required",
										})}
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
									{errors.firstName && (
										<p className="text-red-500 text-xs italic">
											{errors.firstName.message}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-gray-700 text-sm font-bold mb-2"
									>
										Last Name
									</label>
									<input
										id="lastName"
										{...register("lastName", {
											required: "Last name is required",
										})}
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
									{errors.lastName && (
										<p className="text-red-500 text-xs italic">
											{errors.lastName.message}
										</p>
									)}
								</div>
							</div>
							<div>
								<label
									htmlFor="mobile"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Mobile
								</label>
								<input
									id="mobile"
									type="tel"
									{...register("mobile", {
										required: "Mobile number is required",
									})}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
								{errors.mobile && (
									<p className="text-red-500 text-xs italic">
										{errors.mobile.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: "Invalid email address",
										},
									})}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
								{errors.email && (
									<p className="text-red-500 text-xs italic">
										{errors.email.message}
									</p>
								)}
							</div>
							{/* <div>
								<label
									htmlFor="password"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Password
								</label>
								<input
									id="password"
									type="password"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 8,
											message: "Password must be at least 8 characters long",
										},
									})}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
								{errors.password && (
									<p className="text-red-500 text-xs italic">
										{errors.password.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="confirmPassword"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Confirm Password
								</label>
								<input
									id="confirmPassword"
									type="password"
									{...register("confirmPassword", {
										required: "Please confirm your password",
										validate: (value) =>
											value === watch("password") || "Passwords do not match",
									})}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
								{errors.confirmPassword && (
									<p className="text-red-500 text-xs italic">
										{errors.confirmPassword.message}
									</p>
								)}
							</div> */}
							<div className="flex items-center justify-between">
								<button
									type="submit"
									className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
									disabled={isLoading}
								>
									{isLoading ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Joining...
										</>
									) : (
										"Join"
									)}
								</button>
								<button
									type="button"
									onClick={handleClose}
									className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			{showSuccessPopup && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
					<div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
						<h2 className="text-2xl font-bold mb-4 text-green-600">Success!</h2>
						<p className="mb-4">
							You successfully joined medibank, Beta Access.
						</p>
						<button
							onClick={() => setShowSuccessPopup(false)}
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
