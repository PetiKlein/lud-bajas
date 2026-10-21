<!DOCTYPE html>
<html lang="es-UY">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
	<title>Página no encontrada &#8211; Liga Universitaria de Deportes</title>
<meta name='robots' content='max-image-preview:large' />
			<link rel="apple-touch-icon" href="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo-2.png"/>
					<meta name="msapplication-TileColor" content="#ffffff">
			<meta name="msapplication-TileImage" content="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo-2.png"/>
		<link rel="alternate" type="application/rss+xml" title="Liga Universitaria de Deportes &raquo; Feed" href="https://ligauniversitaria.org.uy/feed/" />
<link rel="alternate" type="application/rss+xml" title="Liga Universitaria de Deportes &raquo; Feed de los comentarios" href="https://ligauniversitaria.org.uy/comments/feed/" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","legalName":"Liga Universitaria de Deportes","url":"https://ligauniversitaria.org.uy/","sameAs":["https://www.facebook.com/LigaUniversitariaUy","https://twitter.com/LUD_Oficial","https://www.instagram.com/LigaUniversitariaUy/"]}</script>
		<!-- This site uses the Google Analytics by MonsterInsights plugin v11.3.0 - Using Analytics tracking - https://www.monsterinsights.com/ -->
							<script src="//www.googletagmanager.com/gtag/js?id=G-ETW6MC407V"  data-cfasync="false" data-wpfc-render="false" async></script>
			<script data-cfasync="false" data-wpfc-render="false">
				var mi_version = '11.3.0';
				var mi_track_user = true;
				var mi_no_track_reason = '';
								var MonsterInsightsDefaultLocations = {"page_location":"https:\/\/ligauniversitaria.org.uy\/script.js\/"};
								if ( typeof MonsterInsightsPrivacyGuardFilter === 'function' ) {
					var MonsterInsightsLocations = (typeof MonsterInsightsExcludeQuery === 'object') ? MonsterInsightsPrivacyGuardFilter( MonsterInsightsExcludeQuery ) : MonsterInsightsPrivacyGuardFilter( MonsterInsightsDefaultLocations );
				} else {
					var MonsterInsightsLocations = (typeof MonsterInsightsExcludeQuery === 'object') ? MonsterInsightsExcludeQuery : MonsterInsightsDefaultLocations;
				}

								var disableStrs = [
										'ga-disable-G-ETW6MC407V',
									];

				/* Function to detect opted out users */
				function __gtagTrackerIsOptedOut() {
					for (var index = 0; index < disableStrs.length; index++) {
						if (document.cookie.indexOf(disableStrs[index] + '=true') > -1) {
							return true;
						}
					}

					return false;
				}

				/* Disable tracking if the opt-out cookie exists. */
				if (__gtagTrackerIsOptedOut()) {
					for (var index = 0; index < disableStrs.length; index++) {
						window[disableStrs[index]] = true;
					}
				}

				/* Opt-out function */
				function __gtagTrackerOptout() {
					for (var index = 0; index < disableStrs.length; index++) {
						document.cookie = disableStrs[index] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
						window[disableStrs[index]] = true;
					}
				}

				if ('undefined' === typeof gaOptout) {
					function gaOptout() {
						__gtagTrackerOptout();
					}
				}
								window.dataLayer = window.dataLayer || [];

				window.MonsterInsightsDualTracker = {
					helpers: {},
					trackers: {},
				};
				if (mi_track_user) {
					function __gtagDataLayer() {
						dataLayer.push(arguments);
					}

					function __gtagTracker(type, name, parameters) {
						if (!parameters) {
							parameters = {};
						}

						if (parameters.send_to) {
							__gtagDataLayer.apply(null, arguments);
							return;
						}

						if (type === 'event') {
														parameters.send_to = monsterinsights_frontend.v4_id;
							var hookName = name;
							if (typeof parameters['event_category'] !== 'undefined') {
								hookName = parameters['event_category'] + ':' + name;
							}

							if (typeof MonsterInsightsDualTracker.trackers[hookName] !== 'undefined') {
								MonsterInsightsDualTracker.trackers[hookName](parameters);
							} else {
								__gtagDataLayer('event', name, parameters);
							}
							
						} else {
							__gtagDataLayer.apply(null, arguments);
						}
					}

					__gtagTracker('js', new Date());
					__gtagTracker('set', {
						'developer_id.dZGIzZG': true,
											});
					if ( MonsterInsightsLocations.page_location ) {
						__gtagTracker('set', MonsterInsightsLocations);
					}
										__gtagTracker('config', 'G-ETW6MC407V', {"forceSSL":"true","link_attribution":"true","page_path":'\/404.html?page=' + document.location.pathname + document.location.search + '&from=' + document.referrer} );
										window.gtag = __gtagTracker;										(function () {
						/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
						/* ga and __gaTracker compatibility shim. */
						var noopfn = function () {
							return null;
						};
						var newtracker = function () {
							return new Tracker();
						};
						var Tracker = function () {
							return null;
						};
						var p = Tracker.prototype;
						p.get = noopfn;
						p.set = noopfn;
						p.send = function () {
							var args = Array.prototype.slice.call(arguments);
							args.unshift('send');
							__gaTracker.apply(null, args);
						};
						var __gaTracker = function () {
							var len = arguments.length;
							if (len === 0) {
								return;
							}
							var f = arguments[len - 1];
							if (typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function') {
								if ('send' === arguments[0]) {
									var hitConverted, hitObject = false, action;
									if ('event' === arguments[1]) {
										if ('undefined' !== typeof arguments[3]) {
											hitObject = {
												'eventAction': arguments[3],
												'eventCategory': arguments[2],
												'eventLabel': arguments[4],
												'value': arguments[5] ? arguments[5] : 1,
											}
										}
									}
									if ('pageview' === arguments[1]) {
										if ('undefined' !== typeof arguments[2]) {
											hitObject = {
												'eventAction': 'page_view',
												'page_path': arguments[2],
											}
										}
									}
									if (typeof arguments[2] === 'object') {
										hitObject = arguments[2];
									}
									if (typeof arguments[5] === 'object') {
										Object.assign(hitObject, arguments[5]);
									}
									if ('undefined' !== typeof arguments[1].hitType) {
										hitObject = arguments[1];
										if ('pageview' === hitObject.hitType) {
											hitObject.eventAction = 'page_view';
										}
									}
									if (hitObject) {
										action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
										hitConverted = mapArgs(hitObject);
										__gtagTracker('event', action, hitConverted);
									}
								}
								return;
							}

							function mapArgs(args) {
								var arg, hit = {};
								var gaMap = {
									'eventCategory': 'event_category',
									'eventAction': 'event_action',
									'eventLabel': 'event_label',
									'eventValue': 'event_value',
									'nonInteraction': 'non_interaction',
									'timingCategory': 'event_category',
									'timingVar': 'name',
									'timingValue': 'value',
									'timingLabel': 'event_label',
									'page': 'page_path',
									'location': 'page_location',
									'title': 'page_title',
									'referrer' : 'page_referrer',
								};
								for (arg in args) {
																		if (!(!args.hasOwnProperty(arg) || !gaMap.hasOwnProperty(arg))) {
										hit[gaMap[arg]] = args[arg];
									} else {
										hit[arg] = args[arg];
									}
								}
								return hit;
							}

							try {
								f.hitCallback();
							} catch (ex) {
							}
						};
						__gaTracker.create = newtracker;
						__gaTracker.getByName = newtracker;
						__gaTracker.getAll = function () {
							return [];
						};
						__gaTracker.remove = noopfn;
						__gaTracker.loaded = true;
						window['__gaTracker'] = __gaTracker;
					})();
									} else {
										console.log("");
					(function () {
						function __gtagTracker() {
							return null;
						}

						window['__gtagTracker'] = __gtagTracker;
						window['gtag'] = __gtagTracker;
					})();
									}
			</script>
							<!-- / Google Analytics by MonsterInsights -->
		<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<style id="wp-emoji-styles-inline-css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
</style>
<style id="wp-block-library-inline-css">
:root{--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223;--wp-bound-block-color:var(--wp-block-synced-color);--wp-editor-canvas-background:#ddd;--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,160.5;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px}@media (min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}:root .has-text-align-center{text-align:center}:root .has-text-align-left{text-align:left}:root .has-text-align-right{text-align:right}.has-fit-text{white-space:nowrap!important}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{word-wrap:normal!important;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-break:normal!important}.screen-reader-text:focus{background-color:#ddd;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style^=border-color],[style*=";border-color"],[style*="; border-color"]){border-style:solid}html :where([style^=border-top-color],[style*=";border-top-color"],[style*="; border-top-color"]){border-top-style:solid}html :where([style^=border-right-color],[style*=";border-right-color"],[style*="; border-right-color"]){border-right-style:solid}html :where([style^=border-bottom-color],[style*=";border-bottom-color"],[style*="; border-bottom-color"]){border-bottom-style:solid}html :where([style^=border-left-color],[style*=";border-left-color"],[style*="; border-left-color"]){border-left-style:solid}html :where([style^=border-width],[style*=";border-width"],[style*="; border-width"]){border-style:solid}html :where([style^=border-top-width],[style*=";border-top-width"],[style*="; border-top-width"]){border-top-style:solid}html :where([style^=border-right-width],[style*=";border-right-width"],[style*="; border-right-width"]){border-right-style:solid}html :where([style^=border-bottom-width],[style*=";border-bottom-width"],[style*="; border-bottom-width"]){border-bottom-style:solid}html :where([style^=border-left-width],[style*=";border-left-width"],[style*="; border-left-width"]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}

/*# sourceURL=/wp-includes/css/dist/block-library/common.min.css */
</style>
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
</style>

<style id="global-styles-inline-css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}.wp-block-button{--wp--preset--dimension--25: 25%;--wp--preset--dimension--50: 50%;--wp--preset--dimension--75: 75%;--wp--preset--dimension--100: 100%;}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
/*# sourceURL=global-styles-inline-css */
</style>

<link rel='stylesheet' id='foxiz-elements-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/foxiz-core/lib/foxiz-elements/public/style.css?ver=1.0' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.29.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.20.3' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
<link rel='stylesheet' id='elementor-post-2302-css' href='https://ligauniversitaria.org.uy/wp-content/uploads/elementor/css/post-2302.css?ver=1779710831' media='all' />
<link rel='stylesheet' id='stratum-widgets-style-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/stratum/assets/css/style.min.css?ver=1.4.0' media='all' />
<link rel='stylesheet' id='wpdt-elementor-widget-font-css' href='https://ligauniversitaria.org.uy/wp-content/plugins/wpdatatables/integrations/page_builders/elementor/css/style.css?ver=6.2.1' media='all' />
<link rel='stylesheet' id='elementor-post-8409-css' href='https://ligauniversitaria.org.uy/wp-content/uploads/elementor/css/post-8409.css?ver=1779710831' media='all' />
<link rel='stylesheet' id='font-awesome-css' href='https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/css/font-awesome.css?ver=6.1.1' media='all' />
<link rel='stylesheet' id='foxiz-font-css' href='//fonts.googleapis.com/css?family=Oxygen:400,700%7CEncode+Sans+Condensed:400,500,600,700,800&#038;display=swap&#038;ver=2.0.1' media='all' />
<link rel='stylesheet' id='foxiz-main-css' href='https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/css/main.css?ver=2.0.1' media='all' />
<link rel='stylesheet' id='foxiz-print-css' href='https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/css/print.css?ver=2.0.1' media='all' />
<link rel='stylesheet' id='foxiz-style-css' href='https://ligauniversitaria.org.uy/wp-content/themes/foxiz/style.css?ver=2.0.1' media='all' />
<style id="foxiz-style-inline-css">
:root {--g-color :#72bcde;--g-color-90 :#72bcdee6;}[data-theme="dark"], .light-scheme {--wc-add-cart-color :#ffffff;}.is-hd-1, .is-hd-2, .is-hd-3 {--nav-height :60px;}[data-theme="dark"].is-hd-4 {--nav-bg: #191c20;--nav-bg-from: #191c20;--nav-bg-to: #191c20;}:root {--max-width-wo-sb : 860px;--top-site-bg :#1459b4;--hyperlink-line-color :var(--g-color);--flogo-height :70px;}[data-theme="dark"], .light-scheme {--top-site-bg :#0e0f12;}.search-header:before { background-repeat : no-repeat;background-size : cover;background-image : url(https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/search-bg.jpg);background-attachment : scroll;background-position : center center;}[data-theme="dark"] .search-header:before { background-repeat : no-repeat;background-size : cover;background-image : url(https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/search-bgd.jpg);background-attachment : scroll;background-position : center center;}.footer-has-bg { background-color : #00000007;}[data-theme="dark"] .footer-has-bg { background-color : #16181c;}.top-site-ad .ad-image { max-width: 1500px; }.yes-hd-transparent .top-site-ad {--top-site-bg :#0e0f12;}#amp-mobile-version-switcher { display: none; }.menu-item-2279 span.menu-sub-title { color: #fff !important;}.menu-item-2279 span.menu-sub-title { background-color: #8d80ff;}.menu-item-2277 span.menu-sub-title { color: #fff !important;}.menu-item-2277 span.menu-sub-title { background-color: #ff4545;}.menu-item-2185 span.menu-sub-title { color: #ff7070 !important;}.menu-item-2185 span.menu-sub-title { background-color: #ff707015;}[data-theme="dark"] .menu-item-2185 span.menu-sub-title { color: #fff !important;}[data-theme="dark"] .menu-item-2185 span.menu-sub-title { background-color: #ff7070;}.menu-item-2183 span.menu-sub-title { color: #fff !important;}.menu-item-2183 span.menu-sub-title { background-color: #ff7070;}.menu-item-2191 span.menu-sub-title { color: #ff184e !important;}.menu-item-2191 span.menu-sub-title { background-color: #ff184e20;}[data-theme="dark"] .menu-item-2191 span.menu-sub-title { color: #fff !important;}[data-theme="dark"] .menu-item-2191 span.menu-sub-title { background-color: #ff184e;}.menu-item-7789 span.menu-sub-title { color: #fff !important;}.menu-item-7789 span.menu-sub-title { background-color: #1f468d;}.menu-item-7790 span.menu-sub-title { color: #fff !important;}.menu-item-7790 span.menu-sub-title { background-color: #1f468d;}.menu-item-8978 span.menu-sub-title { color: #ff0d05 !important;}.menu-item-2283 span.menu-sub-title { color: #fff !important;}.menu-item-2283 span.menu-sub-title { background-color: #ff6552;}
/*# sourceURL=foxiz-style-inline-css */
</style>
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CRoboto+Slab:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&#038;display=swap&#038;ver=7.1.3' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><script id="jquery-core-js" src="https://ligauniversitaria.org.uy/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
<script id="jquery-migrate-js" src="https://ligauniversitaria.org.uy/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
<script async data-wp-strategy="async" id="monsterinsights-frontend-script-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/google-analytics-for-wordpress/assets/js/frontend-gtag.min.js?ver=11.3.0"></script>
<script data-cfasync="false" data-wpfc-render="false" id='monsterinsights-frontend-script-js-extra'>var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"https:\/\/ligauniversitaria.org.uy","hash_tracking":"false","v4_id":"G-ETW6MC407V"};</script>
<script id="highlight-share-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/highlight-share.js?ver=1"></script>
<link rel="https://api.w.org/" href="https://ligauniversitaria.org.uy/wp-json/" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ligauniversitaria.org.uy/xmlrpc.php?rsd" />
<meta name="cdp-version" content="1.4.6" /><meta name="generator" content="Elementor 3.20.3; features: e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-swap">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","@id":"https://ligauniversitaria.org.uy/#website","url":"https://ligauniversitaria.org.uy/","name":"Liga Universitaria de Deportes","potentialAction":{"@type":"SearchAction","target":"https://ligauniversitaria.org.uy/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>
			<meta property="og:title" content="Página no encontrada &#8211; Liga Universitaria de Deportes"/>
			<meta property="og:url" content="https://ligauniversitaria.org.uy/script.js"/>
			<meta property="og:site_name" content="Liga Universitaria de Deportes"/>
							<meta property="og:image" content="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/404.png"/>
			<script type="application/ld+json">{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":2,"item":{"@id":"","name":"404"}},{"@type":"ListItem","position":1,"item":{"@id":"https://ligauniversitaria.org.uy","name":"Liga Universitaria de Deportes"}}]}</script>
<link rel="icon" href="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/cropped-logo_solo_u-32x32.png" sizes="32x32" />
<link rel="icon" href="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/cropped-logo_solo_u-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/cropped-logo_solo_u-180x180.png" />
<meta name="msapplication-TileImage" content="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/cropped-logo_solo_u-270x270.png" />
<style id="wpforms-css-vars-root">
				:root {
					--wpforms-field-border-radius: 3px;
--wpforms-field-background-color: #ffffff;
--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );
--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );
--wpforms-label-color: rgba( 0, 0, 0, 0.85 );
--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );
--wpforms-label-error-color: #d63637;
--wpforms-button-border-radius: 3px;
--wpforms-button-background-color: #066aab;
--wpforms-button-text-color: #ffffff;
--wpforms-page-break-color: #066aab;
--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

				}
			</style></head>
<body data-rsssl=1 class="error404 wp-embed-responsive wp-theme-foxiz sp-easy-accordion-enabled personalized-all elementor-default elementor-kit-2302 menu-ani-1 hover-ani-1 btn-ani-1 is-rm-1 is-hd-1 is-backtop none-m-backtop is-mstick is-smart-sticky" data-theme="default">
<div class="site-outer">
	        <header id="site-header" class="header-wrap rb-section header-set-1 header-1 header-wrapper style-shadow">
			<aside id="rb-privacy" class="privacy-bar privacy-left"><div class="privacy-inner"><div class="privacy-content">La actualización de los datos puede depender de la velocidad en el ingreso de la información</div><div class="privacy-dismiss"><a id="privacy-trigger" href="#" class="privacy-dismiss-btn is-btn"><span>Aceptar</span></a></div></div></aside>            <div id="navbar-outer" class="navbar-outer">
                <div id="sticky-holder" class="sticky-holder">
                    <div class="navbar-wrap">
                        <div class="rb-container edge-padding">
                            <div class="navbar-inner">
                                <div class="navbar-left">
											<div class="logo-wrap is-image-logo site-branding">
			<a href="https://ligauniversitaria.org.uy/" class="logo" title="Liga Universitaria de Deportes">
				<img class="logo-default" data-mode="default" height="160" width="270" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png" srcset="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png 1x,https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo-2.png 2x" alt="Liga Universitaria de Deportes" decoding="async" loading="eager"><img class="logo-dark" data-mode="dark" height="160" width="270" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png" srcset="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png 1x,https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo-2.png 2x" alt="Liga Universitaria de Deportes" decoding="async" loading="eager"><img class="logo-transparent" height="160" width="270" src="https://yacobre.online/wp-content/uploads/2023/09/logo-1.png" srcset="https://yacobre.online/wp-content/uploads/2023/09/logo-1.png 1x,https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo-2.png 2x" alt="Liga Universitaria de Deportes" decoding="async" loading="eager">			</a>
		</div>
				<nav id="site-navigation" class="main-menu-wrap" aria-label="main menu"><ul id="menu-mainmenu" class="main-menu rb-menu large-menu" itemscope itemtype="https://www.schema.org/SiteNavigationElement"><li id="menu-item-8942" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-8942"><a href="https://ligauniversitaria.org.uy/category/deportes/"><span>Deportes</span></a>
<ul class="sub-menu">
	<li id="menu-item-8946" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8946"><a href="https://ligauniversitaria.org.uy/category/deportes/futbol-2/"><span>Fútbol</span></a></li>
	<li id="menu-item-8944" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8944"><a href="https://ligauniversitaria.org.uy/category/deportes/basquetbol-2/"><span>Basquetbol</span></a></li>
	<li id="menu-item-8948" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8948"><a href="https://ligauniversitaria.org.uy/category/deportes/futsal-2/"><span>Futsal</span></a></li>
	<li id="menu-item-8950" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8950"><a href="https://ligauniversitaria.org.uy/category/deportes/hockey-2/"><span>Hockey</span></a></li>
	<li id="menu-item-8951" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8951"><a href="https://ligauniversitaria.org.uy/category/deportes/natacion/"><span>Natación</span></a></li>
	<li id="menu-item-8952" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8952"><a href="https://ligauniversitaria.org.uy/category/deportes/tenis-2/"><span>Tenis</span></a></li>
	<li id="menu-item-8947" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8947"><a href="https://ligauniversitaria.org.uy/category/deportes/futbol-femenino/"><span>Fútbol Femenino</span></a></li>
	<li id="menu-item-8945" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8945"><a href="https://ligauniversitaria.org.uy/category/deportes/deportes-playa/"><span>Deportes Playa</span></a></li>
	<li id="menu-item-8953" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8953"><a href="https://ligauniversitaria.org.uy/category/deportes/teqball/"><span>Teqball</span></a></li>
	<li id="menu-item-8943" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8943"><a href="https://ligauniversitaria.org.uy/category/deportes/ajedrez/"><span>Ajedrez</span></a></li>
	<li id="menu-item-8949" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8949"><a href="https://ligauniversitaria.org.uy/category/deportes/handball/"><span>Handball</span></a></li>
	<li id="menu-item-8954" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8954"><a href="https://ligauniversitaria.org.uy/category/deportes/volleyball-2/"><span>Volleyball</span></a></li>
</ul>
</li>
<li id="menu-item-8956" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-8956"><a href="https://ligauniversitaria.org.uy/category/estadisticas/"><span><i class="menu-item-icon fa-solid fa-trophy" aria-hidden="true"></i>Estadísticas</span></a>
<ul class="sub-menu">
	<li id="menu-item-9452" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9452"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futbol/"><span><i class="menu-item-icon fa-regular fa-futbol" aria-hidden="true"></i>Estadísticas Fútbol</span></a></li>
	<li id="menu-item-9451" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9451"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-basquetbol/"><span><i class="menu-item-icon fa-solid fa-basketball" aria-hidden="true"></i>Estadísticas Básquetbol</span></a></li>
	<li id="menu-item-9697" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9697"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-hockey/"><span><i class="menu-item-icon fa-solid fa-circle" aria-hidden="true"></i>Estadísticas Hockey</span></a></li>
	<li id="menu-item-9695" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9695"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futbol-8/"><span><i class="menu-item-icon fa-regular fa-futbol" aria-hidden="true"></i>Estadísticas Fútbol 8</span></a></li>
	<li id="menu-item-9696" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9696"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futsal/"><span><span class="menu-item-svg"><img fetchpriority="high" decoding="async" class="icon-svg" height="256" width="256" src="https://cdn-icons-png.flaticon.com/512/5554/5554863.png" alt="Estadísticas Futsal"></span>Estadísticas Futsal</span></a></li>
	<li id="menu-item-9694" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9694"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-deportes-plaa/"><span><i class="menu-item-icon fa-solid fa-umbrella-beach" aria-hidden="true"></i>Estadísticas Deportes Playa</span></a></li>
	<li id="menu-item-9698" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9698"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-natacion/"><span><i class="menu-item-icon fa-solid fa-person-swimming" aria-hidden="true"></i>Estadísticas Natación</span></a></li>
	<li id="menu-item-9699" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-9699"><a href="https://ligauniversitaria.org.uy/estadisticas-detalle-historico-de-las-fechas/"><span><i class="menu-item-icon fa-solid fa-ranking-star" aria-hidden="true"></i>Detalle Histórico de las Fechas</span></a></li>
	<li id="menu-item-10218" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10218"><a href="https://ligauniversitaria.org.uy/estadisticas-detalle-historico-de-tablas-de-posiciones/"><span><i class="menu-item-icon fa-solid fa-medal" aria-hidden="true"></i>Detalle Histórico de Tablas de Posiciones</span></a></li>
</ul>
</li>
<li id="menu-item-7788" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7788"><a href="#"><span>Normativas</span></a>
<ul class="sub-menu">
	<li id="menu-item-7803" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7803"><a href="https://ligauniversitaria.org.uy/estatutos/"><span>Estatutos</span></a></li>
	<li id="menu-item-7804" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7804"><a href="https://ligauniversitaria.org.uy/reglamento-general/"><span>Reglamento General</span></a></li>
	<li id="menu-item-7805" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7805"><a href="#"><span>Requisitos de Ingreso</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7820" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7820"><a href="https://ligauniversitaria.org.uy/afiliacion-instituciones/"><span>Afiliación de instituciones</span></a></li>
		<li id="menu-item-7821" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7821"><a href="#"><span>Registro de los competidores</span></a>
		<ul class="sub-menu">
			<li id="menu-item-7822" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7822"><a href="https://ligauniversitaria.org.uy/inscripcion-fichaje/"><span>Inscripción</span></a></li>
			<li id="menu-item-7823" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7823"><a href="https://ligauniversitaria.org.uy/cambio-de-institucion-transferencia-pase/"><span>Pase</span></a></li>
			<li id="menu-item-7824" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7824"><a href="https://ligauniversitaria.org.uy/renovacion-del-carnet/"><span>Renovación de carnet</span></a></li>
			<li id="menu-item-8119" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-8119"><a href="https://ligauniversitaria.org.uy/reimpresion-carnet/"><span>Reimpresión de carnet</span></a></li>
		</ul>
</li>
	</ul>
</li>
	<li id="menu-item-8633" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8633"><a href="https://ligauniversitaria.org.uy/category/circulares-2/"><span>Circulares</span></a></li>
	<li id="menu-item-7817" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7817"><a href="#"><span>Reglamentos de competencias</span></a></li>
	<li id="menu-item-7816" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7816"><a href="https://ligauniversitaria.org.uy/codigo-de-penas-futbol/"><span>Código de penas</span></a></li>
</ul>
</li>
<li id="menu-item-8955" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8955"><a href="#"><span>Servicios</span></a>
<ul class="sub-menu">
	<li id="menu-item-7789" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7789"><a href="http://laliga.dnsalias.net/delegados"><span>Delegados<span class="menu-sub-title meta-text">Portal</span></span></a></li>
	<li id="menu-item-7790" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7790"><a href="http://laliga.dnsalias.net/jueces/"><span>Árbitros<span class="menu-sub-title meta-text">Portal</span></span></a></li>
	<li id="menu-item-8960" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8960"><a target="_blank" rel="noopener" href="http://54.80.4.11/lud/login.php"><span>Emisión de Facturas</span></a></li>
	<li id="menu-item-8978" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8978"><a href="http://laliga.dnsalias.net/pretramitjug/"><span>Pre &#8211; Tramitación<span class="menu-sub-title meta-text">Activo</span></span></a></li>
	<li id="menu-item-9453" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-9453"><a href="https://ligauniversitaria.org.uy/fallos-y-penas-2/"><span>Fallos y Penas</span></a></li>
	<li id="menu-item-9858" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-9858"><a href="https://ligauniversitaria.org.uy/tribunal-de-penas-2/"><span>Tribunal de Penas</span></a></li>
	<li id="menu-item-8985" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-8985"><a href="https://ligauniversitaria.org.uy/canchas/"><span>Canchas</span></a></li>
	<li id="menu-item-10133" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10133"><a href="https://ligauniversitaria.org.uy/formulario-de-articulo-28/"><span>Formulario de Artículo 28</span></a></li>
</ul>
</li>
<li id="menu-item-7807" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7807"><a href="#"><span>Institucional</span></a>
<ul class="sub-menu">
	<li id="menu-item-7808" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7808"><a href="#"><span>¿Qué es la LUD?</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7810" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7810"><a href="https://ligauniversitaria.org.uy/mision-vision-y-lineamiento-estrategico/"><span>Misión, visión y valores</span></a></li>
		<li id="menu-item-7837" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7837"><a href="https://ligauniversitaria.org.uy/el-espiritu-de-la-liga-y-el-fair-play/"><span>Valores: El Espíritu de la Liga</span></a></li>
		<li id="menu-item-7811" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7811"><a href="#"><span>Infraestructura</span></a>
		<ul class="sub-menu">
			<li id="menu-item-7812" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7812"><a href="https://ligauniversitaria.org.uy/sede/"><span>Sede</span></a></li>
		</ul>
</li>
		<li id="menu-item-7809" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7809"><a href="https://ligauniversitaria.org.uy/historia/"><span>Historia</span></a></li>
	</ul>
</li>
	<li id="menu-item-7813" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7813"><a href="#"><span>Estructura</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7825" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7825"><a href="http://yacobre.online/index.php?option=com_content&#038;view=article&#038;id=215&#038;Itemid=215"><span>Organigrama</span></a></li>
		<li id="menu-item-7826" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7826"><a href="https://ligauniversitaria.org.uy/consejo-de-neutrales-2/"><span>Consejo de Neutrales</span></a></li>
		<li id="menu-item-7831" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7831"><a href="https://ligauniversitaria.org.uy/comision-fiscal/"><span>Comisión Fiscal</span></a></li>
		<li id="menu-item-7827" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7827"><a href="https://ligauniversitaria.org.uy/tribunal-superior/"><span>Tribunal Superior</span></a></li>
		<li id="menu-item-7832" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7832"><a href="https://ligauniversitaria.org.uy/tribunal-de-penas/"><span>Tribunales de Penas</span></a></li>
		<li id="menu-item-7833" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7833"><a href="https://ligauniversitaria.org.uy/consejo-de-deportes/"><span>Consejos de Deportes</span></a></li>
		<li id="menu-item-7838" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7838"><a href="https://ligauniversitaria.org.uy/consejo-juvenil-de-futbol/"><span>Consejo Juvenil</span></a></li>
		<li id="menu-item-7836" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7836"><a href="https://ligauniversitaria.org.uy/colegio-de-arbitros/"><span>Colegio de Árbitros</span></a></li>
		<li id="menu-item-7828" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7828"><a href="https://ligauniversitaria.org.uy/estructura-funcional/"><span>Estructura Funcional</span></a></li>
	</ul>
</li>
	<li id="menu-item-7943" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-7943"><a href="https://ligauniversitaria.org.uy/preguntas-frecuentes/"><span>Preguntas Frecuentes</span></a></li>
</ul>
</li>
<li id="menu-item-8962" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8962"><a href="https://ligauniversitaria.org.uy/my-bookmarks/"><span><i class="menu-item-icon fa-regular fa-bookmark" aria-hidden="true"></i>Mis Favoritos</span></a></li>
</ul></nav>
		                                </div>
                                <div class="navbar-right">
												<div class="header-social-list wnav-holder"><a class="social-link-facebook" aria-label="Facebook" data-title="Facebook" href="https://www.facebook.com/LigaUniversitariaUy" target="_blank" rel="noopener nofollow"><i class="rbi rbi-facebook" aria-hidden="true"></i></a><a class="social-link-twitter" aria-label="Twitter" data-title="Twitter" href="https://twitter.com/LUD_Oficial" target="_blank" rel="noopener nofollow"><i class="rbi rbi-twitter" aria-hidden="true"></i></a><a class="social-link-instagram" aria-label="Instagram" data-title="Instagram" href="https://www.instagram.com/LigaUniversitariaUy/" target="_blank" rel="noopener nofollow"><i class="rbi rbi-instagram" aria-hidden="true"></i></a></div>
				<div class="wnav-holder header-dropdown-outer">
			<a href="#" class="dropdown-trigger notification-icon notification-trigger" aria-label="notification">
                <span class="notification-icon-inner" data-title="Notificación">
                    <span class="notification-icon-holder">
                    	                    <i class="rbi rbi-notification wnav-icon" aria-hidden="true"></i>
                                        <span class="notification-info"></span>
                    </span>
                </span> </a>
			<div class="header-dropdown notification-dropdown">
				<div class="notification-popup">
					<div class="notification-header">
						<span class="h4">Notificación</span>
											</div>
					<div class="notification-content">
						<div class="scroll-holder">
							<div class="rb-notification ecat-l-dot is-feat-right" data-interval="12"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
			<div class="wnav-holder w-header-search header-dropdown-outer">
			<a href="#" data-title="Buscar" class="icon-holder header-element search-btn search-trigger" aria-label="search">
				<i class="rbi rbi-search wnav-icon" aria-hidden="true"></i>							</a>
							<div class="header-dropdown">
					<div class="header-search-form is-icon-layout">
						        <form method="get" action="https://ligauniversitaria.org.uy/" class="rb-search-form live-search-form"  data-search="post" data-limit="0" data-follow="0">
            <div class="search-form-inner">
				                    <span class="search-icon"><i class="rbi rbi-search" aria-hidden="true"></i></span>
				                <span class="search-text"><input type="text" class="field" placeholder="Buscar Titulares, Noticias...." value="" name="s"/></span>
                <span class="rb-search-submit"><input type="submit" value="Buscar"/><i class="rbi rbi-cright" aria-hidden="true"></i></span>
				                    <span class="live-search-animation rb-loader"></span>
				            </div>
			<div class="live-search-response"></div>        </form>
						</div>
				</div>
					</div>
		                                </div>
                            </div>
                        </div>
                    </div>
							<div id="header-mobile" class="header-mobile">
			<div class="header-mobile-wrap">
						<div class="mbnav edge-padding">
			<div class="navbar-left">
						<div class="mobile-toggle-wrap">
							<a href="#" class="mobile-menu-trigger" aria-label="mobile trigger">		<span class="burger-icon"><span></span><span></span><span></span></span>
	</a>
					</div>
			<div class="mobile-logo-wrap is-image-logo site-branding">
			<a href="https://ligauniversitaria.org.uy/" title="Liga Universitaria de Deportes">
				<img class="logo-default" data-mode="default" height="160" width="270" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png" alt="Liga Universitaria de Deportes" decoding="async" loading="eager"><img class="logo-dark" data-mode="dark" height="160" width="270" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/12/logo.png" alt="Liga Universitaria de Deportes" decoding="async" loading="eager">			</a>
		</div>
					</div>
			<div class="navbar-right">
						<a href="#" class="mobile-menu-trigger mobile-search-icon" aria-label="search"><i class="rbi rbi-search" aria-hidden="true"></i></a>
				</div>
		</div>
				</div>
					<div class="mobile-collapse">
			<div class="collapse-holder">
				<div class="collapse-inner">
											<div class="mobile-search-form edge-padding">		<div class="header-search-form is-form-layout">
							<span class="h5">Buscar</span>
			        <form method="get" action="https://ligauniversitaria.org.uy/" class="rb-search-form"  data-search="post" data-limit="0" data-follow="0">
            <div class="search-form-inner">
				                    <span class="search-icon"><i class="rbi rbi-search" aria-hidden="true"></i></span>
				                <span class="search-text"><input type="text" class="field" placeholder="Buscar Titulares, Noticias...." value="" name="s"/></span>
                <span class="rb-search-submit"><input type="submit" value="Buscar"/><i class="rbi rbi-cright" aria-hidden="true"></i></span>
				            </div>
			        </form>
			</div>
		</div>
										<nav class="mobile-menu-wrap edge-padding">
						<ul id="mobile-menu" class="mobile-menu"><li id="menu-item-10020" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-10020"><a href="https://ligauniversitaria.org.uy/category/deportes/"><span>Deportes</span></a>
<ul class="sub-menu">
	<li id="menu-item-10021" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10021"><a href="https://ligauniversitaria.org.uy/category/deportes/futbol-2/"><span>Fútbol</span></a></li>
	<li id="menu-item-10022" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10022"><a href="https://ligauniversitaria.org.uy/category/deportes/basquetbol-2/"><span>Basquetbol</span></a></li>
	<li id="menu-item-10023" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10023"><a href="https://ligauniversitaria.org.uy/category/deportes/futsal-2/"><span>Futsal</span></a></li>
	<li id="menu-item-10024" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10024"><a href="https://ligauniversitaria.org.uy/category/deportes/hockey-2/"><span>Hockey</span></a></li>
	<li id="menu-item-10025" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10025"><a href="https://ligauniversitaria.org.uy/category/deportes/natacion/"><span>Natación</span></a></li>
	<li id="menu-item-10026" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10026"><a href="https://ligauniversitaria.org.uy/category/deportes/tenis-2/"><span>Tenis</span></a></li>
	<li id="menu-item-10027" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10027"><a href="https://ligauniversitaria.org.uy/category/deportes/futbol-femenino/"><span>Fútbol Femenino</span></a></li>
	<li id="menu-item-10028" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10028"><a href="https://ligauniversitaria.org.uy/category/deportes/deportes-playa/"><span>Deportes Playa</span></a></li>
	<li id="menu-item-10029" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10029"><a href="https://ligauniversitaria.org.uy/category/deportes/teqball/"><span>Teqball</span></a></li>
	<li id="menu-item-10030" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10030"><a href="https://ligauniversitaria.org.uy/category/deportes/ajedrez/"><span>Ajedrez</span></a></li>
	<li id="menu-item-10031" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10031"><a href="https://ligauniversitaria.org.uy/category/deportes/handball/"><span>Handball</span></a></li>
	<li id="menu-item-10032" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10032"><a href="https://ligauniversitaria.org.uy/category/deportes/volleyball-2/"><span>Volleyball</span></a></li>
</ul>
</li>
<li id="menu-item-10033" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-10033"><a href="https://ligauniversitaria.org.uy/category/estadisticas/"><span>Estadísticas</span></a>
<ul class="sub-menu">
	<li id="menu-item-10034" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10034"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futbol/"><span>Estadísticas Fútbol</span></a></li>
	<li id="menu-item-10035" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10035"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-basquetbol/"><span>Estadísticas Básquetbol</span></a></li>
	<li id="menu-item-10036" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10036"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-hockey/"><span>Estadísticas Hockey</span></a></li>
	<li id="menu-item-10037" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10037"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futbol-8/"><span>Estadísticas Fútbol 8</span></a></li>
	<li id="menu-item-10038" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10038"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-futsal/"><span>Estadísticas Futsal</span></a></li>
	<li id="menu-item-10039" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10039"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-deportes-plaa/"><span>Estadísticas Deportes Playa</span></a></li>
	<li id="menu-item-10040" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10040"><a href="https://ligauniversitaria.org.uy/category/estadisticas/estadisticas-natacion/"><span>Estadísticas Natación</span></a></li>
	<li id="menu-item-10041" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10041"><a href="https://ligauniversitaria.org.uy/estadisticas-detalle-historico-de-las-fechas/"><span>Detalle Histórico de las Fechas</span></a></li>
	<li id="menu-item-10219" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10219"><a href="https://ligauniversitaria.org.uy/estadisticas-detalle-historico-de-tablas-de-posiciones/"><span>Detalle Histórico de Tablas de Posiciones</span></a></li>
</ul>
</li>
<li id="menu-item-10042" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10042"><a href="#"><span>Normativas</span></a>
<ul class="sub-menu">
	<li id="menu-item-10043" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10043"><a href="https://ligauniversitaria.org.uy/estatutos/"><span>Estatutos</span></a></li>
	<li id="menu-item-10044" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10044"><a href="https://ligauniversitaria.org.uy/reglamento-general/"><span>Reglamento General</span></a></li>
	<li id="menu-item-10045" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10045"><a href="#"><span>Requisitos de Ingreso</span></a></li>
	<li id="menu-item-10052" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10052"><a href="https://ligauniversitaria.org.uy/category/circulares-2/"><span>Circulares</span></a></li>
	<li id="menu-item-10053" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10053"><a href="#"><span>Reglamentos de competencias</span></a></li>
	<li id="menu-item-10054" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10054"><a href="https://ligauniversitaria.org.uy/codigo-de-penas-futbol/"><span>Código de penas</span></a></li>
</ul>
</li>
<li id="menu-item-10055" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10055"><a href="#"><span>Servicios</span></a>
<ul class="sub-menu">
	<li id="menu-item-10056" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10056"><a href="http://laliga.dnsalias.net/delegados"><span>Delegados</span></a></li>
	<li id="menu-item-10057" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10057"><a href="http://laliga.dnsalias.net/jueces/"><span>Árbitros</span></a></li>
	<li id="menu-item-10058" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10058"><a href="http://54.80.4.11/lud/login.php"><span>Emisión de Facturas</span></a></li>
	<li id="menu-item-10059" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10059"><a href="http://laliga.dnsalias.net/pretramitjug/"><span>Pre &#8211; Tramitación</span></a></li>
	<li id="menu-item-10060" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10060"><a href="https://ligauniversitaria.org.uy/fallos-y-penas-2/"><span>Fallos y Penas</span></a></li>
	<li id="menu-item-10061" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10061"><a href="https://ligauniversitaria.org.uy/tribunal-de-penas-2/"><span>Tribunal de Penas</span></a></li>
	<li id="menu-item-10062" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10062"><a href="https://ligauniversitaria.org.uy/canchas/"><span>Canchas</span></a></li>
	<li id="menu-item-10134" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10134"><a href="https://ligauniversitaria.org.uy/formulario-de-articulo-28/"><span>Formulario de Artículo 28</span></a></li>
</ul>
</li>
<li id="menu-item-10063" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10063"><a href="#"><span>Institucional</span></a>
<ul class="sub-menu">
	<li id="menu-item-10064" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10064"><a href="#"><span>¿Qué es la LUD?</span></a></li>
	<li id="menu-item-10070" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10070"><a href="#"><span>Estructura</span></a></li>
	<li id="menu-item-10080" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-10080"><a href="https://ligauniversitaria.org.uy/preguntas-frecuentes/"><span>Preguntas Frecuentes</span></a></li>
</ul>
</li>
<li id="menu-item-10081" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10081"><a href="https://ligauniversitaria.org.uy/my-bookmarks/"><span>Mis Favoritos</span></a></li>
</ul>					</nav>
										<div class="collapse-sections edge-padding">
													<div class="mobile-socials">
								<span class="mobile-social-title h6">Síguenos</span>
								<a class="social-link-facebook" aria-label="Facebook" data-title="Facebook" href="https://www.facebook.com/LigaUniversitariaUy" target="_blank" rel="noopener nofollow"><i class="rbi rbi-facebook" aria-hidden="true"></i></a><a class="social-link-twitter" aria-label="Twitter" data-title="Twitter" href="https://twitter.com/LUD_Oficial" target="_blank" rel="noopener nofollow"><i class="rbi rbi-twitter" aria-hidden="true"></i></a><a class="social-link-instagram" aria-label="Instagram" data-title="Instagram" href="https://www.instagram.com/LigaUniversitariaUy/" target="_blank" rel="noopener nofollow"><i class="rbi rbi-instagram" aria-hidden="true"></i></a>							</div>
											</div>
											<div class="collapse-footer">
															<div class="collapse-footer-menu"><ul id="menu-footer-copyright" class="collapse-footer-menu-inner"><li id="menu-item-2168" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2168"><a href="#"><span>Advertise</span></a></li>
</ul></div>
															<div class="collapse-copyright">© 2023 Liga Universitaria de Deportes. Todos los derechos reservados.</div>
													</div>
									</div>
			</div>
		</div>
			</div>
	                </div>
            </div>
			        </header>
		    <div class="site-wrap">        <div class="page404-wrap rb-container edge-padding">
            <div class="page404-inner">
				                    <div class="page404-featured">
						                            <img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/404.png" alt="" height="600" width="800">
						                    </div>
				                <h1 class="page-title">Algo anda mal por aquí...</h1>
                <p class="page404-description">No hemos encontrado nada en esta ubicación</p>
				<form role="search" method="get" class="search-form wp-block-search" action="https://ligauniversitaria.org.uy/">
    <div class="search-form-icon"><i class="rbi rbi-search" aria-hidden="true"></i></div>
    <label class="search-form-input">
        <span class="screen-reader-text">Buscar:</span>
        <input type="search" class="search-field" placeholder="Buscar..." value="" name="s">
    </label>
    <div class="search-form-submit">
        <input type="submit" value="Buscar">
    </div>
</form>                <div class="page404-btn-wrap">
                    <a href="https://ligauniversitaria.org.uy/" class="page404-btn is-btn">Regresar al inicio</a>
                </div>
            </div>
        </div>
		</div>
		<footer class="footer-wrap rb-section left-dot footer-etemplate">
					<div data-elementor-type="wp-post" data-elementor-id="8409" class="elementor elementor-8409">
				<div class="elementor-element elementor-element-19b33f1 e-flex e-con-boxed e-con e-parent" data-id="19b33f1" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-b1bd24e elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="b1bd24e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.20.0 - 26-03-2024 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>										<img loading="lazy" width="142" height="160" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/logo_solo_u.png" class="attachment-large size-large wp-image-8404" alt="" loading="lazy" />													</div>
				</div>
		<div class="elementor-element elementor-element-0866872 e-con-full e-flex e-con e-child" data-id="0866872" data-element_type="container">
				<div class="elementor-element elementor-element-1dcb92a elementor-widget elementor-widget-foxiz-heading" data-id="1dcb92a" data-element_type="widget" data-widget_type="foxiz-heading.default">
				<div class="elementor-widget-container">
			<div id="uid_1dcb92a" class="block-h heading-layout-1"><div class="heading-inner"><h3 class="heading-title"><span>Contacto</span></h3></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-936dc51 elementor-widget elementor-widget-text-editor" data-id="936dc51" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.20.0 - 26-03-2024 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<h5>Dirección: Estadio Centenario Puerta 22<br />Tel: 2487 82 23<br />Fax: 2487 82 23 int. 14<br />e-mail: laliga@ligauniversitaria.org.uy</h5>						</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-dfd8d19 e-con-full e-flex e-con e-child" data-id="dfd8d19" data-element_type="container">
				<div class="elementor-element elementor-element-d568840 elementor-widget elementor-widget-foxiz-heading" data-id="d568840" data-element_type="widget" data-widget_type="foxiz-heading.default">
				<div class="elementor-widget-container">
			<div id="uid_d568840" class="block-h heading-layout-1"><div class="heading-inner"><h3 class="heading-title"><span>Suscríbete</span></h3></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-d202fd7 elementor-widget elementor-widget-text-editor" data-id="d202fd7" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<h5>a nuestra Newsletter</h5>						</div>
				</div>
				<div class="elementor-element elementor-element-a52938d elementor-widget elementor-widget-foxiz-newsletter-2" data-id="a52938d" data-element_type="widget" data-widget_type="foxiz-newsletter-2.default">
				<div class="elementor-widget-container">
			<div class="newsletter-box newsletter-style is-box-none newsletter-box-2"><div class="newsletter-inner"><div class="newsletter-form"><script>(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><!-- Mailchimp for WordPress v4.9.11 - https://wordpress.org/plugins/mailchimp-for-wp/ --><form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-8410" method="post" data-id="8410" data-name="Newsletter" ><div class="mc4wp-form-fields"><p>
    <label>
    <input type="text" name="FNAME" style="width: 173px; text-align: center;" placeholder="Tu Nombre" />
    <input type="text" name="LNAME" style="width: 173px; text-align: center;" placeholder="Tu Apellido" />
    </label>  
</p>
<p>
  <label>
    <input type="email" name="EMAIL" style="width: 350px; text-align: center;" placeholder="Tu dirección de e-mail" required />
  </label>
</p>

<p>
  <input type="submit" value="Suscribirme" />
</p></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1792617277" /><input type="hidden" name="_mc4wp_form_id" value="8410" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" /><div class="mc4wp-response"></div></form><!-- / Mailchimp for WordPress Plugin --></div></div></div>		</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-068275a e-con-full e-flex e-con e-child" data-id="068275a" data-element_type="container">
				<div class="elementor-element elementor-element-b01c1e0 elementor-widget elementor-widget-foxiz-ad-image" data-id="b01c1e0" data-element_type="widget" data-widget_type="foxiz-ad-image.default">
				<div class="elementor-widget-container">
			<div class="ad-wrap ad-image-wrap"><span class="ad-description is-meta">- Publicidad -</span><div class="ad-image"><img loading="lazy" loading="lazy" decoding="async" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/pelota_Liga_Final_web.jpg" alt="Ad image" width="384" height="216"></div></div>		</div>
				</div>
				</div>
					</div>
				</div>
				</div>
		<div class="footer-inner footer-has-bg">		<div class="footer-copyright">
			<div class="rb-container edge-padding">
							<div class="bottom-footer-section">
									<div class="footer-social-list">
						<span class="footer-social-list-title h6">Síguenos</span>
						<a class="social-link-facebook" aria-label="Facebook" data-title="Facebook" href="https://www.facebook.com/LigaUniversitariaUy" target="_blank" rel="noopener nofollow"><i class="rbi rbi-facebook" aria-hidden="true"></i></a><a class="social-link-twitter" aria-label="Twitter" data-title="Twitter" href="https://twitter.com/LUD_Oficial" target="_blank" rel="noopener nofollow"><i class="rbi rbi-twitter" aria-hidden="true"></i></a><a class="social-link-instagram" aria-label="Instagram" data-title="Instagram" href="https://www.instagram.com/LigaUniversitariaUy/" target="_blank" rel="noopener nofollow"><i class="rbi rbi-instagram" aria-hidden="true"></i></a>					</div>
							</div>
					<div class="copyright-inner">
				<div class="copyright">© 2023 Liga Universitaria de Deportes. Todos los derechos reservados.
</div><ul id="copyright-menu" class="copyright-menu"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8942"><a href="https://ligauniversitaria.org.uy/category/deportes/"><span>Deportes</span></a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8956"><a href="https://ligauniversitaria.org.uy/category/estadisticas/"><span><i class="menu-item-icon fa-solid fa-trophy" aria-hidden="true"></i>Estadísticas</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7788"><a href="#"><span>Normativas</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8955"><a href="#"><span>Servicios</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7807"><a href="#"><span>Institucional</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8962"><a href="https://ligauniversitaria.org.uy/my-bookmarks/"><span><i class="menu-item-icon fa-regular fa-bookmark" aria-hidden="true"></i>Mis Favoritos</span></a></li>
</ul>			</div>
					</div>
		</div>
	</div></footer>
		</div>
		<script>
            (function () {
                if (navigator.cookieEnabled) {
					                    const privacyBox = document.getElementById('rb-privacy');
                    const currentPrivacy = localStorage.getItem('RubyPrivacyAllowed');
                    if (!currentPrivacy && privacyBox?.classList) {
                        privacyBox.classList.add('activated');
                    }
					                    const readingSize = sessionStorage.getItem('rubyResizerStep');
                    if (readingSize) {
                        const body = document.querySelector('body');
                        if (readingSize === '2') {
                            body.classList.add('medium-entry-size');
                        } else if (readingSize === '3') {
                            body.classList.add('big-entry-size');
                        }
                    }
                }
            })();
		</script>
		<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/foxiz/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<script>(function() {function maybePrefixUrlField () {
  const value = this.value.trim()
  if (value !== '' && value.indexOf('http') !== 0) {
    this.value = 'http://' + value
  }
}

const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
for (let j = 0; j < urlFields.length; j++) {
  urlFields[j].addEventListener('blur', maybePrefixUrlField)
}
})();</script><aside id="rb-popup-newsletter" class="popup-newsletter mfp-animation mfp-hide light-scheme" data-display="scroll" data-delay="0" data-expired="1" data-offset="2000"><div class="popup-newsletter-inner"><div class="popup-newsletter-cover"><div class="popup-newsletter-cover-holder"><img loading="lazy" decoding="async" class="popup-newsletter-img" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/newsletter2.jpg" alt="" ></div></div><div class="popup-newsletter-content"><div class="popup-newsletter-header"><h6 class="popup-newsletter-heading h1">Únete a la Liga Universitaria!<span class="popup-newsletter-icon"><svg class="svg-icon svg-newsletter" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697
 c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94
 c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791
 s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087
 c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466
 c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10
 C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765
 l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116
 L492,45.704V389.483z" /><path fill="currentColor" d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143
 C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z" /><path fill="currentColor" d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143
 C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z" /><path fill="currentColor" d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07
 c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07
 C145.58,498.77,144.51,496.2,142.649,494.34z" /><path fill="currentColor" d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142
 c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z" /><path fill="currentColor" d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143
 c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z" /><path fill="currentColor" d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08
 c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06
 C286.43,140.75,285.36,138.17,283.5,136.31z" /></svg></span></h6><p class="popup-newsletter-description">Suscribete a nuestro newsletter y no te pierdas las últimas novedades!</p></div><div class="popup-newsletter-shortcode"><script>(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><!-- Mailchimp for WordPress v4.9.11 - https://wordpress.org/plugins/mailchimp-for-wp/ --><form id="mc4wp-form-3" class="mc4wp-form mc4wp-form-8410" method="post" data-id="8410" data-name="Newsletter" ><div class="mc4wp-form-fields"><p>
    <label>
    <input type="text" name="FNAME" style="width: 173px; text-align: center;" placeholder="Tu Nombre" />
    <input type="text" name="LNAME" style="width: 173px; text-align: center;" placeholder="Tu Apellido" />
    </label>  
</p>
<p>
  <label>
    <input type="email" name="EMAIL" style="width: 350px; text-align: center;" placeholder="Tu dirección de e-mail" required />
  </label>
</p>

<p>
  <input type="submit" value="Suscribirme" />
</p></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1792617277" /><input type="hidden" name="_mc4wp_form_id" value="8410" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-3" /><div class="mc4wp-response"></div></form><!-- / Mailchimp for WordPress Plugin --></div><div class="popup-newsletter-footer"><span class="is-meta">Puedes desuscribirte en cualquier momento</span></div></div></div></aside>		<script type="text/template" id="bookmark-toggle-template">
			<i class="rbi rbi-bookmark" aria-hidden="true" data-title="Guardar"></i>
			<i class="bookmarked-icon rbi rbi-bookmark-fill" aria-hidden="true" data-title="Deshacer Guardado"></i>
		</script>
		<script type="text/template" id="bookmark-ask-login-template">
			<a class="login-toggle" data-title="Iniciar sesión para guardar" href="#"><i class="rbi rbi-bookmark" aria-hidden="true"></i></a>
		</script>
		<script type="text/template" id="follow-ask-login-template">
			<a class="login-toggle" data-title="Ingresa para seguir" href="#"><i class="follow-icon rbi rbi-plus" aria-hidden="true"></i></a>
		</script>
		<script type="text/template" id="follow-toggle-template">
			<i class="follow-icon rbi rbi-plus" data-title="Seguir"></i>
			<i class="followed-icon rbi rbi-bookmark-fill" data-title="Dejar de Seguir"></i>
		</script>
					<aside id="bookmark-notification" class="bookmark-notification"></aside>
			<script type="text/template" id="bookmark-notification-template">
				<div class="bookmark-notification-inner {{classes}}">
					<div class="bookmark-featured">{{image}}</div>
					<div class="bookmark-inner">
						<span class="bookmark-title h5">{{title}}</span><span class="bookmark-desc">{{description}}</span>
					</div>
				</div>
			</script>
			<script type="text/template" id="follow-notification-template">
				<div class="follow-info bookmark-notification-inner {{classes}}">
					<span class="follow-desc"><span>{{description}}</span><strong>{{name}}</strong></span>
				</div>
			</script>
		        <div id="rb-user-popup-form" class="rb-user-popup-form mfp-animation mfp-hide">
            <div class="logo-popup-outer">
                <div class="logo-popup">
                    <div class="login-popup-header">
						                            <div class="logo-popup-logo">
								                                    <img loading="lazy" loading="lazy" decoding="async" src="https://ligauniversitaria.org.uy/wp-content/uploads/2023/09/cropped-logo_solo_u.png" alt="" height="512" width="512">
								                            </div>
						                            <span class="logo-popup-heading h3">Bienvenido!</span>
						                            <p class="logo-popup-description is-meta">Acceda a tu cuenta</p>
						                    </div>
					        <div class="user-form"><form name="popup-form" id="popup-form" action="https://ligauniversitaria.org.uy/liga-admin/" method="post"><p class="login-username">
				<label for="user_login">Nombre de usuario o correo electrónico</label>
				<input type="text" name="log" id="user_login" autocomplete="username" class="input" value="" size="20" />
			</p><p class="login-password">
				<label for="user_pass">Contraseña</label>
				<input type="password" name="pwd" id="user_pass" autocomplete="current-password" spellcheck="false" class="input" value="" size="20" />
			</p><p class="login-remember"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Recuérdame</label></p><p class="login-submit">
				<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="Acceder" />
				<input type="hidden" name="redirect_to" value="https://ligauniversitaria.org.uy/script.js" />
			</p></form></div>
        <div class="user-form-footer is-meta">
			            <a href="https://ligauniversitaria.org.uy/liga-admin/?action=lostpassword">Olvidaste la contraseña?</a>
        </div>
	                </div>
            </div>
        </div>
	<script id="stratum-editor-panel-js-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/stratum/assets/js/editor-panel.min.js?ver=1.4.0"></script>
<script id="foxiz-core-js-extra">
var foxizCoreParams = {"ajaxurl":"https://ligauniversitaria.org.uy/wp-admin/admin-ajax.php","darkModeID":"RubyDarkMode","cookieDomain":"","cookiePath":"/"};
//# sourceURL=foxiz-core-js-extra
</script>
<script id="foxiz-core-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/foxiz-core/assets/core.js?ver=2.0.1"></script>
<script id="jquery-waypoints-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/jquery.waypoints.min.js?ver=3.1.1"></script>
<script id="rbswiper-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/rbswiper.min.js?ver=6.5.8"></script>
<script id="jquery-magnific-popup-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/jquery.mp.min.js?ver=1.1.0"></script>
<script id="rb-tipsy-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/jquery.tipsy.min.js?ver=1.0"></script>
<script id="jquery-uitotop-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/jquery.ui.totop.min.js?ver=v1.2"></script>
<script id="foxiz-personalize-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/personalized.js?ver=2.0.1"></script>
<script id="foxiz-global-js-extra">
var foxizParams = {"twitterName":"LUD_Oficial","sliderSpeed":"5000","sliderEffect":"slide","sliderFMode":"1"};
//# sourceURL=foxiz-global-js-extra
</script>
<script id="foxiz-global-js" src="https://ligauniversitaria.org.uy/wp-content/themes/foxiz/assets/js/global.js?ver=2.0.1"></script>
<script id="mc4wp-forms-api-js" defer src="https://ligauniversitaria.org.uy/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.9.11"></script>
<script id="elementor-webpack-runtime-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.20.3"></script>
<script id="elementor-frontend-modules-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.20.3"></script>
<script id="elementor-waypoints-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"></script>
<script id="jquery-ui-core-js-before">
jQuery.uiBackCompat = true;
//# sourceURL=jquery-ui-core-js-before
</script>
<script id="jquery-ui-core-js" src="https://ligauniversitaria.org.uy/wp-includes/js/jquery/ui/core.min.js?ver=1.14.2"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Compartir en Facebook","shareOnTwitter":"Compartir en Twitter","pinIt":"Pinear","download":"Descargar","downloadImage":"Descargar imagen","fullscreen":"Pantalla completa","zoom":"Zoom","share":"Compartir","playVideo":"Reproducir v\u00eddeo","previous":"Anterior","next":"Siguiente","close":"Cerrar","a11yCarouselWrapperAriaLabel":"Carrusel | Scroll horizontal: Flecha izquierda y derecha","a11yCarouselPrevSlideMessage":"Diapositiva anterior","a11yCarouselNextSlideMessage":"Diapositiva siguiente","a11yCarouselFirstSlideMessage":"Esta es la primera diapositiva","a11yCarouselLastSlideMessage":"Esta es la \u00faltima diapositiva","a11yCarouselPaginationBulletMessage":"Ir a la diapositiva"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"M\u00f3vil vertical","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"M\u00f3vil horizontal","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tableta vertical","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tableta horizontal","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Port\u00e1til","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Pantalla grande","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.20.3","is_static":false,"experimentalFeatures":{"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"editor_v2":true,"block_editor_assets_optimize":true,"ai-layout":true,"landing-pages":true,"e_image_loading_optimization":true},"urls":{"assets":"https:\/\/ligauniversitaria.org.uy\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":0,"title":"P\u00e1gina no encontrada &#8211; Liga Universitaria de Deportes","excerpt":""}};
//# sourceURL=elementor-frontend-js-before
</script>
<script id="elementor-frontend-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.20.3"></script>
<script id="imagesloaded-js" src="https://ligauniversitaria.org.uy/wp-includes/js/imagesloaded.min.js?ver=5.0.0"></script>
<script id="stratum-frontend-js-js-extra">
var stratum = {"localeData":{"":{"domain":"stratum","lang":"es_UY"}},"settings":{"wide_support":false},"ajax_url":"https://ligauniversitaria.org.uy/wp-admin/admin-ajax.php","nonces":{"get_articles":"3d87d9c423","get_elementor_templates":"187651dd57"}};
//# sourceURL=stratum-frontend-js-js-extra
</script>
<script id="stratum-frontend-js-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/stratum/assets/js/frontend.min.js?ver=1.4.0"></script>
<script id="underscore-js" src="https://ligauniversitaria.org.uy/wp-includes/js/underscore.min.js?ver=1.13.8"></script>
<script id="wp-util-js-extra">
var _wpUtilSettings = {"ajax":{"url":"/wp-admin/admin-ajax.php"}};
//# sourceURL=wp-util-js-extra
</script>
<script id="wp-util-js" src="https://ligauniversitaria.org.uy/wp-includes/js/wp-util.min.js?ver=960f815e61e1b7d30ff5f29ce80cb153"></script>
<script id="wpforms-elementor-js-extra">
var wpformsElementorVars = {"captcha_provider":"hcaptcha","recaptcha_type":"v2"};
//# sourceURL=wpforms-elementor-js-extra
</script>
<script id="wpforms-elementor-js" src="https://ligauniversitaria.org.uy/wp-content/plugins/wpforms-lite/assets/js/integrations/elementor/frontend.min.js?ver=1.8.7.2"></script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://ligauniversitaria.org.uy/wp-includes/js/wp-emoji-release.min.js?ver=960f815e61e1b7d30ff5f29ce80cb153"}}
</script>
<script type="module">
/*! This file is auto-generated */
var e="script#wp-emoji-settings",t=document.querySelector(e);if(!(t instanceof HTMLScriptElement))throw new Error("Element missing: "+e);const r=JSON.parse(t.text),s=(window._wpemojiSettings=r,"wpEmojiSettingsSupports"),o=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(s,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const r=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===r[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,r){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!r(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,r){let a;const s=(a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),o=(s.textBaseline="top",s.font="600 32px Arial",{});return e.forEach(e=>{o[e]=t(s,e,n,r)}),o}function a(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}r.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(s));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(o),u.toString(),c.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"});const a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=e=>{i(n=e.data),a.terminate(),t(n)})}catch(e){}i(n=f(o,u,c,p))}t(n)}).then(e=>{for(const n in e)r.supports[n]=e[n],r.supports.everything=r.supports.everything&&r.supports[n],"flag"!==n&&(r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&r.supports[n]);var t;r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&!r.supports.flag,r.supports.everything||((t=r.source||{}).concatemoji?a(t.concatemoji):t.wpemoji&&t.twemoji&&(a(t.twemoji),a(t.wpemoji)))});
//# sourceURL=https://ligauniversitaria.org.uy/wp-includes/js/wp-emoji-loader.min.js
</script>
</body>
</html>