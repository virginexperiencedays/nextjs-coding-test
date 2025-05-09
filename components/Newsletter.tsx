"use client";

import { type FormEvent, useState } from "react";

export function Newsletter() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);

		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setIsSuccess(true);

			setTimeout(() => {
				setIsSuccess(false);
			}, 3000);
		} catch (err) {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="container mx-auto py-12 md:py-16 lg:py-20 border-t px-4 md:px-6">
			<div>
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
							Stay in the loop
						</h2>
						<p className="text-muted-foreground">
							Subscribe to our newsletter for exclusive deals, new arrivals, and
							style inspiration delivered straight to your inbox.
						</p>
					</div>
					<div>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-2"
						>
							<div className="relative flex-1">
								<input
									type="email"
									placeholder="Enter your email"
									className={`w-full px-4 py-2 rounded-md border ${
										error
											? "border-red-500 focus:ring-red-500"
											: "border-gray-300"
									} focus:outline-none focus:ring-2 focus:ring-blue-500`}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									disabled={isSubmitting || isSuccess}
									required
								/>
							</div>
							<button
								type="submit"
								disabled={isSubmitting || isSuccess}
								className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								{isSubmitting ? (
									<span className="flex items-center gap-1">
										<span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
										<span>Subscribing...</span>
									</span>
								) : isSuccess ? (
									<span className="flex items-center gap-1">
										<span>Subscribed!</span>
									</span>
								) : (
									<span className="flex items-center gap-1">
										<span>Subscribe</span>
									</span>
								)}
							</button>
						</form>
						{error && <p className="mt-2 text-sm text-destructive">{error}</p>}
						<p className="mt-2 text-xs text-muted-foreground">
							By subscribing, you agree to our privacy policy and consent to
							receive updates from our company.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
