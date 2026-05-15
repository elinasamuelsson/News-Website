let toastContainer;
export function toastMessage(message) {
	if (!toastContainer) {
		toastContainer = document.createElement("div");
		toastContainer.classList.add(
			"z-50",
			"fixed",
			"left-1/2",
			"bottom-16",
			"w-fit",
			"min-w-72",
			"-translate-x-1/2",
		);
		document.body.appendChild(toastContainer);
	}

	const toast = document.createElement("div");
	toast.classList.add(
		"opacity-0",
		"min-h-8",
		"-mt-10",
		"py-3",
		"px-4",
		"bg-emerald-800",
		"border",
		"border-emerald-900",
		"text-gray-50",
		"text-sm",
		"font-semibold",
		"tracking-wide",
		"text-center",
		"shadow-md",
	);
	toast.textContent = message;
	toastContainer.prepend(toast);

	setTimeout(
		() =>
			toast.classList.add(
				"mt-2",
				"scale-100",
				"translate-y-0",
				"opacity-100",
			),
		10,
	);
	setTimeout(
		() =>
			toast.classList.remove(
				"mt-2",
				"scale-100",
				"translate-y-0",
				"opacity-100",
			),
		3000,
	);
	setTimeout(() => toastContainer.removeChild(toast), 3000 + 500);
}
