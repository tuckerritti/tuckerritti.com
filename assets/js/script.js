new fullpage("#fullpage", {
	licenseKey: "51990F90-C7434BDD-8D3C06EC-24E5A174"
});

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

const icons = shuffle([
	"fas fa-address-book",
	"fas fa-address-book",
	"fas fa-address-card",
	"fas fa-address-card",
	"fas fa-archive",
	"fas fa-balance-scale",
	"fas fa-balance-scale-left",
	"fas fa-balance-scale-right",
	"fas fa-ban",
	"fas fa-barcode",
	"fas fa-bath",
	"fas fa-bell",
	"fas fa-bell",
	"fas fa-birthday-cake",
	"fab fa-bitcoin",
	"fas fa-book",
	"fas fa-bookmark",
	"fas fa-bookmark",
	"fas fa-box",
	"fas fa-boxes",
	"fas fa-briefcase",
	"fab fa-btc",
	"fas fa-bug",
	"fas fa-building",
	"fas fa-building",
	"fas fa-bullhorn",
	"fas fa-bullseye",
	"fas fa-business-time",
	"fas fa-calculator",
	"fas fa-calendar",
	"fas fa-calendar",
	"fas fa-calendar-alt",
	"fas fa-calendar-alt",
	"fas fa-camera",
	"fas fa-camera-retro",
	"fas fa-cart-arrow-down",
	"fas fa-cart-plus",
	"fas fa-certificate",
	"fas fa-chart-area",
	"fas fa-chart-bar",
	"fas fa-chart-bar",
	"fas fa-chart-line",
	"fas fa-chart-pie",
	"fas fa-city",
	"fas fa-clipboard",
	"fas fa-clipboard",
	"fas fa-clipboard-check",
	"fas fa-clipboard-list",
	"fas fa-clone",
	"fas fa-clone",
	"fas fa-code",
	"fas fa-code-branch",
	"fas fa-coffee",
	"fas fa-columns",
	"fas fa-comment",
	"fas fa-comment",
	"fas fa-comment-alt",
	"fas fa-comment-alt",
	"fas fa-comment-dots",
	"fas fa-comment-dots",
	"fas fa-comment-medical",
	"fas fa-comment-slash",
	"fas fa-comments",
	"fas fa-comments",
	"fas fa-compact-disc",
	"fas fa-compass",
	"fas fa-compass",
	"fas fa-copy",
	"fas fa-copy",
	"fas fa-copyright",
	"fas fa-copyright",
	"fas fa-credit-card",
	"fas fa-credit-card",
	"fas fa-cut",
	"fas fa-database",
	"fas fa-desktop",
	"fas fa-dollar-sign",
	"fas fa-dolly",
	"fas fa-dolly-flatbed",
	"fas fa-door-closed",
	"fas fa-door-open",
	"fas fa-download",
	"fas fa-dungeon",
	"fas fa-edit",
	"fas fa-edit",
	"fas fa-envelope",
	"fas fa-envelope",
	"fas fa-envelope-open",
	"fas fa-envelope-open",
	"fas fa-envelope-square",
	"fas fa-eraser",
	"fab fa-ethereum",
	"fas fa-ethernet",
	"fas fa-euro-sign",
	"fas fa-eye",
	"fas fa-eye",
	"fas fa-eye-slash",
	"fas fa-eye-slash",
	"fas fa-fax",
	"fas fa-file",
	"fas fa-file",
	"fas fa-file-alt",
	"fas fa-file-alt",
	"fas fa-file-archive",
	"fas fa-file-archive",
	"fas fa-file-audio",
	"fas fa-file-audio",
	"fas fa-file-code",
	"fas fa-file-code",
	"fas fa-file-contract",
	"fas fa-file-excel",
	"fas fa-file-excel",
	"fas fa-file-image",
	"fas fa-file-image",
	"fas fa-file-pdf",
	"fas fa-file-pdf",
	"fas fa-file-powerpoint",
	"fas fa-file-powerpoint",
	"fas fa-file-signature",
	"fas fa-file-video",
	"fas fa-file-video",
	"fas fa-file-word",
	"fas fa-file-word",
	"fas fa-filter",
	"fas fa-fingerprint",
	"fas fa-fire-extinguisher",
	"fas fa-folder",
	"fas fa-folder",
	"fas fa-folder-minus",
	"fas fa-folder-open",
	"fas fa-folder-open",
	"fas fa-folder-plus",
	"fas fa-frown",
	"fas fa-frown",
	"fas fa-gem",
	"fas fa-gem",
	"fas fa-gift",
	"fas fa-glasses",
	"fas fa-globe",
	"fas fa-handshake",
	"fas fa-handshake",
	"fas fa-hard-hat",
	"fas fa-hdd",
	"fas fa-hdd",
	"fas fa-headphones",
	"fas fa-heart",
	"fas fa-heart",
	"fas fa-highlighter",
	"fas fa-hryvnia",
	"fas fa-icons",
	"fas fa-id-badge",
	"fas fa-id-badge",
	"fas fa-id-card",
	"fas fa-id-card",
	"fas fa-id-card-alt",
	"fas fa-industry",
	"fas fa-key",
	"fas fa-keyboard",
	"fas fa-keyboard",
	"fas fa-landmark",
	"fas fa-laptop",
	"fas fa-laptop-code",
	"fas fa-laptop-house",
	"fas fa-lira-sign",
	"fas fa-lock",
	"fas fa-lock-open",
	"fas fa-marker",
	"fas fa-mask",
	"fas fa-meh",
	"fas fa-meh",
	"fas fa-memory",
	"fas fa-microchip",
	"fas fa-mobile",
	"fas fa-mobile-alt",
	"fas fa-money-bill",
	"fas fa-money-bill-alt",
	"fas fa-money-bill-alt",
	"fas fa-money-bill-wave",
	"fas fa-money-bill-wave-alt",
	"fas fa-money-check",
	"fas fa-money-check-alt",
	"fas fa-mouse",
	"fas fa-pallet",
	"fas fa-paperclip",
	"fas fa-passport",
	"fas fa-paste",
	"fas fa-pen",
	"fas fa-pen-alt",
	"fas fa-pen-fancy",
	"fas fa-pen-nib",
	"fas fa-pen-square",
	"fas fa-pencil-alt",
	"fas fa-percent",
	"fas fa-phone",
	"fas fa-phone-alt",
	"fas fa-phone-slash",
	"fas fa-phone-square",
	"fas fa-phone-square-alt",
	"fas fa-phone-volume",
	"fas fa-photo-video",
	"fas fa-plug",
	"fas fa-poo",
	"fas fa-pound-sign",
	"fas fa-power-off",
	"fas fa-print",
	"fas fa-project-diagram",
	"fas fa-qrcode",
	"fas fa-quote-left",
	"fas fa-quote-right",
	"fas fa-receipt",
	"fas fa-registered",
	"fas fa-registered",
	"fas fa-ruble-sign",
	"fas fa-rupee-sign",
	"fas fa-satellite",
	"fas fa-satellite-dish",
	"fas fa-save",
	"fas fa-save",
	"fas fa-sd-card",
	"fas fa-server",
	"fas fa-shekel-sign",
	"fas fa-shield-alt",
	"fas fa-shipping-fast",
	"fas fa-shopping-bag",
	"fas fa-shopping-basket",
	"fas fa-shopping-cart",
	"fas fa-sim-card",
	"fas fa-sitemap",
	"fas fa-smile",
	"fas fa-smile",
	"fas fa-sms",
	"fas fa-socks",
	"fas fa-star",
	"fas fa-star",
	"fas fa-sticky-note",
	"fas fa-sticky-note",
	"fas fa-stream",
	"fas fa-table",
	"fas fa-tablet",
	"fas fa-tablet-alt",
	"fas fa-tag",
	"fas fa-tags",
	"fas fa-tasks",
	"fas fa-tenge",
	"fas fa-terminal",
	"fas fa-thumbs-down",
	"fas fa-thumbs-down",
	"fas fa-thumbs-up",
	"fas fa-thumbs-up",
	"fas fa-thumbtack",
	"fas fa-trademark",
	"fas fa-trophy",
	"fas fa-truck",
	"fas fa-tv",
	"fas fa-unlock",
	"fas fa-unlock-alt",
	"fas fa-upload",
	"fas fa-user-lock",
	"fas fa-user-secret",
	"fas fa-user-shield",
	"fas fa-video",
	"fas fa-video-slash",
	"fas fa-wallet",
	"fas fa-warehouse",
	"fas fa-window-close",
	"fas fa-window-close",
	"fas fa-window-maximize",
	"fas fa-window-maximize",
	"fas fa-window-minimize",
	"fas fa-window-minimize",
	"fas fa-window-restore",
	"fas fa-window-restore",
	"fas fa-won-sign"
]);

const iconBackground = document.getElementsByClassName("icon-background")[0];

icons.forEach(function (iconName) {
	const iconClass = iconName.split(' ')[0];
	const iconCode = iconName.split(' ')[1];

	const iconWrapper = document.createElement("div");
	iconWrapper.classList.add("iconWrapper");

	const icon = document.createElement("i");
	icon.classList.add(iconClass, iconCode, "fa-2x", "icon");
	iconWrapper.appendChild(icon);

	iconBackground.appendChild(iconWrapper);
})

const copyToClipboard = function (text) {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}

const fade = function (element, fade, callback) {
	let opacity = 1;
	const timer = window.setInterval(function () {
		if ((opacity <= 0.1 && fade) || (opacity === 1 && !fade)) {
			clearInterval(timer);
			callback();
		}

		element.style.opacity = opacity;
		(fade) ? opacity -= 0.1 : opacity += 0.1;
	}, 10)
}

const linkContainer = document.getElementsByClassName("link-container")[0];
const linkRows = linkContainer.getElementsByClassName("link-row");

for (let row of linkRows) {
	const span = row.getElementsByTagName("span")[0];

	span.addEventListener("click", function () {
		if (span.dataset.url) {
			window.open(span.dataset.url);
		} else if (span.dataset.copy) {
			copyToClipboard(span.dataset.copy);

			fade(span, true, function () {
				const html = span.innerHTML;
				span.innerHTML = "Copied!";
				span.style.cursor = "default";
				span.style.textDecoration = "none";

				fade(span, false, function () {
					window.setTimeout(function () {

						fade(span, true, function () {
							span.innerHTML = html;
							span.style.cursor = "pointer";
							span.style.textDecoration = null;

							fade(span, false, function () {});
						})
					}, 3000);
				});
			});
		}
	})
}

const pageSelectors = document.getElementsByClassName("page-selector");

for (const pageSelector of pageSelectors) {
	const dots = pageSelector.getElementsByClassName("dot");

	for (const dot of dots) {
		if (dot.dataset.page) {
			dot.addEventListener("click", function () {
				fullpage_api.moveTo(dot.dataset.page);
			})
		}
	}
}

const mainContainer = document.getElementsByClassName("main-container")[0];
const titleButton = mainContainer.getElementsByClassName("yellow-button")[0];

titleButton.addEventListener('click', function () {
	fullpage_api.moveTo(2);
})
