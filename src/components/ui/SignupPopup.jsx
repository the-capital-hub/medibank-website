"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function SignupPopup({ isOpen, setIsOpen }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
	const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
	const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

	// console.log(publicKey, serviceId, templateId);

	const onSubmit = async (data) => {
		console.log("Data", data);
		try {
			const response = await emailjs.send(
				serviceId,
				templateId,
				{
					to_email: data.email,
					from_name: "Team Medibank",
					to_name: `${data.firstName} ${data.lastName}`,
					message: "Thank you for signing up!",
				},
				publicKey
			);

			if (response.status === 200) {
				console.log("Email sent successfully", response);
				reset();
				setIsOpen(false);
			}
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	const handleClose = () => {
		reset();
		setIsOpen(false);
	};

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
									className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								>
									Join
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
		</div>
	);
}
