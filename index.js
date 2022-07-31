jQuery(
	$(".plan-card").on("click", (e) => {
		if (!e.currentTarget.classList.contains("plan-card-selected")) {
			$(".plan-card-selected").removeClass("plan-card-selected");
			e.currentTarget.classList.add("plan-card-selected");
		}
	})
);
