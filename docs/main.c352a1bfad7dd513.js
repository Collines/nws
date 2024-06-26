"use strict";
(self.webpackChunkNWS_MWRI = self.webpackChunkNWS_MWRI || []).push([
  [179],
  {
    4395: ($e, pe, R) => {
      var f = R(6593),
        G = R(9343),
        N = R(4769);
      const le = [
        { path: "", redirectTo: "home", pathMatch: "full" },
        {
          path: "home",
          loadChildren: () =>
            R.e(980)
              .then(R.bind(R, 6980))
              .then((A) => A.HomeModule),
        },
        {
          path: "sector",
          loadChildren: () =>
            R.e(37)
              .then(R.bind(R, 3037))
              .then((A) => A.SectorModule),
        },
        {
          path: "call",
          loadChildren: () =>
            R.e(949)
              .then(R.bind(R, 4949))
              .then((A) => A.CallUsModule),
        },
      ];
      let J = (() => {
          class A {
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵmod = N.oAB({ type: A }));
            static #n = (this.ɵinj = N.cJS({
              imports: [G.Bz.forRoot(le), G.Bz],
            }));
          }
          return A;
        })(),
        ee = (() => {
          class A {
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵcmp = N.Xpm({
              type: A,
              selectors: [["app-navbar"]],
              decls: 66,
              vars: 0,
              consts: [
                [
                  1,
                  "navbar",
                  "navbar-expand-lg",
                  "bg-white",
                  "py-2",
                  "fixed-top",
                  "shadow",
                ],
                [1, "container"],
                [
                  "routerLink",
                  "",
                  1,
                  "navbar-brand",
                  "d-flex",
                  "align-items-center",
                ],
                ["src", "/nws/assets/images/logo.png", "alt", ""],
                [1, "me-2"],
                [1, "text-muted"],
                [
                  "type",
                  "button",
                  "data-bs-toggle",
                  "collapse",
                  "data-bs-target",
                  "#navbarSupportedContent",
                  "aria-controls",
                  "navbarSupportedContent",
                  "aria-expanded",
                  "false",
                  "aria-label",
                  "Toggle navigation",
                  1,
                  "navbar-toggler",
                ],
                [1, "fa-solid", "fa-bars", "p-1"],
                [
                  "id",
                  "navbarSupportedContent",
                  1,
                  "collapse",
                  "navbar-collapse",
                ],
                [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"],
                [1, "nav-item"],
                [
                  "aria-current",
                  "page",
                  "routerLink",
                  "/home",
                  "routerLinkActive",
                  "active",
                  1,
                  "nav-link",
                  "mx-2",
                ],
                [1, "nav-item", "dropdown"],
                [
                  "routerLink",
                  "/sector",
                  "routerLinkActive",
                  "active",
                  "role",
                  "button",
                  "data-bs-toggle",
                  "dropdown",
                  "aria-expanded",
                  "false",
                  1,
                  "nav-link",
                  "dropdown-toggle",
                  "mx-2",
                ],
                [1, "dropdown-menu", "mt-3"],
                ["href", "#", 1, "dropdown-item"],
                [
                  "role",
                  "button",
                  "data-bs-toggle",
                  "dropdown",
                  "aria-expanded",
                  "false",
                  1,
                  "nav-link",
                  "dropdown-toggle",
                  "mx-2",
                ],
                [
                  "aria-current",
                  "page",
                  "routerLink",
                  "call",
                  "routerLinkActive",
                  "active",
                  1,
                  "nav-link",
                  "mx-2",
                ],
              ],
              template: function (_, S) {
                1 & _ &&
                  (N.TgZ(0, "nav", 0)(1, "div", 1)(2, "a", 2),
                  N._UZ(3, "img", 3),
                  N.TgZ(4, "div", 4)(5, "h6"),
                  N._uU(
                    6,
                    "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0645\u0627\u0626\u064a\u0629 \u0648\u0627\u0644\u0631\u064a"
                  ),
                  N.qZA(),
                  N.TgZ(7, "h6", 5),
                  N._uU(
                    8,
                    "\u0642\u0637\u0627\u0639 \u0634\u0626\u0648\u0646 \u0645\u064a\u0627\u0647 \u0627\u0644\u0646\u064a\u0644"
                  ),
                  N.qZA()()(),
                  N.TgZ(9, "button", 6),
                  N._UZ(10, "i", 7),
                  N.qZA(),
                  N.TgZ(11, "div", 8)(12, "ul", 9)(13, "li", 10)(14, "a", 11)(
                    15,
                    "span"
                  ),
                  N._uU(16, "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"),
                  N.qZA()()(),
                  N.TgZ(17, "li", 12)(18, "a", 13)(19, "span"),
                  N._uU(20, "\u0627\u0644\u0642\u0637\u0627\u0639"),
                  N.qZA()(),
                  N.TgZ(21, "ul", 14)(22, "li")(23, "a", 15),
                  N._uU(
                    24,
                    " \u0646\u0628\u0630\u0629 \u062a\u0627\u0631\u064a\u062e\u064a\u0629"
                  ),
                  N.qZA()(),
                  N.TgZ(25, "li")(26, "a", 15),
                  N._uU(
                    27,
                    "\u0631\u0626\u064a\u0633 \u0627\u0644\u0642\u0637\u0627\u0639"
                  ),
                  N.qZA()(),
                  N.TgZ(28, "li")(29, "a", 15),
                  N._uU(
                    30,
                    " \u0627\u0644\u0647\u064a\u0643\u0644 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a"
                  ),
                  N.qZA()(),
                  N.TgZ(31, "li")(32, "a", 15),
                  N._uU(
                    33,
                    " \u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0633\u0627\u0628\u0642\u0629"
                  ),
                  N.qZA()()()(),
                  N.TgZ(34, "li", 12)(35, "a", 16)(36, "span"),
                  N._uU(
                    37,
                    " \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0639\u0644\u0627\u0645\u0649"
                  ),
                  N.qZA()(),
                  N.TgZ(38, "ul", 14)(39, "li")(40, "a", 15),
                  N._uU(41, "\u0627\u0644\u0623\u062e\u0628\u0627\u0631"),
                  N.qZA()(),
                  N.TgZ(42, "li")(43, "a", 15),
                  N._uU(
                    44,
                    "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631"
                  ),
                  N.qZA()(),
                  N.TgZ(45, "li")(46, "a", 15),
                  N._uU(
                    47,
                    "\u0645\u0639\u0631\u0636 \u0627\u0644\u0641\u064a\u062f\u064a\u0648"
                  ),
                  N.qZA()()()(),
                  N.TgZ(48, "li", 12)(49, "a", 16)(50, "span"),
                  N._uU(51, " \u0625\u0639\u0644\u0627\u0646\u0627\u062a"),
                  N.qZA()(),
                  N.TgZ(52, "ul", 14)(53, "li")(54, "a", 15),
                  N._uU(
                    55,
                    "\u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0627\u062a \u0648\u0627\u0644\u0645\u0632\u0627\u064a\u062f\u0627\u062a"
                  ),
                  N.qZA()(),
                  N.TgZ(56, "li")(57, "a", 15),
                  N._uU(58, "\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),
                  N.qZA()(),
                  N.TgZ(59, "li")(60, "a", 15),
                  N._uU(61, "\u0625\u0639\u0644\u0627\u0646\u0627\u062a"),
                  N.qZA()()()(),
                  N.TgZ(62, "li", 10)(63, "a", 17)(64, "span"),
                  N._uU(65, "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"),
                  N.qZA()()()()()()());
              },
              dependencies: [G.rH, G.Od],
              styles: [
                'nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;transition:var(--main-transition)}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1)}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-weight:600!important;position:relative}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before{font-family:"Font Awesome 5 Free";font-weight:900;content:"\\f043";position:absolute;inset:0;font-size:50px;line-height:50px;z-index:-1;display:flex;align-items:center;justify-content:center;text-align:center;transition:all .2s linear}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{position:absolute;inset:7px -15px 3px -10%;background:#fff;content:"";z-index:-1}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:var(--main-color)}.dropdown-menu[_ngcontent-%COMP%]{right:0;text-align:right;cursor:pointer}.dropdown-menu[_ngcontent-%COMP%]{border-top:5px solid var(--main-color);border-radius:0!important}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{color:var(--main-color)!important;border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer;padding:7px}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:#b5102bcc!important}.dropdown-toggle[_ngcontent-%COMP%]:after{color:var(--main-color)}.navbar-toggler[_ngcontent-%COMP%]{border:2px solid var(--main-color)!important}.navbar-toggler[_ngcontent-%COMP%]:focus{box-shadow:2px 2px var(--main-color)!important}.navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main-color)!important}@media screen and (max-width: 991.9px){nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before{content:none}}',
              ],
            }));
          }
          return A;
        })(),
        ye = (() => {
          class A {
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵcmp = N.Xpm({
              type: A,
              selectors: [["app-footer"]],
              decls: 81,
              vars: 0,
              consts: [
                [1, "footer-section"],
                [1, "container"],
                [1, "row", "py-3", "gy-3"],
                [1, "col-lg-3", "offset-1", "col-md-6"],
                [1, "data", "mb-4"],
                [1, "footer-social", "mt-3"],
                ["href", "https://www.facebook.com/", "target", "_blank"],
                [1, "fa-brands", "fa-facebook-f"],
                ["href", "https://www.instagram.com/", "target", "_blank"],
                [1, "fa-brands", "fa-instagram"],
                ["href", "https://twitter.com/", "target", "_blank"],
                [1, "fa-brands", "fa-twitter"],
                ["href", "https://www.linkedin.com/feed/", "target", "_blank"],
                [1, "fa-brands", "fa-linkedin-in"],
                [1, "col-lg-2", "col-md-6"],
                [1, "footer-widget"],
                [1, "px-0"],
                [1, "fa-solid", "fa-chevron-left", "ms-2"],
                ["href", "#"],
                [1, "col-lg-3", "col-md-6"],
                ["href", ""],
                [1, "px-0", "mb-1"],
                [1, "copyright-reserved", "text-center", "py-3"],
                [1, "row"],
                [1, "col-lg-12"],
                [1, "copyright-text"],
              ],
              template: function (_, S) {
                1 & _ &&
                  (N.TgZ(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                    4,
                    "div",
                    4
                  )(5, "h4"),
                  N._uU(
                    6,
                    "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0645\u0627\u0626\u064a\u0629 \u0648\u0627\u0644\u0631\u064a "
                  ),
                  N.qZA(),
                  N.TgZ(7, "h6"),
                  N._uU(
                    8,
                    "\u0642\u0637\u0627\u0639 \u0634\u0626\u0648\u0646 \u0645\u064a\u0627\u0647 \u0627\u0644\u0646\u064a\u0644"
                  ),
                  N.qZA(),
                  N.TgZ(9, "p"),
                  N._uU(
                    10,
                    "\u0639\u0631\u0636 \u0623\u0646\u0634\u0637\u0629 \u0642\u0637\u0627\u0639 \u0634\u0626\u0648\u0646 \u0645\u064a\u0627\u0647 \u0627\u0644\u0646\u064a\u0644 \u0648\u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u0635\u0627\u062f\u0631\u0629 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0645\u0627\u0626\u064a\u0629 \u0648\u0627\u0644\u0631\u064a."
                  ),
                  N.qZA(),
                  N.TgZ(11, "div", 5)(12, "a", 6),
                  N._UZ(13, "i", 7),
                  N.qZA(),
                  N.TgZ(14, "a", 8),
                  N._UZ(15, "i", 9),
                  N.qZA(),
                  N.TgZ(16, "a", 10),
                  N._UZ(17, "i", 11),
                  N.qZA(),
                  N.TgZ(18, "a", 12),
                  N._UZ(19, "i", 13),
                  N.qZA()()()(),
                  N.TgZ(20, "div", 14)(21, "div", 15)(22, "h5"),
                  N._uU(23, "\u0627\u0644\u0642\u0637\u0627\u0639"),
                  N.qZA(),
                  N.TgZ(24, "ul", 16)(25, "li"),
                  N._UZ(26, "i", 17),
                  N.TgZ(27, "a", 18),
                  N._uU(
                    28,
                    "\u0646\u0628\u0630\u0629 \u062a\u0627\u0631\u064a\u062e\u064a\u0629"
                  ),
                  N.qZA()(),
                  N.TgZ(29, "li"),
                  N._UZ(30, "i", 17),
                  N.TgZ(31, "a", 18),
                  N._uU(
                    32,
                    "\u0631\u0626\u064a\u0633 \u0627\u0644\u0642\u0637\u0627\u0639"
                  ),
                  N.qZA()(),
                  N.TgZ(33, "li"),
                  N._UZ(34, "i", 17),
                  N.TgZ(35, "a", 18),
                  N._uU(
                    36,
                    "\u0627\u0644\u0647\u064a\u0643\u0644 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a"
                  ),
                  N.qZA()(),
                  N.TgZ(37, "li"),
                  N._UZ(38, "i", 17),
                  N.TgZ(39, "a", 18),
                  N._uU(
                    40,
                    "\u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0633\u0627\u0628\u0642\u0629"
                  ),
                  N.qZA()()()()(),
                  N.TgZ(41, "div", 19)(42, "div", 15)(43, "h5"),
                  N._uU(
                    44,
                    "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0639\u0644\u0627\u0645\u064a"
                  ),
                  N.qZA(),
                  N.TgZ(45, "ul", 16)(46, "li"),
                  N._UZ(47, "i", 17),
                  N.TgZ(48, "a", 20),
                  N._uU(49, "\u0627\u0644\u0627\u062e\u0628\u0627\u0631"),
                  N.qZA()(),
                  N.TgZ(50, "li"),
                  N._UZ(51, "i", 17),
                  N.TgZ(52, "a", 20),
                  N._uU(
                    53,
                    "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631"
                  ),
                  N.qZA()(),
                  N.TgZ(54, "li"),
                  N._UZ(55, "i", 17),
                  N.TgZ(56, "a", 20),
                  N._uU(
                    57,
                    "\u0645\u0639\u0631\u0636 \u0627\u0644\u0641\u064a\u062f\u064a\u0648"
                  ),
                  N.qZA()()()()(),
                  N.TgZ(58, "div", 19)(59, "div", 15)(60, "h5"),
                  N._uU(61, "\u0627\u0639\u0644\u0627\u0646\u0627\u062a"),
                  N.qZA(),
                  N.TgZ(62, "ul", 21)(63, "li"),
                  N._UZ(64, "i", 17),
                  N.TgZ(65, "a", 20),
                  N._uU(
                    66,
                    " \u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0627\u062a \u0648 \u0627\u0644\u0645\u0632\u0627\u064a\u062f\u0627\u062a "
                  ),
                  N.qZA()(),
                  N.TgZ(67, "li"),
                  N._UZ(68, "i", 17),
                  N.TgZ(69, "a", 20),
                  N._uU(70, "\u0627\u0644\u0648\u0638\u0627\u0626\u0641 "),
                  N.qZA()(),
                  N.TgZ(71, "li"),
                  N._UZ(72, "i", 17),
                  N.TgZ(73, "a", 20),
                  N._uU(74, " \u0627\u0639\u0644\u0627\u0646\u0627\u062a"),
                  N.qZA()()()()()()()(),
                  N.TgZ(75, "div", 22)(76, "div", 1)(77, "div", 23)(
                    78,
                    "div",
                    24
                  )(79, "div", 25),
                  N._uU(
                    80,
                    " \u062d\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \xa9 \u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0629 10-2023 \u0642\u0637\u0627\u0639 \u0634\u0626\u0648\u0646 \u0645\u064a\u0627\u0647 \u0627\u0644\u0646\u064a\u0644 - \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 "
                  ),
                  N.qZA()()()()());
              },
              styles: [
                'footer[_ngcontent-%COMP%]{padding-top:70px;background-image:url(/assets/images/ftbg2.png);background-size:contain;background-color:var(--second-color)}footer[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#efeeee;font-size:16px;line-height:2;transition:all .3s}footer[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:translate(5px);-webkit-transform:translateX(5px);-moz-transform:translateX(5px);-ms-transform:translateX(5px);-o-transform:translateX(5px)}footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{color:#f8f8f8}footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:17px;margin:10px 0 20px}footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.8}footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;height:40px;width:40px;background:#434445;color:#fff;text-align:center;line-height:40px;margin-right:7px;position:relative;z-index:1;transition:all .3s}footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--main-color)}footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#f8f8f8;margin-bottom:30px;position:relative}footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0;bottom:-10px;height:2px;width:60px;background-color:var(--main-color)}.footer-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main-color)}.copyright-reserved[_ngcontent-%COMP%]{border-top:1px solid #434445;background-color:#192a4e}.copyright-reserved[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%]{color:#f8f8f8}.copyright-reserved[_ngcontent-%COMP%]   .subscribeFooter[_ngcontent-%COMP%]{background-color:var(--main-color)}',
              ],
            }));
          }
          return A;
        })(),
        Ie = (() => {
          class A {
            constructor() {
              this.title = "NWS-MWRI";
            }
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵcmp = N.Xpm({
              type: A,
              selectors: [["app-root"]],
              decls: 5,
              vars: 0,
              consts: [
                ["dir", "rtl"],
                [1, "wrapper"],
              ],
              template: function (_, S) {
                1 & _ &&
                  (N.TgZ(0, "div", 0),
                  N._UZ(1, "app-navbar"),
                  N.TgZ(2, "div", 1),
                  N._UZ(3, "router-outlet"),
                  N.qZA(),
                  N._UZ(4, "app-footer"),
                  N.qZA());
              },
              dependencies: [G.lC, ee, ye],
              styles: [".wrapper[_ngcontent-%COMP%]{margin-top:85px}"],
            }));
          }
          return A;
        })();
      var _e = R(95),
        ie = R(6825);
      function Ce(A) {
        return new N.vHH(3e3, !1);
      }
      function vt(A) {
        switch (A.length) {
          case 0:
            return new ie.ZN();
          case 1:
            return A[0];
          default:
            return new ie.ZE(A);
        }
      }
      function Ve(A, u, h = new Map(), _ = new Map()) {
        const S = [],
          P = [];
        let B = -1,
          V = null;
        if (
          (u.forEach((W) => {
            const ne = W.get("offset"),
              Se = ne == B,
              Pe = (Se && V) || new Map();
            W.forEach((_t, ut) => {
              let We = ut,
                nt = _t;
              if ("offset" !== ut)
                switch (((We = A.normalizePropertyName(We, S)), nt)) {
                  case ie.k1:
                    nt = h.get(ut);
                    break;
                  case ie.l3:
                    nt = _.get(ut);
                    break;
                  default:
                    nt = A.normalizeStyleValue(ut, We, nt, S);
                }
              Pe.set(We, nt);
            }),
              Se || P.push(Pe),
              (V = Pe),
              (B = ne);
          }),
          S.length)
        )
          throw (function z(A) {
            return new N.vHH(3502, !1);
          })();
        return P;
      }
      function At(A, u, h, _) {
        switch (u) {
          case "start":
            A.onStart(() => _(h && In(h, "start", A)));
            break;
          case "done":
            A.onDone(() => _(h && In(h, "done", A)));
            break;
          case "destroy":
            A.onDestroy(() => _(h && In(h, "destroy", A)));
        }
      }
      function In(A, u, h) {
        const P = Ge(
            A.element,
            A.triggerName,
            A.fromState,
            A.toState,
            u || A.phaseName,
            h.totalTime ?? A.totalTime,
            !!h.disabled
          ),
          B = A._data;
        return null != B && (P._data = B), P;
      }
      function Ge(A, u, h, _, S = "", P = 0, B) {
        return {
          element: A,
          triggerName: u,
          fromState: h,
          toState: _,
          phaseName: S,
          totalTime: P,
          disabled: !!B,
        };
      }
      function ct(A, u, h) {
        let _ = A.get(u);
        return _ || A.set(u, (_ = h)), _;
      }
      function hn(A) {
        const u = A.indexOf(":");
        return [A.substring(1, u), A.slice(u + 1)];
      }
      const on = (() =>
        typeof document > "u" ? null : document.documentElement)();
      function Tn(A) {
        const u = A.parentNode || A.host || null;
        return u === on ? null : u;
      }
      let kt = null,
        ht = !1;
      function Pn(A, u) {
        for (; u; ) {
          if (u === A) return !0;
          u = Tn(u);
        }
        return !1;
      }
      function mr(A, u, h) {
        if (h) return Array.from(A.querySelectorAll(u));
        const _ = A.querySelector(u);
        return _ ? [_] : [];
      }
      let li = (() => {
          class A {
            validateStyleProperty(h) {
              return (function at(A) {
                kt ||
                  ((kt =
                    (function nr() {
                      return typeof document < "u" ? document.body : null;
                    })() || {}),
                  (ht = !!kt.style && "WebkitAppearance" in kt.style));
                let u = !0;
                return (
                  kt.style &&
                    !(function gr(A) {
                      return "ebkit" == A.substring(1, 6);
                    })(A) &&
                    ((u = A in kt.style),
                    !u &&
                      ht &&
                      (u =
                        "Webkit" + A.charAt(0).toUpperCase() + A.slice(1) in
                        kt.style)),
                  u
                );
              })(h);
            }
            matchesElement(h, _) {
              return !1;
            }
            containsElement(h, _) {
              return Pn(h, _);
            }
            getParentElement(h) {
              return Tn(h);
            }
            query(h, _, S) {
              return mr(h, _, S);
            }
            computeStyle(h, _, S) {
              return S || "";
            }
            animate(h, _, S, P, B, V = [], W) {
              return new ie.ZN(S, P);
            }
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵprov = N.Yz7({ token: A, factory: A.ɵfac }));
          }
          return A;
        })(),
        $t = (() => {
          class A {
            static #e = (this.NOOP = new li());
          }
          return A;
        })();
      const En = 1e3,
        It = "ng-enter",
        Mt = "ng-leave",
        Gn = "ng-trigger",
        yr = ".ng-trigger",
        Rn = "ng-animating",
        Qr = ".ng-animating";
      function cn(A) {
        if ("number" == typeof A) return A;
        const u = A.match(/^(-?[\.\d]+)(m?s)/);
        return !u || u.length < 2 ? 0 : Hn(parseFloat(u[1]), u[2]);
      }
      function Hn(A, u) {
        return "s" === u ? A * En : A;
      }
      function rr(A, u, h) {
        return A.hasOwnProperty("duration")
          ? A
          : (function ir(A, u, h) {
              let S,
                P = 0,
                B = "";
              if ("string" == typeof A) {
                const V = A.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === V)
                  return u.push(Ce()), { duration: 0, delay: 0, easing: "" };
                S = Hn(parseFloat(V[1]), V[2]);
                const W = V[3];
                null != W && (P = Hn(parseFloat(W), V[4]));
                const ne = V[5];
                ne && (B = ne);
              } else S = A;
              if (!h) {
                let V = !1,
                  W = u.length;
                S < 0 &&
                  (u.push(
                    (function Be() {
                      return new N.vHH(3100, !1);
                    })()
                  ),
                  (V = !0)),
                  P < 0 &&
                    (u.push(
                      (function be() {
                        return new N.vHH(3101, !1);
                      })()
                    ),
                    (V = !0)),
                  V && u.splice(W, 0, Ce());
              }
              return { duration: S, delay: P, easing: B };
            })(A, u, h);
      }
      function Fn(A, u = {}) {
        return (
          Object.keys(A).forEach((h) => {
            u[h] = A[h];
          }),
          u
        );
      }
      function ci(A) {
        const u = new Map();
        return (
          Object.keys(A).forEach((h) => {
            u.set(h, A[h]);
          }),
          u
        );
      }
      function k(A, u = new Map(), h) {
        if (h) for (let [_, S] of h) u.set(_, S);
        for (let [_, S] of A) u.set(_, S);
        return u;
      }
      function H(A, u, h) {
        u.forEach((_, S) => {
          const P = Wn(S);
          h && !h.has(S) && h.set(S, A.style[P]), (A.style[P] = _);
        });
      }
      function ae(A, u) {
        u.forEach((h, _) => {
          const S = Wn(_);
          A.style[S] = "";
        });
      }
      function Oe(A) {
        return Array.isArray(A) ? (1 == A.length ? A[0] : (0, ie.vP)(A)) : A;
      }
      const Et = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Ot(A) {
        let u = [];
        if ("string" == typeof A) {
          let h;
          for (; (h = Et.exec(A)); ) u.push(h[1]);
          Et.lastIndex = 0;
        }
        return u;
      }
      function Nt(A, u, h) {
        const _ = A.toString(),
          S = _.replace(Et, (P, B) => {
            let V = u[B];
            return (
              null == V &&
                (h.push(
                  (function St(A) {
                    return new N.vHH(3003, !1);
                  })()
                ),
                (V = "")),
              V.toString()
            );
          });
        return S == _ ? A : S;
      }
      function xn(A) {
        const u = [];
        let h = A.next();
        for (; !h.done; ) u.push(h.value), (h = A.next());
        return u;
      }
      const wn = /-+([a-z0-9])/g;
      function Wn(A) {
        return A.replace(wn, (...u) => u[1].toUpperCase());
      }
      function qt(A, u, h) {
        switch (u.type) {
          case 7:
            return A.visitTrigger(u, h);
          case 0:
            return A.visitState(u, h);
          case 1:
            return A.visitTransition(u, h);
          case 2:
            return A.visitSequence(u, h);
          case 3:
            return A.visitGroup(u, h);
          case 4:
            return A.visitAnimate(u, h);
          case 5:
            return A.visitKeyframes(u, h);
          case 6:
            return A.visitStyle(u, h);
          case 8:
            return A.visitReference(u, h);
          case 9:
            return A.visitAnimateChild(u, h);
          case 10:
            return A.visitAnimateRef(u, h);
          case 11:
            return A.visitQuery(u, h);
          case 12:
            return A.visitStagger(u, h);
          default:
            throw (function Fe(A) {
              return new N.vHH(3004, !1);
            })();
        }
      }
      function Ar(A, u) {
        return window.getComputedStyle(A)[u];
      }
      const Ln = "*";
      function Mn(A, u) {
        const h = [];
        return (
          "string" == typeof A
            ? A.split(/\s*,\s*/).forEach((_) =>
                (function pt(A, u, h) {
                  if (":" == A[0]) {
                    const W = (function pi(A, u) {
                      switch (A) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (h, _) => parseFloat(_) > parseFloat(h);
                        case ":decrement":
                          return (h, _) => parseFloat(_) < parseFloat(h);
                        default:
                          return (
                            u.push(
                              (function yn(A) {
                                return new N.vHH(3016, !1);
                              })()
                            ),
                            "* => *"
                          );
                      }
                    })(A, h);
                    if ("function" == typeof W) return void u.push(W);
                    A = W;
                  }
                  const _ = A.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == _ || _.length < 4)
                    return (
                      h.push(
                        (function je(A) {
                          return new N.vHH(3015, !1);
                        })()
                      ),
                      u
                    );
                  const S = _[1],
                    P = _[2],
                    B = _[3];
                  u.push(Xr(S, B));
                  "<" == P[0] && !(S == Ln && B == Ln) && u.push(Xr(B, S));
                })(_, h, u)
              )
            : h.push(A),
          h
        );
      }
      const Ir = new Set(["true", "1"]),
        Tr = new Set(["false", "0"]);
      function Xr(A, u) {
        const h = Ir.has(A) || Tr.has(A),
          _ = Ir.has(u) || Tr.has(u);
        return (S, P) => {
          let B = A == Ln || A == S,
            V = u == Ln || u == P;
          return (
            !B && h && "boolean" == typeof S && (B = S ? Ir.has(A) : Tr.has(A)),
            !V && _ && "boolean" == typeof P && (V = P ? Ir.has(u) : Tr.has(u)),
            B && V
          );
        };
      }
      const Or = new RegExp("s*:selfs*,?", "g");
      function gi(A, u, h, _) {
        return new sr(A).build(u, h, _);
      }
      class sr {
        constructor(u) {
          this._driver = u;
        }
        build(u, h, _) {
          const S = new jr(h);
          return this._resetContextStyleTimingState(S), qt(this, Oe(u), S);
        }
        _resetContextStyleTimingState(u) {
          (u.currentQuerySelector = ""),
            (u.collectedStyles = new Map()),
            u.collectedStyles.set("", new Map()),
            (u.currentTime = 0);
        }
        visitTrigger(u, h) {
          let _ = (h.queryCount = 0),
            S = (h.depCount = 0);
          const P = [],
            B = [];
          return (
            "@" == u.name.charAt(0) &&
              h.errors.push(
                (function rt() {
                  return new N.vHH(3006, !1);
                })()
              ),
            u.definitions.forEach((V) => {
              if ((this._resetContextStyleTimingState(h), 0 == V.type)) {
                const W = V,
                  ne = W.name;
                ne
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((Se) => {
                    (W.name = Se), P.push(this.visitState(W, h));
                  }),
                  (W.name = ne);
              } else if (1 == V.type) {
                const W = this.visitTransition(V, h);
                (_ += W.queryCount), (S += W.depCount), B.push(W);
              } else
                h.errors.push(
                  (function qe() {
                    return new N.vHH(3007, !1);
                  })()
                );
            }),
            {
              type: 7,
              name: u.name,
              states: P,
              transitions: B,
              queryCount: _,
              depCount: S,
              options: null,
            }
          );
        }
        visitState(u, h) {
          const _ = this.visitStyle(u.styles, h),
            S = (u.options && u.options.params) || null;
          if (_.containsDynamicStyles) {
            const P = new Set(),
              B = S || {};
            _.styles.forEach((V) => {
              V instanceof Map &&
                V.forEach((W) => {
                  Ot(W).forEach((ne) => {
                    B.hasOwnProperty(ne) || P.add(ne);
                  });
                });
            }),
              P.size &&
                (xn(P.values()),
                h.errors.push(
                  (function K(A, u) {
                    return new N.vHH(3008, !1);
                  })()
                ));
          }
          return {
            type: 0,
            name: u.name,
            style: _,
            options: S ? { params: S } : null,
          };
        }
        visitTransition(u, h) {
          (h.queryCount = 0), (h.depCount = 0);
          const _ = qt(this, Oe(u.animation), h);
          return {
            type: 1,
            matchers: Mn(u.expr, h.errors),
            animation: _,
            queryCount: h.queryCount,
            depCount: h.depCount,
            options: $n(u.options),
          };
        }
        visitSequence(u, h) {
          return {
            type: 2,
            steps: u.steps.map((_) => qt(this, _, h)),
            options: $n(u.options),
          };
        }
        visitGroup(u, h) {
          const _ = h.currentTime;
          let S = 0;
          const P = u.steps.map((B) => {
            h.currentTime = _;
            const V = qt(this, B, h);
            return (S = Math.max(S, h.currentTime)), V;
          });
          return (
            (h.currentTime = S), { type: 3, steps: P, options: $n(u.options) }
          );
        }
        visitAnimate(u, h) {
          const _ = (function mi(A, u) {
            if (A.hasOwnProperty("duration")) return A;
            if ("number" == typeof A) return kn(rr(A, u).duration, 0, "");
            const h = A;
            if (
              h
                .split(/\s+/)
                .some((P) => "{" == P.charAt(0) && "{" == P.charAt(1))
            ) {
              const P = kn(0, 0, "");
              return (P.dynamic = !0), (P.strValue = h), P;
            }
            const S = rr(h, u);
            return kn(S.duration, S.delay, S.easing);
          })(u.timings, h.errors);
          h.currentAnimateTimings = _;
          let S,
            P = u.styles ? u.styles : (0, ie.oB)({});
          if (5 == P.type) S = this.visitKeyframes(P, h);
          else {
            let B = u.styles,
              V = !1;
            if (!B) {
              V = !0;
              const ne = {};
              _.easing && (ne.easing = _.easing), (B = (0, ie.oB)(ne));
            }
            h.currentTime += _.duration + _.delay;
            const W = this.visitStyle(B, h);
            (W.isEmptyStep = V), (S = W);
          }
          return (
            (h.currentAnimateTimings = null),
            { type: 4, timings: _, style: S, options: null }
          );
        }
        visitStyle(u, h) {
          const _ = this._makeStyleAst(u, h);
          return this._validateStyleAst(_, h), _;
        }
        _makeStyleAst(u, h) {
          const _ = [],
            S = Array.isArray(u.styles) ? u.styles : [u.styles];
          for (let V of S)
            "string" == typeof V
              ? V === ie.l3
                ? _.push(V)
                : h.errors.push(new N.vHH(3002, !1))
              : _.push(ci(V));
          let P = !1,
            B = null;
          return (
            _.forEach((V) => {
              if (
                V instanceof Map &&
                (V.has("easing") && ((B = V.get("easing")), V.delete("easing")),
                !P)
              )
                for (let W of V.values())
                  if (W.toString().indexOf("{{") >= 0) {
                    P = !0;
                    break;
                  }
            }),
            {
              type: 6,
              styles: _,
              easing: B,
              offset: u.offset,
              containsDynamicStyles: P,
              options: null,
            }
          );
        }
        _validateStyleAst(u, h) {
          const _ = h.currentAnimateTimings;
          let S = h.currentTime,
            P = h.currentTime;
          _ && P > 0 && (P -= _.duration + _.delay),
            u.styles.forEach((B) => {
              "string" != typeof B &&
                B.forEach((V, W) => {
                  const ne = h.collectedStyles.get(h.currentQuerySelector),
                    Se = ne.get(W);
                  let Pe = !0;
                  Se &&
                    (P != S &&
                      P >= Se.startTime &&
                      S <= Se.endTime &&
                      (h.errors.push(
                        (function Le(A, u, h, _, S) {
                          return new N.vHH(3010, !1);
                        })()
                      ),
                      (Pe = !1)),
                    (P = Se.startTime)),
                    Pe && ne.set(W, { startTime: P, endTime: S }),
                    h.options &&
                      (function Ze(A, u, h) {
                        const _ = u.params || {},
                          S = Ot(A);
                        S.length &&
                          S.forEach((P) => {
                            _.hasOwnProperty(P) ||
                              h.push(
                                (function Re(A) {
                                  return new N.vHH(3001, !1);
                                })()
                              );
                          });
                      })(V, h.options, h.errors);
                });
            });
        }
        visitKeyframes(u, h) {
          const _ = { type: 5, styles: [], options: null };
          if (!h.currentAnimateTimings)
            return (
              h.errors.push(
                (function Me() {
                  return new N.vHH(3011, !1);
                })()
              ),
              _
            );
          let P = 0;
          const B = [];
          let V = !1,
            W = !1,
            ne = 0;
          const Se = u.steps.map((en) => {
            const fn = this._makeStyleAst(en, h);
            let On =
                null != fn.offset
                  ? fn.offset
                  : (function _r(A) {
                      if ("string" == typeof A) return null;
                      let u = null;
                      if (Array.isArray(A))
                        A.forEach((h) => {
                          if (h instanceof Map && h.has("offset")) {
                            const _ = h;
                            (u = parseFloat(_.get("offset"))),
                              _.delete("offset");
                          }
                        });
                      else if (A instanceof Map && A.has("offset")) {
                        const h = A;
                        (u = parseFloat(h.get("offset"))), h.delete("offset");
                      }
                      return u;
                    })(fn.styles),
              An = 0;
            return (
              null != On && (P++, (An = fn.offset = On)),
              (W = W || An < 0 || An > 1),
              (V = V || An < ne),
              (ne = An),
              B.push(An),
              fn
            );
          });
          W &&
            h.errors.push(
              (function Ee() {
                return new N.vHH(3012, !1);
              })()
            ),
            V &&
              h.errors.push(
                (function Ke() {
                  return new N.vHH(3200, !1);
                })()
              );
          const Pe = u.steps.length;
          let _t = 0;
          P > 0 && P < Pe
            ? h.errors.push(
                (function he() {
                  return new N.vHH(3202, !1);
                })()
              )
            : 0 == P && (_t = 1 / (Pe - 1));
          const ut = Pe - 1,
            We = h.currentTime,
            nt = h.currentAnimateTimings,
            Ht = nt.duration;
          return (
            Se.forEach((en, fn) => {
              const On = _t > 0 ? (fn == ut ? 1 : _t * fn) : B[fn],
                An = On * Ht;
              (h.currentTime = We + nt.delay + An),
                (nt.duration = An),
                this._validateStyleAst(en, h),
                (en.offset = On),
                _.styles.push(en);
            }),
            _
          );
        }
        visitReference(u, h) {
          return {
            type: 8,
            animation: qt(this, Oe(u.animation), h),
            options: $n(u.options),
          };
        }
        visitAnimateChild(u, h) {
          return h.depCount++, { type: 9, options: $n(u.options) };
        }
        visitAnimateRef(u, h) {
          return {
            type: 10,
            animation: this.visitReference(u.animation, h),
            options: $n(u.options),
          };
        }
        visitQuery(u, h) {
          const _ = h.currentQuerySelector,
            S = u.options || {};
          h.queryCount++, (h.currentQuery = u);
          const [P, B] = (function uo(A) {
            const u = !!A.split(/\s*,\s*/).find((h) => ":self" == h);
            return (
              u && (A = A.replace(Or, "")),
              (A = A.replace(/@\*/g, yr)
                .replace(/@\w+/g, (h) => yr + "-" + h.slice(1))
                .replace(/:animating/g, Qr)),
              [A, u]
            );
          })(u.selector);
          (h.currentQuerySelector = _.length ? _ + " " + P : P),
            ct(h.collectedStyles, h.currentQuerySelector, new Map());
          const V = qt(this, Oe(u.animation), h);
          return (
            (h.currentQuery = null),
            (h.currentQuerySelector = _),
            {
              type: 11,
              selector: P,
              limit: S.limit || 0,
              optional: !!S.optional,
              includeSelf: B,
              animation: V,
              originalSelector: u.selector,
              options: $n(u.options),
            }
          );
        }
        visitStagger(u, h) {
          h.currentQuery ||
            h.errors.push(
              (function jt() {
                return new N.vHH(3013, !1);
              })()
            );
          const _ =
            "full" === u.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : rr(u.timings, h.errors, !0);
          return {
            type: 12,
            animation: qt(this, Oe(u.animation), h),
            timings: _,
            options: null,
          };
        }
      }
      class jr {
        constructor(u) {
          (this.errors = u),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = new Map()),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function $n(A) {
        return (
          A
            ? (A = Fn(A)).params &&
              (A.params = (function Ii(A) {
                return A ? Fn(A) : null;
              })(A.params))
            : (A = {}),
          A
        );
      }
      function kn(A, u, h) {
        return { duration: A, delay: u, easing: h };
      }
      function Dr(A, u, h, _, S, P, B = null, V = !1) {
        return {
          type: 1,
          element: A,
          keyframes: u,
          preStyleProps: h,
          postStyleProps: _,
          duration: S,
          delay: P,
          totalTime: S + P,
          easing: B,
          subTimeline: V,
        };
      }
      class ar {
        constructor() {
          this._map = new Map();
        }
        get(u) {
          return this._map.get(u) || [];
        }
        append(u, h) {
          let _ = this._map.get(u);
          _ || this._map.set(u, (_ = [])), _.push(...h);
        }
        has(u) {
          return this._map.has(u);
        }
        clear() {
          this._map.clear();
        }
      }
      const zi = new RegExp(":enter", "g"),
        Lo = new RegExp(":leave", "g");
      function lo(A, u, h, _, S, P = new Map(), B = new Map(), V, W, ne = []) {
        return new Mo().buildKeyframes(A, u, h, _, S, P, B, V, W, ne);
      }
      class Mo {
        buildKeyframes(u, h, _, S, P, B, V, W, ne, Se = []) {
          ne = ne || new ar();
          const Pe = new Gi(u, h, ne, S, P, Se, []);
          Pe.options = W;
          const _t = W.delay ? cn(W.delay) : 0;
          Pe.currentTimeline.delayNextStep(_t),
            Pe.currentTimeline.setStyles([B], null, Pe.errors, W),
            qt(this, _, Pe);
          const ut = Pe.timelines.filter((We) => We.containsAnimation());
          if (ut.length && V.size) {
            let We;
            for (let nt = ut.length - 1; nt >= 0; nt--) {
              const Ht = ut[nt];
              if (Ht.element === h) {
                We = Ht;
                break;
              }
            }
            We &&
              !We.allowOnlyTimelineStyles() &&
              We.setStyles([V], null, Pe.errors, W);
          }
          return ut.length
            ? ut.map((We) => We.buildKeyframes())
            : [Dr(h, [], [], [], 0, _t, "", !1)];
        }
        visitTrigger(u, h) {}
        visitState(u, h) {}
        visitTransition(u, h) {}
        visitAnimateChild(u, h) {
          const _ = h.subInstructions.get(h.element);
          if (_) {
            const S = h.createSubContext(u.options),
              P = h.currentTimeline.currentTime,
              B = this._visitSubInstructions(_, S, S.options);
            P != B && h.transformIntoNewTimeline(B);
          }
          h.previousNode = u;
        }
        visitAnimateRef(u, h) {
          const _ = h.createSubContext(u.options);
          _.transformIntoNewTimeline(),
            this._applyAnimationRefDelays(
              [u.options, u.animation.options],
              h,
              _
            ),
            this.visitReference(u.animation, _),
            h.transformIntoNewTimeline(_.currentTimeline.currentTime),
            (h.previousNode = u);
        }
        _applyAnimationRefDelays(u, h, _) {
          for (const S of u) {
            const P = S?.delay;
            if (P) {
              const B =
                "number" == typeof P ? P : cn(Nt(P, S?.params ?? {}, h.errors));
              _.delayNextStep(B);
            }
          }
        }
        _visitSubInstructions(u, h, _) {
          let P = h.currentTimeline.currentTime;
          const B = null != _.duration ? cn(_.duration) : null,
            V = null != _.delay ? cn(_.delay) : null;
          return (
            0 !== B &&
              u.forEach((W) => {
                const ne = h.appendInstructionToTimeline(W, B, V);
                P = Math.max(P, ne.duration + ne.delay);
              }),
            P
          );
        }
        visitReference(u, h) {
          h.updateOptions(u.options, !0),
            qt(this, u.animation, h),
            (h.previousNode = u);
        }
        visitSequence(u, h) {
          const _ = h.subContextCount;
          let S = h;
          const P = u.options;
          if (
            P &&
            (P.params || P.delay) &&
            ((S = h.createSubContext(P)),
            S.transformIntoNewTimeline(),
            null != P.delay)
          ) {
            6 == S.previousNode.type &&
              (S.currentTimeline.snapshotCurrentStyles(),
              (S.previousNode = Jr));
            const B = cn(P.delay);
            S.delayNextStep(B);
          }
          u.steps.length &&
            (u.steps.forEach((B) => qt(this, B, S)),
            S.currentTimeline.applyStylesToKeyframe(),
            S.subContextCount > _ && S.transformIntoNewTimeline()),
            (h.previousNode = u);
        }
        visitGroup(u, h) {
          const _ = [];
          let S = h.currentTimeline.currentTime;
          const P = u.options && u.options.delay ? cn(u.options.delay) : 0;
          u.steps.forEach((B) => {
            const V = h.createSubContext(u.options);
            P && V.delayNextStep(P),
              qt(this, B, V),
              (S = Math.max(S, V.currentTimeline.currentTime)),
              _.push(V.currentTimeline);
          }),
            _.forEach((B) => h.currentTimeline.mergeTimelineCollectedStyles(B)),
            h.transformIntoNewTimeline(S),
            (h.previousNode = u);
        }
        _visitTiming(u, h) {
          if (u.dynamic) {
            const _ = u.strValue;
            return rr(h.params ? Nt(_, h.params, h.errors) : _, h.errors);
          }
          return { duration: u.duration, delay: u.delay, easing: u.easing };
        }
        visitAnimate(u, h) {
          const _ = (h.currentAnimateTimings = this._visitTiming(u.timings, h)),
            S = h.currentTimeline;
          _.delay && (h.incrementTime(_.delay), S.snapshotCurrentStyles());
          const P = u.style;
          5 == P.type
            ? this.visitKeyframes(P, h)
            : (h.incrementTime(_.duration),
              this.visitStyle(P, h),
              S.applyStylesToKeyframe()),
            (h.currentAnimateTimings = null),
            (h.previousNode = u);
        }
        visitStyle(u, h) {
          const _ = h.currentTimeline,
            S = h.currentAnimateTimings;
          !S && _.hasCurrentStyleProperties() && _.forwardFrame();
          const P = (S && S.easing) || u.easing;
          u.isEmptyStep
            ? _.applyEmptyStep(P)
            : _.setStyles(u.styles, P, h.errors, h.options),
            (h.previousNode = u);
        }
        visitKeyframes(u, h) {
          const _ = h.currentAnimateTimings,
            S = h.currentTimeline.duration,
            P = _.duration,
            V = h.createSubContext().currentTimeline;
          (V.easing = _.easing),
            u.styles.forEach((W) => {
              V.forwardTime((W.offset || 0) * P),
                V.setStyles(W.styles, W.easing, h.errors, h.options),
                V.applyStylesToKeyframe();
            }),
            h.currentTimeline.mergeTimelineCollectedStyles(V),
            h.transformIntoNewTimeline(S + P),
            (h.previousNode = u);
        }
        visitQuery(u, h) {
          const _ = h.currentTimeline.currentTime,
            S = u.options || {},
            P = S.delay ? cn(S.delay) : 0;
          P &&
            (6 === h.previousNode.type ||
              (0 == _ && h.currentTimeline.hasCurrentStyleProperties())) &&
            (h.currentTimeline.snapshotCurrentStyles(), (h.previousNode = Jr));
          let B = _;
          const V = h.invokeQuery(
            u.selector,
            u.originalSelector,
            u.limit,
            u.includeSelf,
            !!S.optional,
            h.errors
          );
          h.currentQueryTotal = V.length;
          let W = null;
          V.forEach((ne, Se) => {
            h.currentQueryIndex = Se;
            const Pe = h.createSubContext(u.options, ne);
            P && Pe.delayNextStep(P),
              ne === h.element && (W = Pe.currentTimeline),
              qt(this, u.animation, Pe),
              Pe.currentTimeline.applyStylesToKeyframe(),
              (B = Math.max(B, Pe.currentTimeline.currentTime));
          }),
            (h.currentQueryIndex = 0),
            (h.currentQueryTotal = 0),
            h.transformIntoNewTimeline(B),
            W &&
              (h.currentTimeline.mergeTimelineCollectedStyles(W),
              h.currentTimeline.snapshotCurrentStyles()),
            (h.previousNode = u);
        }
        visitStagger(u, h) {
          const _ = h.parentContext,
            S = h.currentTimeline,
            P = u.timings,
            B = Math.abs(P.duration),
            V = B * (h.currentQueryTotal - 1);
          let W = B * h.currentQueryIndex;
          switch (P.duration < 0 ? "reverse" : P.easing) {
            case "reverse":
              W = V - W;
              break;
            case "full":
              W = _.currentStaggerTime;
          }
          const Se = h.currentTimeline;
          W && Se.delayNextStep(W);
          const Pe = Se.currentTime;
          qt(this, u.animation, h),
            (h.previousNode = u),
            (_.currentStaggerTime =
              S.currentTime - Pe + (S.startTime - _.currentTimeline.startTime));
        }
      }
      const Jr = {};
      class Gi {
        constructor(u, h, _, S, P, B, V, W) {
          (this._driver = u),
            (this.element = h),
            (this.subInstructions = _),
            (this._enterClassName = S),
            (this._leaveClassName = P),
            (this.errors = B),
            (this.timelines = V),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Jr),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = W || new yi(this._driver, h, 0)),
            V.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(u, h) {
          if (!u) return;
          const _ = u;
          let S = this.options;
          null != _.duration && (S.duration = cn(_.duration)),
            null != _.delay && (S.delay = cn(_.delay));
          const P = _.params;
          if (P) {
            let B = S.params;
            B || (B = this.options.params = {}),
              Object.keys(P).forEach((V) => {
                (!h || !B.hasOwnProperty(V)) &&
                  (B[V] = Nt(P[V], B, this.errors));
              });
          }
        }
        _copyOptions() {
          const u = {};
          if (this.options) {
            const h = this.options.params;
            if (h) {
              const _ = (u.params = {});
              Object.keys(h).forEach((S) => {
                _[S] = h[S];
              });
            }
          }
          return u;
        }
        createSubContext(u = null, h, _) {
          const S = h || this.element,
            P = new Gi(
              this._driver,
              S,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(S, _ || 0)
            );
          return (
            (P.previousNode = this.previousNode),
            (P.currentAnimateTimings = this.currentAnimateTimings),
            (P.options = this._copyOptions()),
            P.updateOptions(u),
            (P.currentQueryIndex = this.currentQueryIndex),
            (P.currentQueryTotal = this.currentQueryTotal),
            (P.parentContext = this),
            this.subContextCount++,
            P
          );
        }
        transformIntoNewTimeline(u) {
          return (
            (this.previousNode = Jr),
            (this.currentTimeline = this.currentTimeline.fork(this.element, u)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(u, h, _) {
          const S = {
              duration: h ?? u.duration,
              delay: this.currentTimeline.currentTime + (_ ?? 0) + u.delay,
              easing: "",
            },
            P = new co(
              this._driver,
              u.element,
              u.keyframes,
              u.preStyleProps,
              u.postStyleProps,
              S,
              u.stretchStartingKeyframe
            );
          return this.timelines.push(P), S;
        }
        incrementTime(u) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + u);
        }
        delayNextStep(u) {
          u > 0 && this.currentTimeline.delayNextStep(u);
        }
        invokeQuery(u, h, _, S, P, B) {
          let V = [];
          if ((S && V.push(this.element), u.length > 0)) {
            u = (u = u.replace(zi, "." + this._enterClassName)).replace(
              Lo,
              "." + this._leaveClassName
            );
            let ne = this._driver.query(this.element, u, 1 != _);
            0 !== _ &&
              (ne =
                _ < 0 ? ne.slice(ne.length + _, ne.length) : ne.slice(0, _)),
              V.push(...ne);
          }
          return (
            !P &&
              0 == V.length &&
              B.push(
                (function ke(A) {
                  return new N.vHH(3014, !1);
                })()
              ),
            V
          );
        }
      }
      class yi {
        constructor(u, h, _, S) {
          (this._driver = u),
            (this.element = h),
            (this.startTime = _),
            (this._elementTimelineStylesLookup = S),
            (this.duration = 0),
            (this.easing = null),
            (this._previousKeyframe = new Map()),
            (this._currentKeyframe = new Map()),
            (this._keyframes = new Map()),
            (this._styleSummary = new Map()),
            (this._localTimelineStyles = new Map()),
            (this._pendingStyles = new Map()),
            (this._backFill = new Map()),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(h)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                h,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.hasCurrentStyleProperties();
            default:
              return !0;
          }
        }
        hasCurrentStyleProperties() {
          return this._currentKeyframe.size > 0;
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(u) {
          const h = 1 === this._keyframes.size && this._pendingStyles.size;
          this.duration || h
            ? (this.forwardTime(this.currentTime + u),
              h && this.snapshotCurrentStyles())
            : (this.startTime += u);
        }
        fork(u, h) {
          return (
            this.applyStylesToKeyframe(),
            new yi(
              this._driver,
              u,
              h || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = new Map()),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(u) {
          this.applyStylesToKeyframe(),
            (this.duration = u),
            this._loadKeyframe();
        }
        _updateStyle(u, h) {
          this._localTimelineStyles.set(u, h),
            this._globalTimelineStyles.set(u, h),
            this._styleSummary.set(u, { time: this.currentTime, value: h });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(u) {
          u && this._previousKeyframe.set("easing", u);
          for (let [h, _] of this._globalTimelineStyles)
            this._backFill.set(h, _ || ie.l3),
              this._currentKeyframe.set(h, ie.l3);
          this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        setStyles(u, h, _, S) {
          h && this._previousKeyframe.set("easing", h);
          const P = (S && S.params) || {},
            B = (function bo(A, u) {
              const h = new Map();
              let _;
              return (
                A.forEach((S) => {
                  if ("*" === S) {
                    _ = _ || u.keys();
                    for (let P of _) h.set(P, ie.l3);
                  } else k(S, h);
                }),
                h
              );
            })(u, this._globalTimelineStyles);
          for (let [V, W] of B) {
            const ne = Nt(W, P, _);
            this._pendingStyles.set(V, ne),
              this._localTimelineStyles.has(V) ||
                this._backFill.set(
                  V,
                  this._globalTimelineStyles.get(V) ?? ie.l3
                ),
              this._updateStyle(V, ne);
          }
        }
        applyStylesToKeyframe() {
          0 != this._pendingStyles.size &&
            (this._pendingStyles.forEach((u, h) => {
              this._currentKeyframe.set(h, u);
            }),
            this._pendingStyles.clear(),
            this._localTimelineStyles.forEach((u, h) => {
              this._currentKeyframe.has(h) || this._currentKeyframe.set(h, u);
            }));
        }
        snapshotCurrentStyles() {
          for (let [u, h] of this._localTimelineStyles)
            this._pendingStyles.set(u, h), this._updateStyle(u, h);
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const u = [];
          for (let h in this._currentKeyframe) u.push(h);
          return u;
        }
        mergeTimelineCollectedStyles(u) {
          u._styleSummary.forEach((h, _) => {
            const S = this._styleSummary.get(_);
            (!S || h.time > S.time) && this._updateStyle(_, h.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const u = new Set(),
            h = new Set(),
            _ = 1 === this._keyframes.size && 0 === this.duration;
          let S = [];
          this._keyframes.forEach((V, W) => {
            const ne = k(V, new Map(), this._backFill);
            ne.forEach((Se, Pe) => {
              Se === ie.k1 ? u.add(Pe) : Se === ie.l3 && h.add(Pe);
            }),
              _ || ne.set("offset", W / this.duration),
              S.push(ne);
          });
          const P = u.size ? xn(u.values()) : [],
            B = h.size ? xn(h.values()) : [];
          if (_) {
            const V = S[0],
              W = new Map(V);
            V.set("offset", 0), W.set("offset", 1), (S = [V, W]);
          }
          return Dr(
            this.element,
            S,
            P,
            B,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class co extends yi {
        constructor(u, h, _, S, P, B, V = !1) {
          super(u, h, B.delay),
            (this.keyframes = _),
            (this.preStyleProps = S),
            (this.postStyleProps = P),
            (this._stretchStartingKeyframe = V),
            (this.timings = {
              duration: B.duration,
              delay: B.delay,
              easing: B.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let u = this.keyframes,
            { delay: h, duration: _, easing: S } = this.timings;
          if (this._stretchStartingKeyframe && h) {
            const P = [],
              B = _ + h,
              V = h / B,
              W = k(u[0]);
            W.set("offset", 0), P.push(W);
            const ne = k(u[0]);
            ne.set("offset", Ti(V)), P.push(ne);
            const Se = u.length - 1;
            for (let Pe = 1; Pe <= Se; Pe++) {
              let _t = k(u[Pe]);
              const ut = _t.get("offset");
              _t.set("offset", Ti((h + ut * _) / B)), P.push(_t);
            }
            (_ = B), (h = 0), (S = ""), (u = P);
          }
          return Dr(
            this.element,
            u,
            this.preStyleProps,
            this.postStyleProps,
            _,
            h,
            S,
            !0
          );
        }
      }
      function Ti(A, u = 3) {
        const h = Math.pow(10, u - 1);
        return Math.round(A * h) / h;
      }
      class Oi {}
      const Ni = new Set([
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
        "left",
        "top",
        "bottom",
        "right",
        "fontSize",
        "outlineWidth",
        "outlineOffset",
        "paddingTop",
        "paddingLeft",
        "paddingBottom",
        "paddingRight",
        "marginTop",
        "marginLeft",
        "marginBottom",
        "marginRight",
        "borderRadius",
        "borderWidth",
        "borderTopWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "textIndent",
        "perspective",
      ]);
      class Ao extends Oi {
        normalizePropertyName(u, h) {
          return Wn(u);
        }
        normalizeStyleValue(u, h, _, S) {
          let P = "";
          const B = _.toString().trim();
          if (Ni.has(h) && 0 !== _ && "0" !== _)
            if ("number" == typeof _) P = "px";
            else {
              const V = _.match(/^[+-]?[\d\.]+([a-z]*)$/);
              V &&
                0 == V[1].length &&
                S.push(
                  (function yt(A, u) {
                    return new N.vHH(3005, !1);
                  })()
                );
            }
          return B + P;
        }
      }
      function Pi(A, u, h, _, S, P, B, V, W, ne, Se, Pe, _t) {
        return {
          type: 0,
          element: A,
          triggerName: u,
          isRemovalTransition: S,
          fromState: h,
          fromStyles: P,
          toState: _,
          toStyles: B,
          timelines: V,
          queriedElements: W,
          preStyleProps: ne,
          postStyleProps: Se,
          totalTime: Pe,
          errors: _t,
        };
      }
      const Pr = {};
      class ft {
        constructor(u, h, _) {
          (this._triggerName = u), (this.ast = h), (this._stateStyles = _);
        }
        match(u, h, _, S) {
          return (function pn(A, u, h, _, S) {
            return A.some((P) => P(u, h, _, S));
          })(this.ast.matchers, u, h, _, S);
        }
        buildStyles(u, h, _) {
          let S = this._stateStyles.get("*");
          return (
            void 0 !== u && (S = this._stateStyles.get(u?.toString()) || S),
            S ? S.buildStyles(h, _) : new Map()
          );
        }
        build(u, h, _, S, P, B, V, W, ne, Se) {
          const Pe = [],
            _t = (this.ast.options && this.ast.options.params) || Pr,
            We = this.buildStyles(_, (V && V.params) || Pr, Pe),
            nt = (W && W.params) || Pr,
            Ht = this.buildStyles(S, nt, Pe),
            en = new Set(),
            fn = new Map(),
            On = new Map(),
            An = "void" === S,
            ni = { params: _n(nt, _t), delay: this.ast.options?.delay },
            Kn = Se
              ? []
              : lo(u, h, this.ast.animation, P, B, We, Ht, ni, ne, Pe);
          let tn = 0;
          if (
            (Kn.forEach((Di) => {
              tn = Math.max(Di.duration + Di.delay, tn);
            }),
            Pe.length)
          )
            return Pi(
              h,
              this._triggerName,
              _,
              S,
              An,
              We,
              Ht,
              [],
              [],
              fn,
              On,
              tn,
              Pe
            );
          Kn.forEach((Di) => {
            const Ci = Di.element,
              ss = ct(fn, Ci, new Set());
            Di.preStyleProps.forEach((Vi) => ss.add(Vi));
            const ho = ct(On, Ci, new Set());
            Di.postStyleProps.forEach((Vi) => ho.add(Vi)),
              Ci !== h && en.add(Ci);
          });
          const Wr = xn(en.values());
          return Pi(h, this._triggerName, _, S, An, We, Ht, Kn, Wr, fn, On, tn);
        }
      }
      function _n(A, u) {
        const h = Fn(u);
        for (const _ in A) A.hasOwnProperty(_) && null != A[_] && (h[_] = A[_]);
        return h;
      }
      class dn {
        constructor(u, h, _) {
          (this.styles = u), (this.defaultParams = h), (this.normalizer = _);
        }
        buildStyles(u, h) {
          const _ = new Map(),
            S = Fn(this.defaultParams);
          return (
            Object.keys(u).forEach((P) => {
              const B = u[P];
              null !== B && (S[P] = B);
            }),
            this.styles.styles.forEach((P) => {
              "string" != typeof P &&
                P.forEach((B, V) => {
                  B && (B = Nt(B, S, h));
                  const W = this.normalizer.normalizePropertyName(V, h);
                  (B = this.normalizer.normalizeStyleValue(V, W, B, h)),
                    _.set(V, B);
                });
            }),
            _
          );
        }
      }
      class qi {
        constructor(u, h, _) {
          (this.name = u),
            (this.ast = h),
            (this._normalizer = _),
            (this.transitionFactories = []),
            (this.states = new Map()),
            h.states.forEach((S) => {
              this.states.set(
                S.name,
                new dn(S.style, (S.options && S.options.params) || {}, _)
              );
            }),
            ur(this.states, "true", "1"),
            ur(this.states, "false", "0"),
            h.transitions.forEach((S) => {
              this.transitionFactories.push(new ft(u, S, this.states));
            }),
            (this.fallbackTransition = (function Rr(A, u, h) {
              return new ft(
                A,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(B, V) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                u
              );
            })(u, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(u, h, _, S) {
          return (
            this.transitionFactories.find((B) => B.match(u, h, _, S)) || null
          );
        }
        matchStyles(u, h, _) {
          return this.fallbackTransition.buildStyles(u, h, _);
        }
      }
      function ur(A, u, h) {
        A.has(u)
          ? A.has(h) || A.set(h, A.get(u))
          : A.has(h) && A.set(u, A.get(h));
      }
      const Zi = new ar();
      class Wt {
        constructor(u, h, _) {
          (this.bodyNode = u),
            (this._driver = h),
            (this._normalizer = _),
            (this._animations = new Map()),
            (this._playersById = new Map()),
            (this.players = []);
        }
        register(u, h) {
          const _ = [],
            P = gi(this._driver, h, _, []);
          if (_.length)
            throw (function X(A) {
              return new N.vHH(3503, !1);
            })();
          this._animations.set(u, P);
        }
        _buildPlayer(u, h, _) {
          const S = u.element,
            P = Ve(this._normalizer, u.keyframes, h, _);
          return this._driver.animate(
            S,
            P,
            u.duration,
            u.delay,
            u.easing,
            [],
            !0
          );
        }
        create(u, h, _ = {}) {
          const S = [],
            P = this._animations.get(u);
          let B;
          const V = new Map();
          if (
            (P
              ? ((B = lo(
                  this._driver,
                  h,
                  P,
                  It,
                  Mt,
                  new Map(),
                  new Map(),
                  _,
                  Zi,
                  S
                )),
                B.forEach((Se) => {
                  const Pe = ct(V, Se.element, new Map());
                  Se.postStyleProps.forEach((_t) => Pe.set(_t, null));
                }))
              : (S.push(
                  (function se() {
                    return new N.vHH(3300, !1);
                  })()
                ),
                (B = [])),
            S.length)
          )
            throw (function te(A) {
              return new N.vHH(3504, !1);
            })();
          V.forEach((Se, Pe) => {
            Se.forEach((_t, ut) => {
              Se.set(ut, this._driver.computeStyle(Pe, ut, ie.l3));
            });
          });
          const ne = vt(
            B.map((Se) => {
              const Pe = V.get(Se.element);
              return this._buildPlayer(Se, new Map(), Pe);
            })
          );
          return (
            this._playersById.set(u, ne),
            ne.onDestroy(() => this.destroy(u)),
            this.players.push(ne),
            ne
          );
        }
        destroy(u) {
          const h = this._getPlayer(u);
          h.destroy(), this._playersById.delete(u);
          const _ = this.players.indexOf(h);
          _ >= 0 && this.players.splice(_, 1);
        }
        _getPlayer(u) {
          const h = this._playersById.get(u);
          if (!h)
            throw (function me(A) {
              return new N.vHH(3301, !1);
            })();
          return h;
        }
        listen(u, h, _, S) {
          const P = Ge(h, "", "", "");
          return At(this._getPlayer(u), _, P, S), () => {};
        }
        command(u, h, _, S) {
          if ("register" == _) return void this.register(u, S[0]);
          if ("create" == _) return void this.create(u, h, S[0] || {});
          const P = this._getPlayer(u);
          switch (_) {
            case "play":
              P.play();
              break;
            case "pause":
              P.pause();
              break;
            case "reset":
              P.reset();
              break;
            case "restart":
              P.restart();
              break;
            case "finish":
              P.finish();
              break;
            case "init":
              P.init();
              break;
            case "setPosition":
              P.setPosition(parseFloat(S[0]));
              break;
            case "destroy":
              this.destroy(u);
          }
        }
      }
      const Ae = "ng-animate-queued",
        Pt = "ng-animate-disabled",
        Fr = [],
        Zt = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Yn = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Dn = "__ng_removed";
      class tt {
        get params() {
          return this.options.params;
        }
        constructor(u, h = "") {
          this.namespaceId = h;
          const _ = u && u.hasOwnProperty("value");
          if (
            ((this.value = (function lr(A) {
              return A ?? null;
            })(_ ? u.value : u)),
            _)
          ) {
            const P = Fn(u);
            delete P.value, (this.options = P);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        absorbOptions(u) {
          const h = u.params;
          if (h) {
            const _ = this.options.params;
            Object.keys(h).forEach((S) => {
              null == _[S] && (_[S] = h[S]);
            });
          }
        }
      }
      const bn = "void",
        Ri = new tt(bn);
      class ti {
        constructor(u, h, _) {
          (this.id = u),
            (this.hostElement = h),
            (this._engine = _),
            (this.players = []),
            (this._triggers = new Map()),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + u),
            Sn(h, this._hostClassName);
        }
        listen(u, h, _, S) {
          if (!this._triggers.has(h))
            throw (function we(A, u) {
              return new N.vHH(3302, !1);
            })();
          if (null == _ || 0 == _.length)
            throw (function et(A) {
              return new N.vHH(3303, !1);
            })();
          if (
            !(function Fi(A) {
              return "start" == A || "done" == A;
            })(_)
          )
            throw (function Dt(A, u) {
              return new N.vHH(3400, !1);
            })();
          const P = ct(this._elementListeners, u, []),
            B = { name: h, phase: _, callback: S };
          P.push(B);
          const V = ct(this._engine.statesByElement, u, new Map());
          return (
            V.has(h) || (Sn(u, Gn), Sn(u, Gn + "-" + h), V.set(h, Ri)),
            () => {
              this._engine.afterFlush(() => {
                const W = P.indexOf(B);
                W >= 0 && P.splice(W, 1), this._triggers.has(h) || V.delete(h);
              });
            }
          );
        }
        register(u, h) {
          return !this._triggers.has(u) && (this._triggers.set(u, h), !0);
        }
        _getTrigger(u) {
          const h = this._triggers.get(u);
          if (!h)
            throw (function ln(A) {
              return new N.vHH(3401, !1);
            })();
          return h;
        }
        trigger(u, h, _, S = !0) {
          const P = this._getTrigger(h),
            B = new Bn(this.id, h, u);
          let V = this._engine.statesByElement.get(u);
          V ||
            (Sn(u, Gn),
            Sn(u, Gn + "-" + h),
            this._engine.statesByElement.set(u, (V = new Map())));
          let W = V.get(h);
          const ne = new tt(_, this.id);
          if (
            (!(_ && _.hasOwnProperty("value")) &&
              W &&
              ne.absorbOptions(W.options),
            V.set(h, ne),
            W || (W = Ri),
            ne.value !== bn && W.value === ne.value)
          ) {
            if (
              !(function cr(A, u) {
                const h = Object.keys(A),
                  _ = Object.keys(u);
                if (h.length != _.length) return !1;
                for (let S = 0; S < h.length; S++) {
                  const P = h[S];
                  if (!u.hasOwnProperty(P) || A[P] !== u[P]) return !1;
                }
                return !0;
              })(W.params, ne.params)
            ) {
              const nt = [],
                Ht = P.matchStyles(W.value, W.params, nt),
                en = P.matchStyles(ne.value, ne.params, nt);
              nt.length
                ? this._engine.reportError(nt)
                : this._engine.afterFlush(() => {
                    ae(u, Ht), H(u, en);
                  });
            }
            return;
          }
          const _t = ct(this._engine.playersByElement, u, []);
          _t.forEach((nt) => {
            nt.namespaceId == this.id &&
              nt.triggerName == h &&
              nt.queued &&
              nt.destroy();
          });
          let ut = P.matchTransition(W.value, ne.value, u, ne.params),
            We = !1;
          if (!ut) {
            if (!S) return;
            (ut = P.fallbackTransition), (We = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: u,
              triggerName: h,
              transition: ut,
              fromState: W,
              toState: ne,
              player: B,
              isFallbackTransition: We,
            }),
            We ||
              (Sn(u, Ae),
              B.onStart(() => {
                ot(u, Ae);
              })),
            B.onDone(() => {
              let nt = this.players.indexOf(B);
              nt >= 0 && this.players.splice(nt, 1);
              const Ht = this._engine.playersByElement.get(u);
              if (Ht) {
                let en = Ht.indexOf(B);
                en >= 0 && Ht.splice(en, 1);
              }
            }),
            this.players.push(B),
            _t.push(B),
            B
          );
        }
        deregister(u) {
          this._triggers.delete(u),
            this._engine.statesByElement.forEach((h) => h.delete(u)),
            this._elementListeners.forEach((h, _) => {
              this._elementListeners.set(
                _,
                h.filter((S) => S.name != u)
              );
            });
        }
        clearElementCache(u) {
          this._engine.statesByElement.delete(u),
            this._elementListeners.delete(u);
          const h = this._engine.playersByElement.get(u);
          h &&
            (h.forEach((_) => _.destroy()),
            this._engine.playersByElement.delete(u));
        }
        _signalRemovalForInnerTriggers(u, h) {
          const _ = this._engine.driver.query(u, yr, !0);
          _.forEach((S) => {
            if (S[Dn]) return;
            const P = this._engine.fetchNamespacesByElement(S);
            P.size
              ? P.forEach((B) => B.triggerLeaveAnimation(S, h, !1, !0))
              : this.clearElementCache(S);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              _.forEach((S) => this.clearElementCache(S))
            );
        }
        triggerLeaveAnimation(u, h, _, S) {
          const P = this._engine.statesByElement.get(u),
            B = new Map();
          if (P) {
            const V = [];
            if (
              (P.forEach((W, ne) => {
                if ((B.set(ne, W.value), this._triggers.has(ne))) {
                  const Se = this.trigger(u, ne, bn, S);
                  Se && V.push(Se);
                }
              }),
              V.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, u, !0, h, B),
                _ && vt(V).onDone(() => this._engine.processLeaveNode(u)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(u) {
          const h = this._elementListeners.get(u),
            _ = this._engine.statesByElement.get(u);
          if (h && _) {
            const S = new Set();
            h.forEach((P) => {
              const B = P.name;
              if (S.has(B)) return;
              S.add(B);
              const W = this._triggers.get(B).fallbackTransition,
                ne = _.get(B) || Ri,
                Se = new tt(bn),
                Pe = new Bn(this.id, B, u);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: u,
                  triggerName: B,
                  transition: W,
                  fromState: ne,
                  toState: Se,
                  player: Pe,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(u, h) {
          const _ = this._engine;
          if (
            (u.childElementCount && this._signalRemovalForInnerTriggers(u, h),
            this.triggerLeaveAnimation(u, h, !0))
          )
            return;
          let S = !1;
          if (_.totalAnimations) {
            const P = _.players.length ? _.playersByQueriedElement.get(u) : [];
            if (P && P.length) S = !0;
            else {
              let B = u;
              for (; (B = B.parentNode); )
                if (_.statesByElement.get(B)) {
                  S = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(u), S))
            _.markElementAsRemoved(this.id, u, !1, h);
          else {
            const P = u[Dn];
            (!P || P === Zt) &&
              (_.afterFlush(() => this.clearElementCache(u)),
              _.destroyInnerAnimations(u),
              _._onRemovalComplete(u, h));
          }
        }
        insertNode(u, h) {
          Sn(u, this._hostClassName);
        }
        drainQueuedTransitions(u) {
          const h = [];
          return (
            this._queue.forEach((_) => {
              const S = _.player;
              if (S.destroyed) return;
              const P = _.element,
                B = this._elementListeners.get(P);
              B &&
                B.forEach((V) => {
                  if (V.name == _.triggerName) {
                    const W = Ge(
                      P,
                      _.triggerName,
                      _.fromState.value,
                      _.toState.value
                    );
                    (W._data = u), At(_.player, V.phase, W, V.callback);
                  }
                }),
                S.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      S.destroy();
                    })
                  : h.push(_);
            }),
            (this._queue = []),
            h.sort((_, S) => {
              const P = _.transition.ast.depCount,
                B = S.transition.ast.depCount;
              return 0 == P || 0 == B
                ? P - B
                : this._engine.driver.containsElement(_.element, S.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(u) {
          this.players.forEach((h) => h.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, u);
        }
      }
      class Ut {
        _onRemovalComplete(u, h) {
          this.onRemovalComplete(u, h);
        }
        constructor(u, h, _) {
          (this.bodyNode = u),
            (this.driver = h),
            (this._normalizer = _),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (S, P) => {});
        }
        get queuedPlayers() {
          const u = [];
          return (
            this._namespaceList.forEach((h) => {
              h.players.forEach((_) => {
                _.queued && u.push(_);
              });
            }),
            u
          );
        }
        createNamespace(u, h) {
          const _ = new ti(u, h, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, h)
              ? this._balanceNamespaceList(_, h)
              : (this.newHostElements.set(h, _), this.collectEnterElement(h)),
            (this._namespaceLookup[u] = _)
          );
        }
        _balanceNamespaceList(u, h) {
          const _ = this._namespaceList,
            S = this.namespacesByHostElement;
          if (_.length - 1 >= 0) {
            let B = !1,
              V = this.driver.getParentElement(h);
            for (; V; ) {
              const W = S.get(V);
              if (W) {
                const ne = _.indexOf(W);
                _.splice(ne + 1, 0, u), (B = !0);
                break;
              }
              V = this.driver.getParentElement(V);
            }
            B || _.unshift(u);
          } else _.push(u);
          return S.set(h, u), u;
        }
        register(u, h) {
          let _ = this._namespaceLookup[u];
          return _ || (_ = this.createNamespace(u, h)), _;
        }
        registerTrigger(u, h, _) {
          let S = this._namespaceLookup[u];
          S && S.register(h, _) && this.totalAnimations++;
        }
        destroy(u, h) {
          u &&
            (this.afterFlush(() => {}),
            this.afterFlushAnimationsDone(() => {
              const _ = this._fetchNamespace(u);
              this.namespacesByHostElement.delete(_.hostElement);
              const S = this._namespaceList.indexOf(_);
              S >= 0 && this._namespaceList.splice(S, 1),
                _.destroy(h),
                delete this._namespaceLookup[u];
            }));
        }
        _fetchNamespace(u) {
          return this._namespaceLookup[u];
        }
        fetchNamespacesByElement(u) {
          const h = new Set(),
            _ = this.statesByElement.get(u);
          if (_)
            for (let S of _.values())
              if (S.namespaceId) {
                const P = this._fetchNamespace(S.namespaceId);
                P && h.add(P);
              }
          return h;
        }
        trigger(u, h, _, S) {
          if (Er(h)) {
            const P = this._fetchNamespace(u);
            if (P) return P.trigger(h, _, S), !0;
          }
          return !1;
        }
        insertNode(u, h, _, S) {
          if (!Er(h)) return;
          const P = h[Dn];
          if (P && P.setForRemoval) {
            (P.setForRemoval = !1), (P.setForMove = !0);
            const B = this.collectedLeaveElements.indexOf(h);
            B >= 0 && this.collectedLeaveElements.splice(B, 1);
          }
          if (u) {
            const B = this._fetchNamespace(u);
            B && B.insertNode(h, _);
          }
          S && this.collectEnterElement(h);
        }
        collectEnterElement(u) {
          this.collectedEnterElements.push(u);
        }
        markElementAsDisabled(u, h) {
          h
            ? this.disabledNodes.has(u) ||
              (this.disabledNodes.add(u), Sn(u, Pt))
            : this.disabledNodes.has(u) &&
              (this.disabledNodes.delete(u), ot(u, Pt));
        }
        removeNode(u, h, _) {
          if (Er(h)) {
            const S = u ? this._fetchNamespace(u) : null;
            S ? S.removeNode(h, _) : this.markElementAsRemoved(u, h, !1, _);
            const P = this.namespacesByHostElement.get(h);
            P && P.id !== u && P.removeNode(h, _);
          } else this._onRemovalComplete(h, _);
        }
        markElementAsRemoved(u, h, _, S, P) {
          this.collectedLeaveElements.push(h),
            (h[Dn] = {
              namespaceId: u,
              setForRemoval: S,
              hasAnimation: _,
              removedBeforeQueried: !1,
              previousTriggersValues: P,
            });
        }
        listen(u, h, _, S, P) {
          return Er(h) ? this._fetchNamespace(u).listen(h, _, S, P) : () => {};
        }
        _buildInstruction(u, h, _, S, P) {
          return u.transition.build(
            this.driver,
            u.element,
            u.fromState.value,
            u.toState.value,
            _,
            S,
            u.fromState.options,
            u.toState.options,
            h,
            P
          );
        }
        destroyInnerAnimations(u) {
          let h = this.driver.query(u, yr, !0);
          h.forEach((_) => this.destroyActiveAnimationsForElement(_)),
            0 != this.playersByQueriedElement.size &&
              ((h = this.driver.query(u, Qr, !0)),
              h.forEach((_) => this.finishActiveQueriedAnimationOnElement(_)));
        }
        destroyActiveAnimationsForElement(u) {
          const h = this.playersByElement.get(u);
          h &&
            h.forEach((_) => {
              _.queued ? (_.markedForDestroy = !0) : _.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(u) {
          const h = this.playersByQueriedElement.get(u);
          h && h.forEach((_) => _.finish());
        }
        whenRenderingDone() {
          return new Promise((u) => {
            if (this.players.length) return vt(this.players).onDone(() => u());
            u();
          });
        }
        processLeaveNode(u) {
          const h = u[Dn];
          if (h && h.setForRemoval) {
            if (((u[Dn] = Zt), h.namespaceId)) {
              this.destroyInnerAnimations(u);
              const _ = this._fetchNamespace(h.namespaceId);
              _ && _.clearElementCache(u);
            }
            this._onRemovalComplete(u, h.setForRemoval);
          }
          u.classList?.contains(Pt) && this.markElementAsDisabled(u, !1),
            this.driver.query(u, ".ng-animate-disabled", !0).forEach((_) => {
              this.markElementAsDisabled(_, !1);
            });
        }
        flush(u = -1) {
          let h = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((_, S) =>
                this._balanceNamespaceList(_, S)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let _ = 0; _ < this.collectedEnterElements.length; _++)
              Sn(this.collectedEnterElements[_], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const _ = [];
            try {
              h = this._flushAnimations(_, u);
            } finally {
              for (let S = 0; S < _.length; S++) _[S]();
            }
          } else
            for (let _ = 0; _ < this.collectedLeaveElements.length; _++)
              this.processLeaveNode(this.collectedLeaveElements[_]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((_) => _()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const _ = this._whenQuietFns;
            (this._whenQuietFns = []),
              h.length
                ? vt(h).onDone(() => {
                    _.forEach((S) => S());
                  })
                : _.forEach((S) => S());
          }
        }
        reportError(u) {
          throw (function Qe(A) {
            return new N.vHH(3402, !1);
          })();
        }
        _flushAnimations(u, h) {
          const _ = new ar(),
            S = [],
            P = new Map(),
            B = [],
            V = new Map(),
            W = new Map(),
            ne = new Map(),
            Se = new Set();
          this.disabledNodes.forEach((d) => {
            Se.add(d);
            const M = this.driver.query(d, ".ng-animate-queued", !0);
            for (let y = 0; y < M.length; y++) Se.add(M[y]);
          });
          const Pe = this.bodyNode,
            _t = Array.from(this.statesByElement.keys()),
            ut = Hr(_t, this.collectedEnterElements),
            We = new Map();
          let nt = 0;
          ut.forEach((d, M) => {
            const y = It + nt++;
            We.set(M, y), d.forEach((E) => Sn(E, y));
          });
          const Ht = [],
            en = new Set(),
            fn = new Set();
          for (let d = 0; d < this.collectedLeaveElements.length; d++) {
            const M = this.collectedLeaveElements[d],
              y = M[Dn];
            y &&
              y.setForRemoval &&
              (Ht.push(M),
              en.add(M),
              y.hasAnimation
                ? this.driver
                    .query(M, ".ng-star-inserted", !0)
                    .forEach((E) => en.add(E))
                : fn.add(M));
          }
          const On = new Map(),
            An = Hr(_t, Array.from(en));
          An.forEach((d, M) => {
            const y = Mt + nt++;
            On.set(M, y), d.forEach((E) => Sn(E, y));
          }),
            u.push(() => {
              ut.forEach((d, M) => {
                const y = We.get(M);
                d.forEach((E) => ot(E, y));
              }),
                An.forEach((d, M) => {
                  const y = On.get(M);
                  d.forEach((E) => ot(E, y));
                }),
                Ht.forEach((d) => {
                  this.processLeaveNode(d);
                });
            });
          const ni = [],
            Kn = [];
          for (let d = this._namespaceList.length - 1; d >= 0; d--)
            this._namespaceList[d].drainQueuedTransitions(h).forEach((y) => {
              const E = y.player,
                x = y.element;
              if ((ni.push(E), this.collectedEnterElements.length)) {
                const ze = x[Dn];
                if (ze && ze.setForMove) {
                  if (
                    ze.previousTriggersValues &&
                    ze.previousTriggersValues.has(y.triggerName)
                  ) {
                    const Bt = ze.previousTriggersValues.get(y.triggerName),
                      gt = this.statesByElement.get(y.element);
                    if (gt && gt.has(y.triggerName)) {
                      const nn = gt.get(y.triggerName);
                      (nn.value = Bt), gt.set(y.triggerName, nn);
                    }
                  }
                  return void E.destroy();
                }
              }
              const Z = !Pe || !this.driver.containsElement(Pe, x),
                oe = On.get(x),
                xe = We.get(x),
                Ye = this._buildInstruction(y, _, xe, oe, Z);
              if (Ye.errors && Ye.errors.length) return void Kn.push(Ye);
              if (Z)
                return (
                  E.onStart(() => ae(x, Ye.fromStyles)),
                  E.onDestroy(() => H(x, Ye.toStyles)),
                  void S.push(E)
                );
              if (y.isFallbackTransition)
                return (
                  E.onStart(() => ae(x, Ye.fromStyles)),
                  E.onDestroy(() => H(x, Ye.toStyles)),
                  void S.push(E)
                );
              const Rt = [];
              Ye.timelines.forEach((ze) => {
                (ze.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(ze.element) || Rt.push(ze);
              }),
                (Ye.timelines = Rt),
                _.append(x, Ye.timelines),
                B.push({ instruction: Ye, player: E, element: x }),
                Ye.queriedElements.forEach((ze) => ct(V, ze, []).push(E)),
                Ye.preStyleProps.forEach((ze, Bt) => {
                  if (ze.size) {
                    let gt = W.get(Bt);
                    gt || W.set(Bt, (gt = new Set())),
                      ze.forEach((nn, fr) => gt.add(fr));
                  }
                }),
                Ye.postStyleProps.forEach((ze, Bt) => {
                  let gt = ne.get(Bt);
                  gt || ne.set(Bt, (gt = new Set())),
                    ze.forEach((nn, fr) => gt.add(fr));
                });
            });
          if (Kn.length) {
            const d = [];
            Kn.forEach((M) => {
              d.push(
                (function Gt(A, u) {
                  return new N.vHH(3505, !1);
                })()
              );
            }),
              ni.forEach((M) => M.destroy()),
              this.reportError(d);
          }
          const tn = new Map(),
            Wr = new Map();
          B.forEach((d) => {
            const M = d.element;
            _.has(M) &&
              (Wr.set(M, M),
              this._beforeAnimationBuild(
                d.player.namespaceId,
                d.instruction,
                tn
              ));
          }),
            S.forEach((d) => {
              const M = d.element;
              this._getPreviousPlayers(
                M,
                !1,
                d.namespaceId,
                d.triggerName,
                null
              ).forEach((E) => {
                ct(tn, M, []).push(E), E.destroy();
              });
            });
          const Di = Ht.filter((d) => xr(d, W, ne)),
            Ci = new Map();
          zn(Ci, this.driver, fn, ne, ie.l3).forEach((d) => {
            xr(d, W, ne) && Di.push(d);
          });
          const ho = new Map();
          ut.forEach((d, M) => {
            zn(ho, this.driver, new Set(d), W, ie.k1);
          }),
            Di.forEach((d) => {
              const M = Ci.get(d),
                y = ho.get(d);
              Ci.set(
                d,
                new Map([...(M?.entries() ?? []), ...(y?.entries() ?? [])])
              );
            });
          const Vi = [],
            Ji = [],
            zo = {};
          B.forEach((d) => {
            const { element: M, player: y, instruction: E } = d;
            if (_.has(M)) {
              if (Se.has(M))
                return (
                  y.onDestroy(() => H(M, E.toStyles)),
                  (y.disabled = !0),
                  y.overrideTotalTime(E.totalTime),
                  void S.push(y)
                );
              let x = zo;
              if (Wr.size > 1) {
                let oe = M;
                const xe = [];
                for (; (oe = oe.parentNode); ) {
                  const Ye = Wr.get(oe);
                  if (Ye) {
                    x = Ye;
                    break;
                  }
                  xe.push(oe);
                }
                xe.forEach((Ye) => Wr.set(Ye, x));
              }
              const Z = this._buildAnimation(y.namespaceId, E, tn, P, ho, Ci);
              if ((y.setRealPlayer(Z), x === zo)) Vi.push(y);
              else {
                const oe = this.playersByElement.get(x);
                oe && oe.length && (y.parentPlayer = vt(oe)), S.push(y);
              }
            } else
              ae(M, E.fromStyles),
                y.onDestroy(() => H(M, E.toStyles)),
                Ji.push(y),
                Se.has(M) && S.push(y);
          }),
            Ji.forEach((d) => {
              const M = P.get(d.element);
              if (M && M.length) {
                const y = vt(M);
                d.setRealPlayer(y);
              }
            }),
            S.forEach((d) => {
              d.parentPlayer ? d.syncPlayerEvents(d.parentPlayer) : d.destroy();
            });
          for (let d = 0; d < Ht.length; d++) {
            const M = Ht[d],
              y = M[Dn];
            if ((ot(M, Mt), y && y.hasAnimation)) continue;
            let E = [];
            if (V.size) {
              let Z = V.get(M);
              Z && Z.length && E.push(...Z);
              let oe = this.driver.query(M, Qr, !0);
              for (let xe = 0; xe < oe.length; xe++) {
                let Ye = V.get(oe[xe]);
                Ye && Ye.length && E.push(...Ye);
              }
            }
            const x = E.filter((Z) => !Z.destroyed);
            x.length ? Io(this, M, x) : this.processLeaveNode(M);
          }
          return (
            (Ht.length = 0),
            Vi.forEach((d) => {
              this.players.push(d),
                d.onDone(() => {
                  d.destroy();
                  const M = this.players.indexOf(d);
                  this.players.splice(M, 1);
                }),
                d.play();
            }),
            Vi
          );
        }
        afterFlush(u) {
          this._flushFns.push(u);
        }
        afterFlushAnimationsDone(u) {
          this._whenQuietFns.push(u);
        }
        _getPreviousPlayers(u, h, _, S, P) {
          let B = [];
          if (h) {
            const V = this.playersByQueriedElement.get(u);
            V && (B = V);
          } else {
            const V = this.playersByElement.get(u);
            if (V) {
              const W = !P || P == bn;
              V.forEach((ne) => {
                ne.queued || (!W && ne.triggerName != S) || B.push(ne);
              });
            }
          }
          return (
            (_ || S) &&
              (B = B.filter(
                (V) => !((_ && _ != V.namespaceId) || (S && S != V.triggerName))
              )),
            B
          );
        }
        _beforeAnimationBuild(u, h, _) {
          const P = h.element,
            B = h.isRemovalTransition ? void 0 : u,
            V = h.isRemovalTransition ? void 0 : h.triggerName;
          for (const W of h.timelines) {
            const ne = W.element,
              Se = ne !== P,
              Pe = ct(_, ne, []);
            this._getPreviousPlayers(ne, Se, B, V, h.toState).forEach((ut) => {
              const We = ut.getRealPlayer();
              We.beforeDestroy && We.beforeDestroy(), ut.destroy(), Pe.push(ut);
            });
          }
          ae(P, h.fromStyles);
        }
        _buildAnimation(u, h, _, S, P, B) {
          const V = h.triggerName,
            W = h.element,
            ne = [],
            Se = new Set(),
            Pe = new Set(),
            _t = h.timelines.map((We) => {
              const nt = We.element;
              Se.add(nt);
              const Ht = nt[Dn];
              if (Ht && Ht.removedBeforeQueried)
                return new ie.ZN(We.duration, We.delay);
              const en = nt !== W,
                fn = (function To(A) {
                  const u = [];
                  return Yi(A, u), u;
                })((_.get(nt) || Fr).map((tn) => tn.getRealPlayer())).filter(
                  (tn) => !!tn.element && tn.element === nt
                ),
                On = P.get(nt),
                An = B.get(nt),
                ni = Ve(this._normalizer, We.keyframes, On, An),
                Kn = this._buildPlayer(We, ni, fn);
              if ((We.subTimeline && S && Pe.add(nt), en)) {
                const tn = new Bn(u, V, nt);
                tn.setRealPlayer(Kn), ne.push(tn);
              }
              return Kn;
            });
          ne.forEach((We) => {
            ct(this.playersByQueriedElement, We.element, []).push(We),
              We.onDone(() =>
                (function Cr(A, u, h) {
                  let _ = A.get(u);
                  if (_) {
                    if (_.length) {
                      const S = _.indexOf(h);
                      _.splice(S, 1);
                    }
                    0 == _.length && A.delete(u);
                  }
                  return _;
                })(this.playersByQueriedElement, We.element, We)
              );
          }),
            Se.forEach((We) => Sn(We, Rn));
          const ut = vt(_t);
          return (
            ut.onDestroy(() => {
              Se.forEach((We) => ot(We, Rn)), H(W, h.toStyles);
            }),
            Pe.forEach((We) => {
              ct(S, We, []).push(ut);
            }),
            ut
          );
        }
        _buildPlayer(u, h, _) {
          return h.length > 0
            ? this.driver.animate(
                u.element,
                h,
                u.duration,
                u.delay,
                u.easing,
                _
              )
            : new ie.ZN(u.duration, u.delay);
        }
      }
      class Bn {
        constructor(u, h, _) {
          (this.namespaceId = u),
            (this.triggerName = h),
            (this.element = _),
            (this._player = new ie.ZN()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = new Map()),
            (this.destroyed = !1),
            (this.parentPlayer = null),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(u) {
          this._containsRealPlayer ||
            ((this._player = u),
            this._queuedCallbacks.forEach((h, _) => {
              h.forEach((S) => At(u, _, void 0, S));
            }),
            this._queuedCallbacks.clear(),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(u.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(u) {
          this.totalTime = u;
        }
        syncPlayerEvents(u) {
          const h = this._player;
          h.triggerCallback && u.onStart(() => h.triggerCallback("start")),
            u.onDone(() => this.finish()),
            u.onDestroy(() => this.destroy());
        }
        _queueEvent(u, h) {
          ct(this._queuedCallbacks, u, []).push(h);
        }
        onDone(u) {
          this.queued && this._queueEvent("done", u), this._player.onDone(u);
        }
        onStart(u) {
          this.queued && this._queueEvent("start", u), this._player.onStart(u);
        }
        onDestroy(u) {
          this.queued && this._queueEvent("destroy", u),
            this._player.onDestroy(u);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(u) {
          this.queued || this._player.setPosition(u);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(u) {
          const h = this._player;
          h.triggerCallback && h.triggerCallback(u);
        }
      }
      function Er(A) {
        return A && 1 === A.nodeType;
      }
      function wr(A, u) {
        const h = A.style.display;
        return (A.style.display = u ?? "none"), h;
      }
      function zn(A, u, h, _, S) {
        const P = [];
        h.forEach((W) => P.push(wr(W)));
        const B = [];
        _.forEach((W, ne) => {
          const Se = new Map();
          W.forEach((Pe) => {
            const _t = u.computeStyle(ne, Pe, S);
            Se.set(Pe, _t),
              (!_t || 0 == _t.length) && ((ne[Dn] = Yn), B.push(ne));
          }),
            A.set(ne, Se);
        });
        let V = 0;
        return h.forEach((W) => wr(W, P[V++])), B;
      }
      function Hr(A, u) {
        const h = new Map();
        if ((A.forEach((V) => h.set(V, [])), 0 == u.length)) return h;
        const S = new Set(u),
          P = new Map();
        function B(V) {
          if (!V) return 1;
          let W = P.get(V);
          if (W) return W;
          const ne = V.parentNode;
          return (W = h.has(ne) ? ne : S.has(ne) ? 1 : B(ne)), P.set(V, W), W;
        }
        return (
          u.forEach((V) => {
            const W = B(V);
            1 !== W && h.get(W).push(V);
          }),
          h
        );
      }
      function Sn(A, u) {
        A.classList?.add(u);
      }
      function ot(A, u) {
        A.classList?.remove(u);
      }
      function Io(A, u, h) {
        vt(h).onDone(() => A.processLeaveNode(u));
      }
      function Yi(A, u) {
        for (let h = 0; h < A.length; h++) {
          const _ = A[h];
          _ instanceof ie.ZE ? Yi(_.players, u) : u.push(_);
        }
      }
      function xr(A, u, h) {
        const _ = h.get(A);
        if (!_) return !1;
        let S = u.get(A);
        return S ? _.forEach((P) => S.add(P)) : u.set(A, _), h.delete(A), !0;
      }
      class an {
        constructor(u, h, _) {
          (this.bodyNode = u),
            (this._driver = h),
            (this._normalizer = _),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (S, P) => {}),
            (this._transitionEngine = new Ut(u, h, _)),
            (this._timelineEngine = new Wt(u, h, _)),
            (this._transitionEngine.onRemovalComplete = (S, P) =>
              this.onRemovalComplete(S, P));
        }
        registerTrigger(u, h, _, S, P) {
          const B = u + "-" + S;
          let V = this._triggerCache[B];
          if (!V) {
            const W = [],
              Se = gi(this._driver, P, W, []);
            if (W.length)
              throw (function Nn(A, u) {
                return new N.vHH(3404, !1);
              })();
            (V = (function ei(A, u, h) {
              return new qi(A, u, h);
            })(S, Se, this._normalizer)),
              (this._triggerCache[B] = V);
          }
          this._transitionEngine.registerTrigger(h, S, V);
        }
        register(u, h) {
          this._transitionEngine.register(u, h);
        }
        destroy(u, h) {
          this._transitionEngine.destroy(u, h);
        }
        onInsert(u, h, _, S) {
          this._transitionEngine.insertNode(u, h, _, S);
        }
        onRemove(u, h, _) {
          this._transitionEngine.removeNode(u, h, _);
        }
        disableAnimations(u, h) {
          this._transitionEngine.markElementAsDisabled(u, h);
        }
        process(u, h, _, S) {
          if ("@" == _.charAt(0)) {
            const [P, B] = hn(_);
            this._timelineEngine.command(P, h, B, S);
          } else this._transitionEngine.trigger(u, h, _, S);
        }
        listen(u, h, _, S, P) {
          if ("@" == _.charAt(0)) {
            const [B, V] = hn(_);
            return this._timelineEngine.listen(B, h, V, P);
          }
          return this._transitionEngine.listen(u, h, _, S, P);
        }
        flush(u = -1) {
          this._transitionEngine.flush(u);
        }
        get players() {
          return [
            ...this._transitionEngine.players,
            ...this._timelineEngine.players,
          ];
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
        afterFlushAnimationsDone(u) {
          this._transitionEngine.afterFlushAnimationsDone(u);
        }
      }
      let un = (() => {
        class A {
          static #e = (this.initialStylesByElement = new WeakMap());
          constructor(h, _, S) {
            (this._element = h),
              (this._startStyles = _),
              (this._endStyles = S),
              (this._state = 0);
            let P = A.initialStylesByElement.get(h);
            P || A.initialStylesByElement.set(h, (P = new Map())),
              (this._initialStyles = P);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                H(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (H(this._element, this._initialStyles),
                this._endStyles &&
                  (H(this._element, this._endStyles), (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (A.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (ae(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (ae(this._element, this._endStyles),
                  (this._endStyles = null)),
                H(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return A;
      })();
      function ko(A) {
        let u = null;
        return (
          A.forEach((h, _) => {
            (function jn(A) {
              return "display" === A || "position" === A;
            })(_) && ((u = u || new Map()), u.set(_, h));
          }),
          u
        );
      }
      class gn {
        constructor(u, h, _, S) {
          (this.element = u),
            (this.keyframes = h),
            (this.options = _),
            (this._specialStyles = S),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = new Map()),
            (this._duration = _.duration),
            (this._delay = _.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((u) => u()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const u = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            u,
            this.options
          )),
            (this._finalKeyframe = u.length ? u[u.length - 1] : new Map()),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _convertKeyframesToObject(u) {
          const h = [];
          return (
            u.forEach((_) => {
              h.push(Object.fromEntries(_));
            }),
            h
          );
        }
        _triggerWebAnimation(u, h, _) {
          return u.animate(this._convertKeyframesToObject(h), _);
        }
        onStart(u) {
          this._originalOnStartFns.push(u), this._onStartFns.push(u);
        }
        onDone(u) {
          this._originalOnDoneFns.push(u), this._onDoneFns.push(u);
        }
        onDestroy(u) {
          this._onDestroyFns.push(u);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((u) => u()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((u) => u()),
            (this._onDestroyFns = []));
        }
        setPosition(u) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = u * this.time);
        }
        getPosition() {
          return +(this.domPlayer.currentTime ?? 0) / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const u = new Map();
          this.hasStarted() &&
            this._finalKeyframe.forEach((_, S) => {
              "offset" !== S &&
                u.set(S, this._finished ? _ : Ar(this.element, S));
            }),
            (this.currentSnapshot = u);
        }
        triggerCallback(u) {
          const h = "start" === u ? this._onStartFns : this._onDoneFns;
          h.forEach((_) => _()), (h.length = 0);
        }
      }
      class Ki {
        validateStyleProperty(u) {
          return !0;
        }
        validateAnimatableStyleProperty(u) {
          return !0;
        }
        matchesElement(u, h) {
          return !1;
        }
        containsElement(u, h) {
          return Pn(u, h);
        }
        getParentElement(u) {
          return Tn(u);
        }
        query(u, h, _) {
          return mr(u, h, _);
        }
        computeStyle(u, h, _) {
          return window.getComputedStyle(u)[h];
        }
        animate(u, h, _, S, P, B = []) {
          const W = {
            duration: _,
            delay: S,
            fill: 0 == S ? "both" : "forwards",
          };
          P && (W.easing = P);
          const ne = new Map(),
            Se = B.filter((ut) => ut instanceof gn);
          (function di(A, u) {
            return 0 === A || 0 === u;
          })(_, S) &&
            Se.forEach((ut) => {
              ut.currentSnapshot.forEach((We, nt) => ne.set(nt, We));
            });
          let Pe = (function ce(A) {
            return A.length
              ? A[0] instanceof Map
                ? A
                : A.map((u) => ci(u))
              : [];
          })(h).map((ut) => k(ut));
          Pe = (function bt(A, u, h) {
            if (h.size && u.length) {
              let _ = u[0],
                S = [];
              if (
                (h.forEach((P, B) => {
                  _.has(B) || S.push(B), _.set(B, P);
                }),
                S.length)
              )
                for (let P = 1; P < u.length; P++) {
                  let B = u[P];
                  S.forEach((V) => B.set(V, Ar(A, V)));
                }
            }
            return u;
          })(u, Pe, ne);
          const _t = (function vi(A, u) {
            let h = null,
              _ = null;
            return (
              Array.isArray(u) && u.length
                ? ((h = ko(u[0])), u.length > 1 && (_ = ko(u[u.length - 1])))
                : u instanceof Map && (h = ko(u)),
              h || _ ? new un(A, h, _) : null
            );
          })(u, Pe);
          return new gn(u, Pe, W, _t);
        }
      }
      var Mr = R(6814);
      let Qi = (() => {
        class A extends ie._j {
          constructor(h, _) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = h.createRenderer(_.body, {
                id: "0",
                encapsulation: N.ifc.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(h) {
            const _ = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const S = Array.isArray(h) ? (0, ie.vP)(h) : h;
            return (
              xi(this._renderer, null, _, "register", [S]),
              new dr(_, this._renderer)
            );
          }
          static #e = (this.ɵfac = function (_) {
            return new (_ || A)(N.LFG(N.FYo), N.LFG(Mr.K0));
          });
          static #t = (this.ɵprov = N.Yz7({ token: A, factory: A.ɵfac }));
        }
        return A;
      })();
      class dr extends ie.LC {
        constructor(u, h) {
          super(), (this._id = u), (this._renderer = h);
        }
        create(u, h) {
          return new $r(this._id, u, h || {}, this._renderer);
        }
      }
      class $r {
        constructor(u, h, _, S) {
          (this.id = u),
            (this.element = h),
            (this._renderer = S),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", _);
        }
        _listen(u, h) {
          return this._renderer.listen(this.element, `@@${this.id}:${u}`, h);
        }
        _command(u, ...h) {
          return xi(this._renderer, this.element, this.id, u, h);
        }
        onDone(u) {
          this._listen("done", u);
        }
        onStart(u) {
          this._listen("start", u);
        }
        onDestroy(u) {
          this._listen("destroy", u);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(u) {
          this._command("setPosition", u);
        }
        getPosition() {
          return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
        }
      }
      function xi(A, u, h, _, S) {
        return A.setProperty(u, `@@${h}:${_}`, S);
      }
      const Yt = "@.disabled";
      let Li = (() => {
        class A {
          constructor(h, _, S) {
            (this.delegate = h),
              (this.engine = _),
              (this._zone = S),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (_.onRemovalComplete = (P, B) => {
                const V = B?.parentNode(P);
                V && B.removeChild(V, P);
              });
          }
          createRenderer(h, _) {
            const P = this.delegate.createRenderer(h, _);
            if (!(h && _ && _.data && _.data.animation)) {
              let Se = this._rendererCache.get(P);
              return (
                Se ||
                  ((Se = new _i("", P, this.engine, () =>
                    this._rendererCache.delete(P)
                  )),
                  this._rendererCache.set(P, Se)),
                Se
              );
            }
            const B = _.id,
              V = _.id + "-" + this._currentId;
            this._currentId++, this.engine.register(V, h);
            const W = (Se) => {
              Array.isArray(Se)
                ? Se.forEach(W)
                : this.engine.registerTrigger(B, V, h, Se.name, Se);
            };
            return _.data.animation.forEach(W), new w(this, V, P, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            queueMicrotask(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(h, _, S) {
            h >= 0 && h < this._microtaskId
              ? this._zone.run(() => _(S))
              : (0 == this._animationCallbacksBuffer.length &&
                  queueMicrotask(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((P) => {
                        const [B, V] = P;
                        B(V);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([_, S]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
          static #e = (this.ɵfac = function (_) {
            return new (_ || A)(N.LFG(N.FYo), N.LFG(an), N.LFG(N.R0b));
          });
          static #t = (this.ɵprov = N.Yz7({ token: A, factory: A.ɵfac }));
        }
        return A;
      })();
      class _i {
        constructor(u, h, _, S) {
          (this.namespaceId = u),
            (this.delegate = h),
            (this.engine = _),
            (this._onDestroy = S);
        }
        get data() {
          return this.delegate.data;
        }
        destroyNode(u) {
          this.delegate.destroyNode?.(u);
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.engine.afterFlushAnimationsDone(() => {
              queueMicrotask(() => {
                this.delegate.destroy();
              });
            }),
            this._onDestroy?.();
        }
        createElement(u, h) {
          return this.delegate.createElement(u, h);
        }
        createComment(u) {
          return this.delegate.createComment(u);
        }
        createText(u) {
          return this.delegate.createText(u);
        }
        appendChild(u, h) {
          this.delegate.appendChild(u, h),
            this.engine.onInsert(this.namespaceId, h, u, !1);
        }
        insertBefore(u, h, _, S = !0) {
          this.delegate.insertBefore(u, h, _),
            this.engine.onInsert(this.namespaceId, h, u, S);
        }
        removeChild(u, h, _) {
          this.engine.onRemove(this.namespaceId, h, this.delegate);
        }
        selectRootElement(u, h) {
          return this.delegate.selectRootElement(u, h);
        }
        parentNode(u) {
          return this.delegate.parentNode(u);
        }
        nextSibling(u) {
          return this.delegate.nextSibling(u);
        }
        setAttribute(u, h, _, S) {
          this.delegate.setAttribute(u, h, _, S);
        }
        removeAttribute(u, h, _) {
          this.delegate.removeAttribute(u, h, _);
        }
        addClass(u, h) {
          this.delegate.addClass(u, h);
        }
        removeClass(u, h) {
          this.delegate.removeClass(u, h);
        }
        setStyle(u, h, _, S) {
          this.delegate.setStyle(u, h, _, S);
        }
        removeStyle(u, h, _) {
          this.delegate.removeStyle(u, h, _);
        }
        setProperty(u, h, _) {
          "@" == h.charAt(0) && h == Yt
            ? this.disableAnimations(u, !!_)
            : this.delegate.setProperty(u, h, _);
        }
        setValue(u, h) {
          this.delegate.setValue(u, h);
        }
        listen(u, h, _) {
          return this.delegate.listen(u, h, _);
        }
        disableAnimations(u, h) {
          this.engine.disableAnimations(u, h);
        }
      }
      class w extends _i {
        constructor(u, h, _, S, P) {
          super(h, _, S, P), (this.factory = u), (this.namespaceId = h);
        }
        setProperty(u, h, _) {
          "@" == h.charAt(0)
            ? "." == h.charAt(1) && h == Yt
              ? this.disableAnimations(u, (_ = void 0 === _ || !!_))
              : this.engine.process(this.namespaceId, u, h.slice(1), _)
            : this.delegate.setProperty(u, h, _);
        }
        listen(u, h, _) {
          if ("@" == h.charAt(0)) {
            const S = (function b(A) {
              switch (A) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return A;
              }
            })(u);
            let P = h.slice(1),
              B = "";
            return (
              "@" != P.charAt(0) &&
                ([P, B] = (function v(A) {
                  const u = A.indexOf(".");
                  return [A.substring(0, u), A.slice(u + 1)];
                })(P)),
              this.engine.listen(this.namespaceId, S, P, B, (V) => {
                this.factory.scheduleListenerCallback(V._data || -1, _, V);
              })
            );
          }
          return this.delegate.listen(u, h, _);
        }
      }
      const it = [
          { provide: ie._j, useClass: Qi },
          {
            provide: Oi,
            useFactory: function j() {
              return new Ao();
            },
          },
          {
            provide: an,
            useClass: (() => {
              class A extends an {
                constructor(h, _, S, P) {
                  super(h.body, _, S);
                }
                ngOnDestroy() {
                  this.flush();
                }
                static #e = (this.ɵfac = function (_) {
                  return new (_ || A)(
                    N.LFG(Mr.K0),
                    N.LFG($t),
                    N.LFG(Oi),
                    N.LFG(N.z2F)
                  );
                });
                static #t = (this.ɵprov = N.Yz7({ token: A, factory: A.ɵfac }));
              }
              return A;
            })(),
          },
          {
            provide: N.FYo,
            useFactory: function Ue(A, u, h) {
              return new Li(A, u, h);
            },
            deps: [f.se, an, N.R0b],
          },
        ],
        Un = [
          { provide: $t, useFactory: () => new Ki() },
          { provide: N.QbO, useValue: "BrowserAnimations" },
          ...it,
        ],
        zr = [
          { provide: $t, useClass: li },
          { provide: N.QbO, useValue: "NoopAnimations" },
          ...it,
        ];
      let br = (() => {
          class A {
            static withConfig(h) {
              return { ngModule: A, providers: h.disableAnimations ? zr : Un };
            }
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵmod = N.oAB({ type: A }));
            static #n = (this.ɵinj = N.cJS({ providers: Un, imports: [f.b2] }));
          }
          return A;
        })(),
        ki = (() => {
          class A {
            static #e = (this.ɵfac = function (_) {
              return new (_ || A)();
            });
            static #t = (this.ɵmod = N.oAB({ type: A, bootstrap: [Ie] }));
            static #n = (this.ɵinj = N.cJS({
              imports: [f.b2, J, _e.UX, _e.u5, br],
            }));
          }
          return A;
        })();
      f.q6()
        .bootstrapModule(ki)
        .catch((A) => console.error(A));
    },
    5619: ($e, pe, R) => {
      R.d(pe, { X: () => G });
      var f = R(8645);
      class G extends f.x {
        constructor(le) {
          super(), (this._value = le);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(le) {
          const J = super._subscribe(le);
          return !J.closed && le.next(this._value), J;
        }
        getValue() {
          const { hasError: le, thrownError: J, _value: ee } = this;
          if (le) throw J;
          return this._throwIfClosed(), ee;
        }
        next(le) {
          super.next((this._value = le));
        }
      }
    },
    5592: ($e, pe, R) => {
      R.d(pe, { y: () => Ie });
      var f = R(305),
        G = R(7394),
        N = R(4850),
        le = R(8407),
        J = R(2653),
        ee = R(4674),
        ye = R(1441);
      let Ie = (() => {
        class Ce {
          constructor(be) {
            be && (this._subscribe = be);
          }
          lift(be) {
            const Re = new Ce();
            return (Re.source = this), (Re.operator = be), Re;
          }
          subscribe(be, Re, St) {
            const Fe = (function re(Ce) {
              return (
                (Ce && Ce instanceof f.Lv) ||
                ((function ie(Ce) {
                  return (
                    Ce &&
                    (0, ee.m)(Ce.next) &&
                    (0, ee.m)(Ce.error) &&
                    (0, ee.m)(Ce.complete)
                  );
                })(Ce) &&
                  (0, G.Nn)(Ce))
              );
            })(be)
              ? be
              : new f.Hp(be, Re, St);
            return (
              (0, ye.x)(() => {
                const { operator: yt, source: rt } = this;
                Fe.add(
                  yt
                    ? yt.call(Fe, rt)
                    : rt
                    ? this._subscribe(Fe)
                    : this._trySubscribe(Fe)
                );
              }),
              Fe
            );
          }
          _trySubscribe(be) {
            try {
              return this._subscribe(be);
            } catch (Re) {
              be.error(Re);
            }
          }
          forEach(be, Re) {
            return new (Re = _e(Re))((St, Fe) => {
              const yt = new f.Hp({
                next: (rt) => {
                  try {
                    be(rt);
                  } catch (qe) {
                    Fe(qe), yt.unsubscribe();
                  }
                },
                error: Fe,
                complete: St,
              });
              this.subscribe(yt);
            });
          }
          _subscribe(be) {
            var Re;
            return null === (Re = this.source) || void 0 === Re
              ? void 0
              : Re.subscribe(be);
          }
          [N.L]() {
            return this;
          }
          pipe(...be) {
            return (0, le.U)(be)(this);
          }
          toPromise(be) {
            return new (be = _e(be))((Re, St) => {
              let Fe;
              this.subscribe(
                (yt) => (Fe = yt),
                (yt) => St(yt),
                () => Re(Fe)
              );
            });
          }
        }
        return (Ce.create = (Be) => new Ce(Be)), Ce;
      })();
      function _e(Ce) {
        var Be;
        return null !== (Be = Ce ?? J.config.Promise) && void 0 !== Be
          ? Be
          : Promise;
      }
    },
    8645: ($e, pe, R) => {
      R.d(pe, { x: () => ye });
      var f = R(5592),
        G = R(7394);
      const le = (0, R(2306).d)(
        (_e) =>
          function () {
            _e(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var J = R(9039),
        ee = R(1441);
      let ye = (() => {
        class _e extends f.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(re) {
            const Ce = new Ie(this, this);
            return (Ce.operator = re), Ce;
          }
          _throwIfClosed() {
            if (this.closed) throw new le();
          }
          next(re) {
            (0, ee.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const Ce of this.currentObservers) Ce.next(re);
              }
            });
          }
          error(re) {
            (0, ee.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = re);
                const { observers: Ce } = this;
                for (; Ce.length; ) Ce.shift().error(re);
              }
            });
          }
          complete() {
            (0, ee.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: re } = this;
                for (; re.length; ) re.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var re;
            return (
              (null === (re = this.observers) || void 0 === re
                ? void 0
                : re.length) > 0
            );
          }
          _trySubscribe(re) {
            return this._throwIfClosed(), super._trySubscribe(re);
          }
          _subscribe(re) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(re),
              this._innerSubscribe(re)
            );
          }
          _innerSubscribe(re) {
            const { hasError: Ce, isStopped: Be, observers: be } = this;
            return Ce || Be
              ? G.Lc
              : ((this.currentObservers = null),
                be.push(re),
                new G.w0(() => {
                  (this.currentObservers = null), (0, J.P)(be, re);
                }));
          }
          _checkFinalizedStatuses(re) {
            const { hasError: Ce, thrownError: Be, isStopped: be } = this;
            Ce ? re.error(Be) : be && re.complete();
          }
          asObservable() {
            const re = new f.y();
            return (re.source = this), re;
          }
        }
        return (_e.create = (ie, re) => new Ie(ie, re)), _e;
      })();
      class Ie extends ye {
        constructor(ie, re) {
          super(), (this.destination = ie), (this.source = re);
        }
        next(ie) {
          var re, Ce;
          null ===
            (Ce =
              null === (re = this.destination) || void 0 === re
                ? void 0
                : re.next) ||
            void 0 === Ce ||
            Ce.call(re, ie);
        }
        error(ie) {
          var re, Ce;
          null ===
            (Ce =
              null === (re = this.destination) || void 0 === re
                ? void 0
                : re.error) ||
            void 0 === Ce ||
            Ce.call(re, ie);
        }
        complete() {
          var ie, re;
          null ===
            (re =
              null === (ie = this.destination) || void 0 === ie
                ? void 0
                : ie.complete) ||
            void 0 === re ||
            re.call(ie);
        }
        _subscribe(ie) {
          var re, Ce;
          return null !==
            (Ce =
              null === (re = this.source) || void 0 === re
                ? void 0
                : re.subscribe(ie)) && void 0 !== Ce
            ? Ce
            : G.Lc;
        }
      }
    },
    305: ($e, pe, R) => {
      R.d(pe, { Hp: () => St, Lv: () => Ce });
      var f = R(4674),
        G = R(7394),
        N = R(2653),
        le = R(3894),
        J = R(2420);
      const ee = _e("C", void 0, void 0);
      function _e(K, fe, de) {
        return { kind: K, value: fe, error: de };
      }
      var ie = R(7599),
        re = R(1441);
      class Ce extends G.w0 {
        constructor(fe) {
          super(),
            (this.isStopped = !1),
            fe
              ? ((this.destination = fe), (0, G.Nn)(fe) && fe.add(this))
              : (this.destination = qe);
        }
        static create(fe, de, Le) {
          return new St(fe, de, Le);
        }
        next(fe) {
          this.isStopped
            ? rt(
                (function Ie(K) {
                  return _e("N", K, void 0);
                })(fe),
                this
              )
            : this._next(fe);
        }
        error(fe) {
          this.isStopped
            ? rt(
                (function ye(K) {
                  return _e("E", void 0, K);
                })(fe),
                this
              )
            : ((this.isStopped = !0), this._error(fe));
        }
        complete() {
          this.isStopped
            ? rt(ee, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(fe) {
          this.destination.next(fe);
        }
        _error(fe) {
          try {
            this.destination.error(fe);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Be = Function.prototype.bind;
      function be(K, fe) {
        return Be.call(K, fe);
      }
      class Re {
        constructor(fe) {
          this.partialObserver = fe;
        }
        next(fe) {
          const { partialObserver: de } = this;
          if (de.next)
            try {
              de.next(fe);
            } catch (Le) {
              Fe(Le);
            }
        }
        error(fe) {
          const { partialObserver: de } = this;
          if (de.error)
            try {
              de.error(fe);
            } catch (Le) {
              Fe(Le);
            }
          else Fe(fe);
        }
        complete() {
          const { partialObserver: fe } = this;
          if (fe.complete)
            try {
              fe.complete();
            } catch (de) {
              Fe(de);
            }
        }
      }
      class St extends Ce {
        constructor(fe, de, Le) {
          let Me;
          if ((super(), (0, f.m)(fe) || !fe))
            Me = {
              next: fe ?? void 0,
              error: de ?? void 0,
              complete: Le ?? void 0,
            };
          else {
            let Ee;
            this && N.config.useDeprecatedNextContext
              ? ((Ee = Object.create(fe)),
                (Ee.unsubscribe = () => this.unsubscribe()),
                (Me = {
                  next: fe.next && be(fe.next, Ee),
                  error: fe.error && be(fe.error, Ee),
                  complete: fe.complete && be(fe.complete, Ee),
                }))
              : (Me = fe);
          }
          this.destination = new Re(Me);
        }
      }
      function Fe(K) {
        N.config.useDeprecatedSynchronousErrorHandling
          ? (0, re.O)(K)
          : (0, le.h)(K);
      }
      function rt(K, fe) {
        const { onStoppedNotification: de } = N.config;
        de && ie.z.setTimeout(() => de(K, fe));
      }
      const qe = {
        closed: !0,
        next: J.Z,
        error: function yt(K) {
          throw K;
        },
        complete: J.Z,
      };
    },
    7394: ($e, pe, R) => {
      R.d(pe, { Lc: () => ee, w0: () => J, Nn: () => ye });
      var f = R(4674);
      const N = (0, R(2306).d)(
        (_e) =>
          function (re) {
            _e(this),
              (this.message = re
                ? `${re.length} errors occurred during unsubscription:\n${re
                    .map((Ce, Be) => `${Be + 1}) ${Ce.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = re);
          }
      );
      var le = R(9039);
      class J {
        constructor(ie) {
          (this.initialTeardown = ie),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let ie;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: re } = this;
            if (re)
              if (((this._parentage = null), Array.isArray(re)))
                for (const be of re) be.remove(this);
              else re.remove(this);
            const { initialTeardown: Ce } = this;
            if ((0, f.m)(Ce))
              try {
                Ce();
              } catch (be) {
                ie = be instanceof N ? be.errors : [be];
              }
            const { _finalizers: Be } = this;
            if (Be) {
              this._finalizers = null;
              for (const be of Be)
                try {
                  Ie(be);
                } catch (Re) {
                  (ie = ie ?? []),
                    Re instanceof N
                      ? (ie = [...ie, ...Re.errors])
                      : ie.push(Re);
                }
            }
            if (ie) throw new N(ie);
          }
        }
        add(ie) {
          var re;
          if (ie && ie !== this)
            if (this.closed) Ie(ie);
            else {
              if (ie instanceof J) {
                if (ie.closed || ie._hasParent(this)) return;
                ie._addParent(this);
              }
              (this._finalizers =
                null !== (re = this._finalizers) && void 0 !== re
                  ? re
                  : []).push(ie);
            }
        }
        _hasParent(ie) {
          const { _parentage: re } = this;
          return re === ie || (Array.isArray(re) && re.includes(ie));
        }
        _addParent(ie) {
          const { _parentage: re } = this;
          this._parentage = Array.isArray(re)
            ? (re.push(ie), re)
            : re
            ? [re, ie]
            : ie;
        }
        _removeParent(ie) {
          const { _parentage: re } = this;
          re === ie
            ? (this._parentage = null)
            : Array.isArray(re) && (0, le.P)(re, ie);
        }
        remove(ie) {
          const { _finalizers: re } = this;
          re && (0, le.P)(re, ie), ie instanceof J && ie._removeParent(this);
        }
      }
      J.EMPTY = (() => {
        const _e = new J();
        return (_e.closed = !0), _e;
      })();
      const ee = J.EMPTY;
      function ye(_e) {
        return (
          _e instanceof J ||
          (_e &&
            "closed" in _e &&
            (0, f.m)(_e.remove) &&
            (0, f.m)(_e.add) &&
            (0, f.m)(_e.unsubscribe))
        );
      }
      function Ie(_e) {
        (0, f.m)(_e) ? _e() : _e.unsubscribe();
      }
    },
    2653: ($e, pe, R) => {
      R.d(pe, { config: () => f });
      const f = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    5211: ($e, pe, R) => {
      R.d(pe, { z: () => J });
      var f = R(7537),
        N = R(9940),
        le = R(7715);
      function J(...ee) {
        return (function G() {
          return (0, f.J)(1);
        })()((0, le.D)(ee, (0, N.yG)(ee)));
      }
    },
    6232: ($e, pe, R) => {
      R.d(pe, { E: () => G });
      const G = new (R(5592).y)((J) => J.complete());
    },
    7715: ($e, pe, R) => {
      R.d(pe, { D: () => Le });
      var f = R(4829),
        G = R(7103),
        N = R(9360),
        le = R(8251);
      function J(Me, Ee = 0) {
        return (0, N.e)((Ke, he) => {
          Ke.subscribe(
            (0, le.x)(
              he,
              (jt) => (0, G.f)(he, Me, () => he.next(jt), Ee),
              () => (0, G.f)(he, Me, () => he.complete(), Ee),
              (jt) => (0, G.f)(he, Me, () => he.error(jt), Ee)
            )
          );
        });
      }
      function ee(Me, Ee = 0) {
        return (0, N.e)((Ke, he) => {
          he.add(Me.schedule(() => Ke.subscribe(he), Ee));
        });
      }
      var _e = R(5592),
        re = R(4971),
        Ce = R(4674);
      function be(Me, Ee) {
        if (!Me) throw new Error("Iterable cannot be null");
        return new _e.y((Ke) => {
          (0, G.f)(Ke, Ee, () => {
            const he = Me[Symbol.asyncIterator]();
            (0, G.f)(
              Ke,
              Ee,
              () => {
                he.next().then((jt) => {
                  jt.done ? Ke.complete() : Ke.next(jt.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Re = R(8382),
        St = R(4026),
        Fe = R(4266),
        yt = R(3664),
        rt = R(5726),
        qe = R(9853),
        K = R(541);
      function Le(Me, Ee) {
        return Ee
          ? (function de(Me, Ee) {
              if (null != Me) {
                if ((0, Re.c)(Me))
                  return (function ye(Me, Ee) {
                    return (0, f.Xf)(Me).pipe(ee(Ee), J(Ee));
                  })(Me, Ee);
                if ((0, Fe.z)(Me))
                  return (function ie(Me, Ee) {
                    return new _e.y((Ke) => {
                      let he = 0;
                      return Ee.schedule(function () {
                        he === Me.length
                          ? Ke.complete()
                          : (Ke.next(Me[he++]), Ke.closed || this.schedule());
                      });
                    });
                  })(Me, Ee);
                if ((0, St.t)(Me))
                  return (function Ie(Me, Ee) {
                    return (0, f.Xf)(Me).pipe(ee(Ee), J(Ee));
                  })(Me, Ee);
                if ((0, rt.D)(Me)) return be(Me, Ee);
                if ((0, yt.T)(Me))
                  return (function Be(Me, Ee) {
                    return new _e.y((Ke) => {
                      let he;
                      return (
                        (0, G.f)(Ke, Ee, () => {
                          (he = Me[re.h]()),
                            (0, G.f)(
                              Ke,
                              Ee,
                              () => {
                                let jt, ke;
                                try {
                                  ({ value: jt, done: ke } = he.next());
                                } catch (je) {
                                  return void Ke.error(je);
                                }
                                ke ? Ke.complete() : Ke.next(jt);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, Ce.m)(he?.return) && he.return()
                      );
                    });
                  })(Me, Ee);
                if ((0, K.L)(Me))
                  return (function fe(Me, Ee) {
                    return be((0, K.Q)(Me), Ee);
                  })(Me, Ee);
              }
              throw (0, qe.z)(Me);
            })(Me, Ee)
          : (0, f.Xf)(Me);
      }
    },
    4829: ($e, pe, R) => {
      R.d(pe, { Xf: () => Be });
      var f = R(7582),
        G = R(4266),
        N = R(4026),
        le = R(5592),
        J = R(8382),
        ee = R(5726),
        ye = R(9853),
        Ie = R(3664),
        _e = R(541),
        ie = R(4674),
        re = R(3894),
        Ce = R(4850);
      function Be(K) {
        if (K instanceof le.y) return K;
        if (null != K) {
          if ((0, J.c)(K))
            return (function be(K) {
              return new le.y((fe) => {
                const de = K[Ce.L]();
                if ((0, ie.m)(de.subscribe)) return de.subscribe(fe);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(K);
          if ((0, G.z)(K))
            return (function Re(K) {
              return new le.y((fe) => {
                for (let de = 0; de < K.length && !fe.closed; de++)
                  fe.next(K[de]);
                fe.complete();
              });
            })(K);
          if ((0, N.t)(K))
            return (function St(K) {
              return new le.y((fe) => {
                K.then(
                  (de) => {
                    fe.closed || (fe.next(de), fe.complete());
                  },
                  (de) => fe.error(de)
                ).then(null, re.h);
              });
            })(K);
          if ((0, ee.D)(K)) return yt(K);
          if ((0, Ie.T)(K))
            return (function Fe(K) {
              return new le.y((fe) => {
                for (const de of K) if ((fe.next(de), fe.closed)) return;
                fe.complete();
              });
            })(K);
          if ((0, _e.L)(K))
            return (function rt(K) {
              return yt((0, _e.Q)(K));
            })(K);
        }
        throw (0, ye.z)(K);
      }
      function yt(K) {
        return new le.y((fe) => {
          (function qe(K, fe) {
            var de, Le, Me, Ee;
            return (0, f.mG)(this, void 0, void 0, function* () {
              try {
                for (de = (0, f.KL)(K); !(Le = yield de.next()).done; )
                  if ((fe.next(Le.value), fe.closed)) return;
              } catch (Ke) {
                Me = { error: Ke };
              } finally {
                try {
                  Le && !Le.done && (Ee = de.return) && (yield Ee.call(de));
                } finally {
                  if (Me) throw Me.error;
                }
              }
              fe.complete();
            });
          })(K, fe).catch((de) => fe.error(de));
        });
      }
    },
    3019: ($e, pe, R) => {
      R.d(pe, { T: () => ee });
      var f = R(7537),
        G = R(4829),
        N = R(6232),
        le = R(9940),
        J = R(7715);
      function ee(...ye) {
        const Ie = (0, le.yG)(ye),
          _e = (0, le._6)(ye, 1 / 0),
          ie = ye;
        return ie.length
          ? 1 === ie.length
            ? (0, G.Xf)(ie[0])
            : (0, f.J)(_e)((0, J.D)(ie, Ie))
          : N.E;
      }
    },
    2096: ($e, pe, R) => {
      R.d(pe, { of: () => N });
      var f = R(9940),
        G = R(7715);
      function N(...le) {
        const J = (0, f.yG)(le);
        return (0, G.D)(le, J);
      }
    },
    8251: ($e, pe, R) => {
      R.d(pe, { x: () => G });
      var f = R(305);
      function G(le, J, ee, ye, Ie) {
        return new N(le, J, ee, ye, Ie);
      }
      class N extends f.Lv {
        constructor(J, ee, ye, Ie, _e, ie) {
          super(J),
            (this.onFinalize = _e),
            (this.shouldUnsubscribe = ie),
            (this._next = ee
              ? function (re) {
                  try {
                    ee(re);
                  } catch (Ce) {
                    J.error(Ce);
                  }
                }
              : super._next),
            (this._error = Ie
              ? function (re) {
                  try {
                    Ie(re);
                  } catch (Ce) {
                    J.error(Ce);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = ye
              ? function () {
                  try {
                    ye();
                  } catch (re) {
                    J.error(re);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var J;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: ee } = this;
            super.unsubscribe(),
              !ee &&
                (null === (J = this.onFinalize) ||
                  void 0 === J ||
                  J.call(this));
          }
        }
      }
    },
    3572: ($e, pe, R) => {
      R.d(pe, { d: () => N });
      var f = R(9360),
        G = R(8251);
      function N(le) {
        return (0, f.e)((J, ee) => {
          let ye = !1;
          J.subscribe(
            (0, G.x)(
              ee,
              (Ie) => {
                (ye = !0), ee.next(Ie);
              },
              () => {
                ye || ee.next(le), ee.complete();
              }
            )
          );
        });
      }
    },
    2181: ($e, pe, R) => {
      R.d(pe, { h: () => N });
      var f = R(9360),
        G = R(8251);
      function N(le, J) {
        return (0, f.e)((ee, ye) => {
          let Ie = 0;
          ee.subscribe(
            (0, G.x)(ye, (_e) => le.call(J, _e, Ie++) && ye.next(_e))
          );
        });
      }
    },
    1374: ($e, pe, R) => {
      R.d(pe, { P: () => ye });
      var f = R(6973),
        G = R(2181),
        N = R(8180),
        le = R(3572),
        J = R(3026),
        ee = R(2737);
      function ye(Ie, _e) {
        const ie = arguments.length >= 2;
        return (re) =>
          re.pipe(
            Ie ? (0, G.h)((Ce, Be) => Ie(Ce, Be, re)) : ee.y,
            (0, N.q)(1),
            ie ? (0, le.d)(_e) : (0, J.T)(() => new f.K())
          );
      }
    },
    7398: ($e, pe, R) => {
      R.d(pe, { U: () => N });
      var f = R(9360),
        G = R(8251);
      function N(le, J) {
        return (0, f.e)((ee, ye) => {
          let Ie = 0;
          ee.subscribe(
            (0, G.x)(ye, (_e) => {
              ye.next(le.call(J, _e, Ie++));
            })
          );
        });
      }
    },
    975: ($e, pe, R) => {
      R.d(pe, { h: () => G });
      var f = R(7398);
      function G(N) {
        return (0, f.U)(() => N);
      }
    },
    7537: ($e, pe, R) => {
      R.d(pe, { J: () => N });
      var f = R(1631),
        G = R(2737);
      function N(le = 1 / 0) {
        return (0, f.z)(G.y, le);
      }
    },
    1631: ($e, pe, R) => {
      R.d(pe, { z: () => Ie });
      var f = R(7398),
        G = R(4829),
        N = R(9360),
        le = R(7103),
        J = R(8251),
        ye = R(4674);
      function Ie(_e, ie, re = 1 / 0) {
        return (0, ye.m)(ie)
          ? Ie(
              (Ce, Be) =>
                (0, f.U)((be, Re) => ie(Ce, be, Be, Re))((0, G.Xf)(_e(Ce, Be))),
              re
            )
          : ("number" == typeof ie && (re = ie),
            (0, N.e)((Ce, Be) =>
              (function ee(_e, ie, re, Ce, Be, be, Re, St) {
                const Fe = [];
                let yt = 0,
                  rt = 0,
                  qe = !1;
                const K = () => {
                    qe && !Fe.length && !yt && ie.complete();
                  },
                  fe = (Le) => (yt < Ce ? de(Le) : Fe.push(Le)),
                  de = (Le) => {
                    be && ie.next(Le), yt++;
                    let Me = !1;
                    (0, G.Xf)(re(Le, rt++)).subscribe(
                      (0, J.x)(
                        ie,
                        (Ee) => {
                          Be?.(Ee), be ? fe(Ee) : ie.next(Ee);
                        },
                        () => {
                          Me = !0;
                        },
                        void 0,
                        () => {
                          if (Me)
                            try {
                              for (yt--; Fe.length && yt < Ce; ) {
                                const Ee = Fe.shift();
                                Re ? (0, le.f)(ie, Re, () => de(Ee)) : de(Ee);
                              }
                              K();
                            } catch (Ee) {
                              ie.error(Ee);
                            }
                        }
                      )
                    );
                  };
                return (
                  _e.subscribe(
                    (0, J.x)(ie, fe, () => {
                      (qe = !0), K();
                    })
                  ),
                  () => {
                    St?.();
                  }
                );
              })(Ce, Be, _e, re)
            ));
      }
    },
    9732: ($e, pe, R) => {
      R.d(pe, { U: () => G });
      var f = R(8251);
      function G(N, le, J, ee, ye) {
        return (Ie, _e) => {
          let ie = J,
            re = le,
            Ce = 0;
          Ie.subscribe(
            (0, f.x)(
              _e,
              (Be) => {
                const be = Ce++;
                (re = ie ? N(re, Be, be) : ((ie = !0), Be)), ee && _e.next(re);
              },
              ye &&
                (() => {
                  ie && _e.next(re), _e.complete();
                })
            )
          );
        };
      }
    },
    4664: ($e, pe, R) => {
      R.d(pe, { w: () => le });
      var f = R(4829),
        G = R(9360),
        N = R(8251);
      function le(J, ee) {
        return (0, G.e)((ye, Ie) => {
          let _e = null,
            ie = 0,
            re = !1;
          const Ce = () => re && !_e && Ie.complete();
          ye.subscribe(
            (0, N.x)(
              Ie,
              (Be) => {
                _e?.unsubscribe();
                let be = 0;
                const Re = ie++;
                (0, f.Xf)(J(Be, Re)).subscribe(
                  (_e = (0, N.x)(
                    Ie,
                    (St) => Ie.next(ee ? ee(Be, St, Re, be++) : St),
                    () => {
                      (_e = null), Ce();
                    }
                  ))
                );
              },
              () => {
                (re = !0), Ce();
              }
            )
          );
        });
      }
    },
    8180: ($e, pe, R) => {
      R.d(pe, { q: () => le });
      var f = R(6232),
        G = R(9360),
        N = R(8251);
      function le(J) {
        return J <= 0
          ? () => f.E
          : (0, G.e)((ee, ye) => {
              let Ie = 0;
              ee.subscribe(
                (0, N.x)(ye, (_e) => {
                  ++Ie <= J && (ye.next(_e), J <= Ie && ye.complete());
                })
              );
            });
      }
    },
    9397: ($e, pe, R) => {
      R.d(pe, { b: () => J });
      var f = R(4674),
        G = R(9360),
        N = R(8251),
        le = R(2737);
      function J(ee, ye, Ie) {
        const _e =
          (0, f.m)(ee) || ye || Ie ? { next: ee, error: ye, complete: Ie } : ee;
        return _e
          ? (0, G.e)((ie, re) => {
              var Ce;
              null === (Ce = _e.subscribe) || void 0 === Ce || Ce.call(_e);
              let Be = !0;
              ie.subscribe(
                (0, N.x)(
                  re,
                  (be) => {
                    var Re;
                    null === (Re = _e.next) || void 0 === Re || Re.call(_e, be),
                      re.next(be);
                  },
                  () => {
                    var be;
                    (Be = !1),
                      null === (be = _e.complete) ||
                        void 0 === be ||
                        be.call(_e),
                      re.complete();
                  },
                  (be) => {
                    var Re;
                    (Be = !1),
                      null === (Re = _e.error) ||
                        void 0 === Re ||
                        Re.call(_e, be),
                      re.error(be);
                  },
                  () => {
                    var be, Re;
                    Be &&
                      (null === (be = _e.unsubscribe) ||
                        void 0 === be ||
                        be.call(_e)),
                      null === (Re = _e.finalize) ||
                        void 0 === Re ||
                        Re.call(_e);
                  }
                )
              );
            })
          : le.y;
      }
    },
    3026: ($e, pe, R) => {
      R.d(pe, { T: () => le });
      var f = R(6973),
        G = R(9360),
        N = R(8251);
      function le(ee = J) {
        return (0, G.e)((ye, Ie) => {
          let _e = !1;
          ye.subscribe(
            (0, N.x)(
              Ie,
              (ie) => {
                (_e = !0), Ie.next(ie);
              },
              () => (_e ? Ie.complete() : Ie.error(ee()))
            )
          );
        });
      }
      function J() {
        return new f.K();
      }
    },
    7599: ($e, pe, R) => {
      R.d(pe, { z: () => f });
      const f = {
        setTimeout(G, N, ...le) {
          const { delegate: J } = f;
          return J?.setTimeout
            ? J.setTimeout(G, N, ...le)
            : setTimeout(G, N, ...le);
        },
        clearTimeout(G) {
          const { delegate: N } = f;
          return (N?.clearTimeout || clearTimeout)(G);
        },
        delegate: void 0,
      };
    },
    4971: ($e, pe, R) => {
      R.d(pe, { h: () => G });
      const G = (function f() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    4850: ($e, pe, R) => {
      R.d(pe, { L: () => f });
      const f =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    6973: ($e, pe, R) => {
      R.d(pe, { K: () => G });
      const G = (0, R(2306).d)(
        (N) =>
          function () {
            N(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
    },
    9940: ($e, pe, R) => {
      R.d(pe, { _6: () => ee, jO: () => le, yG: () => J });
      var f = R(4674),
        G = R(671);
      function N(ye) {
        return ye[ye.length - 1];
      }
      function le(ye) {
        return (0, f.m)(N(ye)) ? ye.pop() : void 0;
      }
      function J(ye) {
        return (0, G.K)(N(ye)) ? ye.pop() : void 0;
      }
      function ee(ye, Ie) {
        return "number" == typeof N(ye) ? ye.pop() : Ie;
      }
    },
    7453: ($e, pe, R) => {
      R.d(pe, { D: () => J });
      const { isArray: f } = Array,
        { getPrototypeOf: G, prototype: N, keys: le } = Object;
      function J(ye) {
        if (1 === ye.length) {
          const Ie = ye[0];
          if (f(Ie)) return { args: Ie, keys: null };
          if (
            (function ee(ye) {
              return ye && "object" == typeof ye && G(ye) === N;
            })(Ie)
          ) {
            const _e = le(Ie);
            return { args: _e.map((ie) => Ie[ie]), keys: _e };
          }
        }
        return { args: ye, keys: null };
      }
    },
    9039: ($e, pe, R) => {
      function f(G, N) {
        if (G) {
          const le = G.indexOf(N);
          0 <= le && G.splice(le, 1);
        }
      }
      R.d(pe, { P: () => f });
    },
    2306: ($e, pe, R) => {
      function f(G) {
        const le = G((J) => {
          Error.call(J), (J.stack = new Error().stack);
        });
        return (
          (le.prototype = Object.create(Error.prototype)),
          (le.prototype.constructor = le),
          le
        );
      }
      R.d(pe, { d: () => f });
    },
    2714: ($e, pe, R) => {
      function f(G, N) {
        return G.reduce((le, J, ee) => ((le[J] = N[ee]), le), {});
      }
      R.d(pe, { n: () => f });
    },
    1441: ($e, pe, R) => {
      R.d(pe, { O: () => le, x: () => N });
      var f = R(2653);
      let G = null;
      function N(J) {
        if (f.config.useDeprecatedSynchronousErrorHandling) {
          const ee = !G;
          if ((ee && (G = { errorThrown: !1, error: null }), J(), ee)) {
            const { errorThrown: ye, error: Ie } = G;
            if (((G = null), ye)) throw Ie;
          }
        } else J();
      }
      function le(J) {
        f.config.useDeprecatedSynchronousErrorHandling &&
          G &&
          ((G.errorThrown = !0), (G.error = J));
      }
    },
    7103: ($e, pe, R) => {
      function f(G, N, le, J = 0, ee = !1) {
        const ye = N.schedule(function () {
          le(), ee ? G.add(this.schedule(null, J)) : this.unsubscribe();
        }, J);
        if ((G.add(ye), !ee)) return ye;
      }
      R.d(pe, { f: () => f });
    },
    2737: ($e, pe, R) => {
      function f(G) {
        return G;
      }
      R.d(pe, { y: () => f });
    },
    4266: ($e, pe, R) => {
      R.d(pe, { z: () => f });
      const f = (G) =>
        G && "number" == typeof G.length && "function" != typeof G;
    },
    5726: ($e, pe, R) => {
      R.d(pe, { D: () => G });
      var f = R(4674);
      function G(N) {
        return Symbol.asyncIterator && (0, f.m)(N?.[Symbol.asyncIterator]);
      }
    },
    4674: ($e, pe, R) => {
      function f(G) {
        return "function" == typeof G;
      }
      R.d(pe, { m: () => f });
    },
    8382: ($e, pe, R) => {
      R.d(pe, { c: () => N });
      var f = R(4850),
        G = R(4674);
      function N(le) {
        return (0, G.m)(le[f.L]);
      }
    },
    3664: ($e, pe, R) => {
      R.d(pe, { T: () => N });
      var f = R(4971),
        G = R(4674);
      function N(le) {
        return (0, G.m)(le?.[f.h]);
      }
    },
    4026: ($e, pe, R) => {
      R.d(pe, { t: () => G });
      var f = R(4674);
      function G(N) {
        return (0, f.m)(N?.then);
      }
    },
    541: ($e, pe, R) => {
      R.d(pe, { L: () => le, Q: () => N });
      var f = R(7582),
        G = R(4674);
      function N(J) {
        return (0, f.FC)(this, arguments, function* () {
          const ye = J.getReader();
          try {
            for (;;) {
              const { value: Ie, done: _e } = yield (0, f.qq)(ye.read());
              if (_e) return yield (0, f.qq)(void 0);
              yield yield (0, f.qq)(Ie);
            }
          } finally {
            ye.releaseLock();
          }
        });
      }
      function le(J) {
        return (0, G.m)(J?.getReader);
      }
    },
    671: ($e, pe, R) => {
      R.d(pe, { K: () => G });
      var f = R(4674);
      function G(N) {
        return N && (0, f.m)(N.schedule);
      }
    },
    9360: ($e, pe, R) => {
      R.d(pe, { A: () => G, e: () => N });
      var f = R(4674);
      function G(le) {
        return (0, f.m)(le?.lift);
      }
      function N(le) {
        return (J) => {
          if (G(J))
            return J.lift(function (ee) {
              try {
                return le(ee, this);
              } catch (ye) {
                this.error(ye);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    7400: ($e, pe, R) => {
      R.d(pe, { Z: () => le });
      var f = R(7398);
      const { isArray: G } = Array;
      function le(J) {
        return (0, f.U)((ee) =>
          (function N(J, ee) {
            return G(ee) ? J(...ee) : J(ee);
          })(J, ee)
        );
      }
    },
    2420: ($e, pe, R) => {
      function f() {}
      R.d(pe, { Z: () => f });
    },
    8407: ($e, pe, R) => {
      R.d(pe, { U: () => N, z: () => G });
      var f = R(2737);
      function G(...le) {
        return N(le);
      }
      function N(le) {
        return 0 === le.length
          ? f.y
          : 1 === le.length
          ? le[0]
          : function (ee) {
              return le.reduce((ye, Ie) => Ie(ye), ee);
            };
      }
    },
    3894: ($e, pe, R) => {
      R.d(pe, { h: () => N });
      var f = R(2653),
        G = R(7599);
      function N(le) {
        G.z.setTimeout(() => {
          const { onUnhandledError: J } = f.config;
          if (!J) throw le;
          J(le);
        });
      }
    },
    9853: ($e, pe, R) => {
      function f(G) {
        return new TypeError(
          `You provided ${
            null !== G && "object" == typeof G ? "an invalid object" : `'${G}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      R.d(pe, { z: () => f });
    },
    6825: ($e, pe, R) => {
      R.d(pe, {
        LC: () => G,
        SB: () => _e,
        X$: () => le,
        ZE: () => yt,
        ZN: () => Fe,
        _j: () => f,
        eR: () => re,
        jt: () => J,
        k1: () => rt,
        l3: () => N,
        oB: () => Ie,
        vP: () => ye,
      });
      class f {}
      class G {}
      const N = "*";
      function le(qe, K) {
        return { type: 7, name: qe, definitions: K, options: {} };
      }
      function J(qe, K = null) {
        return { type: 4, styles: K, timings: qe };
      }
      function ye(qe, K = null) {
        return { type: 2, steps: qe, options: K };
      }
      function Ie(qe) {
        return { type: 6, styles: qe, offset: null };
      }
      function _e(qe, K, fe) {
        return { type: 0, name: qe, styles: K, options: fe };
      }
      function re(qe, K, fe = null) {
        return { type: 1, expr: qe, animation: K, options: fe };
      }
      class Fe {
        constructor(K = 0, fe = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = K + fe);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((K) => K()),
            (this._onDoneFns = []));
        }
        onStart(K) {
          this._originalOnStartFns.push(K), this._onStartFns.push(K);
        }
        onDone(K) {
          this._originalOnDoneFns.push(K), this._onDoneFns.push(K);
        }
        onDestroy(K) {
          this._onDestroyFns.push(K);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          queueMicrotask(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((K) => K()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((K) => K()),
            (this._onDestroyFns = []));
        }
        reset() {
          (this._started = !1),
            (this._finished = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        setPosition(K) {
          this._position = this.totalTime ? K * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(K) {
          const fe = "start" == K ? this._onStartFns : this._onDoneFns;
          fe.forEach((de) => de()), (fe.length = 0);
        }
      }
      class yt {
        constructor(K) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = K);
          let fe = 0,
            de = 0,
            Le = 0;
          const Me = this.players.length;
          0 == Me
            ? queueMicrotask(() => this._onFinish())
            : this.players.forEach((Ee) => {
                Ee.onDone(() => {
                  ++fe == Me && this._onFinish();
                }),
                  Ee.onDestroy(() => {
                    ++de == Me && this._onDestroy();
                  }),
                  Ee.onStart(() => {
                    ++Le == Me && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (Ee, Ke) => Math.max(Ee, Ke.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((K) => K()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((K) => K.init());
        }
        onStart(K) {
          this._onStartFns.push(K);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((K) => K()),
            (this._onStartFns = []));
        }
        onDone(K) {
          this._onDoneFns.push(K);
        }
        onDestroy(K) {
          this._onDestroyFns.push(K);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((K) => K.play());
        }
        pause() {
          this.players.forEach((K) => K.pause());
        }
        restart() {
          this.players.forEach((K) => K.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((K) => K.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((K) => K.destroy()),
            this._onDestroyFns.forEach((K) => K()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((K) => K.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(K) {
          const fe = K * this.totalTime;
          this.players.forEach((de) => {
            const Le = de.totalTime ? Math.min(1, fe / de.totalTime) : 1;
            de.setPosition(Le);
          });
        }
        getPosition() {
          const K = this.players.reduce(
            (fe, de) => (null === fe || de.totalTime > fe.totalTime ? de : fe),
            null
          );
          return null != K ? K.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((K) => {
            K.beforeDestroy && K.beforeDestroy();
          });
        }
        triggerCallback(K) {
          const fe = "start" == K ? this._onStartFns : this._onDoneFns;
          fe.forEach((de) => de()), (fe.length = 0);
        }
      }
      const rt = "!";
    },
    6814: ($e, pe, R) => {
      R.d(pe, {
        Do: () => St,
        EM: () => tt,
        HT: () => le,
        JF: () => Ut,
        K0: () => ee,
        Mx: () => Mn,
        NF: () => Jt,
        O5: () => sr,
        PC: () => vn,
        PM: () => Fr,
        S$: () => Be,
        V_: () => Ie,
        Ye: () => Fe,
        b0: () => Re,
        bD: () => Je,
        ez: () => Ae,
        mk: () => Ir,
        q: () => N,
        sg: () => Or,
        tP: () => Nr,
        w_: () => J,
      });
      var f = R(4769);
      let G = null;
      function N() {
        return G;
      }
      function le(d) {
        G || (G = d);
      }
      class J {}
      const ee = new f.OlP("DocumentToken");
      let ye = (() => {
        class d {
          historyGo(y) {
            throw new Error("Not implemented");
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: d,
            factory: function () {
              return (0, f.f3M)(_e);
            },
            providedIn: "platform",
          }));
        }
        return d;
      })();
      const Ie = new f.OlP("Location Initialized");
      let _e = (() => {
        class d extends ye {
          constructor() {
            super(),
              (this._doc = (0, f.f3M)(ee)),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return N().getBaseHref(this._doc);
          }
          onPopState(y) {
            const E = N().getGlobalEventTarget(this._doc, "window");
            return (
              E.addEventListener("popstate", y, !1),
              () => E.removeEventListener("popstate", y)
            );
          }
          onHashChange(y) {
            const E = N().getGlobalEventTarget(this._doc, "window");
            return (
              E.addEventListener("hashchange", y, !1),
              () => E.removeEventListener("hashchange", y)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(y) {
            this._location.pathname = y;
          }
          pushState(y, E, x) {
            this._history.pushState(y, E, x);
          }
          replaceState(y, E, x) {
            this._history.replaceState(y, E, x);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(y = 0) {
            this._history.go(y);
          }
          getState() {
            return this._history.state;
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: d,
            factory: function () {
              return new d();
            },
            providedIn: "platform",
          }));
        }
        return d;
      })();
      function ie(d, M) {
        if (0 == d.length) return M;
        if (0 == M.length) return d;
        let y = 0;
        return (
          d.endsWith("/") && y++,
          M.startsWith("/") && y++,
          2 == y ? d + M.substring(1) : 1 == y ? d + M : d + "/" + M
        );
      }
      function re(d) {
        const M = d.match(/#|\?|$/),
          y = (M && M.index) || d.length;
        return d.slice(0, y - ("/" === d[y - 1] ? 1 : 0)) + d.slice(y);
      }
      function Ce(d) {
        return d && "?" !== d[0] ? "?" + d : d;
      }
      let Be = (() => {
        class d {
          historyGo(y) {
            throw new Error("Not implemented");
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: d,
            factory: function () {
              return (0, f.f3M)(Re);
            },
            providedIn: "root",
          }));
        }
        return d;
      })();
      const be = new f.OlP("appBaseHref");
      let Re = (() => {
          class d extends Be {
            constructor(y, E) {
              super(),
                (this._platformLocation = y),
                (this._removeListenerFns = []),
                (this._baseHref =
                  E ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, f.f3M)(ee).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(y) {
              return ie(this._baseHref, y);
            }
            path(y = !1) {
              const E =
                  this._platformLocation.pathname +
                  Ce(this._platformLocation.search),
                x = this._platformLocation.hash;
              return x && y ? `${E}${x}` : E;
            }
            pushState(y, E, x, Z) {
              const oe = this.prepareExternalUrl(x + Ce(Z));
              this._platformLocation.pushState(y, E, oe);
            }
            replaceState(y, E, x, Z) {
              const oe = this.prepareExternalUrl(x + Ce(Z));
              this._platformLocation.replaceState(y, E, oe);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(y = 0) {
              this._platformLocation.historyGo?.(y);
            }
            static #e = (this.ɵfac = function (E) {
              return new (E || d)(f.LFG(ye), f.LFG(be, 8));
            });
            static #t = (this.ɵprov = f.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            }));
          }
          return d;
        })(),
        St = (() => {
          class d extends Be {
            constructor(y, E) {
              super(),
                (this._platformLocation = y),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != E && (this._baseHref = E);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(y = !1) {
              let E = this._platformLocation.hash;
              return null == E && (E = "#"), E.length > 0 ? E.substring(1) : E;
            }
            prepareExternalUrl(y) {
              const E = ie(this._baseHref, y);
              return E.length > 0 ? "#" + E : E;
            }
            pushState(y, E, x, Z) {
              let oe = this.prepareExternalUrl(x + Ce(Z));
              0 == oe.length && (oe = this._platformLocation.pathname),
                this._platformLocation.pushState(y, E, oe);
            }
            replaceState(y, E, x, Z) {
              let oe = this.prepareExternalUrl(x + Ce(Z));
              0 == oe.length && (oe = this._platformLocation.pathname),
                this._platformLocation.replaceState(y, E, oe);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(y = 0) {
              this._platformLocation.historyGo?.(y);
            }
            static #e = (this.ɵfac = function (E) {
              return new (E || d)(f.LFG(ye), f.LFG(be, 8));
            });
            static #t = (this.ɵprov = f.Yz7({ token: d, factory: d.ɵfac }));
          }
          return d;
        })(),
        Fe = (() => {
          class d {
            constructor(y) {
              (this._subject = new f.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = y);
              const E = this._locationStrategy.getBaseHref();
              (this._basePath = (function K(d) {
                if (new RegExp("^(https?:)?//").test(d)) {
                  const [, y] = d.split(/\/\/[^\/]+/);
                  return y;
                }
                return d;
              })(re(qe(E)))),
                this._locationStrategy.onPopState((x) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: x.state,
                    type: x.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(y = !1) {
              return this.normalize(this._locationStrategy.path(y));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(y, E = "") {
              return this.path() == this.normalize(y + Ce(E));
            }
            normalize(y) {
              return d.stripTrailingSlash(
                (function rt(d, M) {
                  if (!d || !M.startsWith(d)) return M;
                  const y = M.substring(d.length);
                  return "" === y || ["/", ";", "?", "#"].includes(y[0])
                    ? y
                    : M;
                })(this._basePath, qe(y))
              );
            }
            prepareExternalUrl(y) {
              return (
                y && "/" !== y[0] && (y = "/" + y),
                this._locationStrategy.prepareExternalUrl(y)
              );
            }
            go(y, E = "", x = null) {
              this._locationStrategy.pushState(x, "", y, E),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Ce(E)),
                  x
                );
            }
            replaceState(y, E = "", x = null) {
              this._locationStrategy.replaceState(x, "", y, E),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Ce(E)),
                  x
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(y = 0) {
              this._locationStrategy.historyGo?.(y);
            }
            onUrlChange(y) {
              return (
                this._urlChangeListeners.push(y),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((E) => {
                    this._notifyUrlChangeListeners(E.url, E.state);
                  })),
                () => {
                  const E = this._urlChangeListeners.indexOf(y);
                  this._urlChangeListeners.splice(E, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(y = "", E) {
              this._urlChangeListeners.forEach((x) => x(y, E));
            }
            subscribe(y, E, x) {
              return this._subject.subscribe({
                next: y,
                error: E,
                complete: x,
              });
            }
            static #e = (this.normalizeQueryParams = Ce);
            static #t = (this.joinWithSlash = ie);
            static #n = (this.stripTrailingSlash = re);
            static #r = (this.ɵfac = function (E) {
              return new (E || d)(f.LFG(Be));
            });
            static #i = (this.ɵprov = f.Yz7({
              token: d,
              factory: function () {
                return (function yt() {
                  return new Fe((0, f.LFG)(Be));
                })();
              },
              providedIn: "root",
            }));
          }
          return d;
        })();
      function qe(d) {
        return d.replace(/\/index.html$/, "");
      }
      function Mn(d, M) {
        M = encodeURIComponent(M);
        for (const y of d.split(";")) {
          const E = y.indexOf("="),
            [x, Z] = -1 == E ? [y, ""] : [y.slice(0, E), y.slice(E + 1)];
          if (x.trim() === M) return decodeURIComponent(Z);
        }
        return null;
      }
      const pt = /\s+/,
        pi = [];
      let Ir = (() => {
        class d {
          constructor(y, E, x, Z) {
            (this._iterableDiffers = y),
              (this._keyValueDiffers = E),
              (this._ngEl = x),
              (this._renderer = Z),
              (this.initialClasses = pi),
              (this.stateMap = new Map());
          }
          set klass(y) {
            this.initialClasses = null != y ? y.trim().split(pt) : pi;
          }
          set ngClass(y) {
            this.rawClass = "string" == typeof y ? y.trim().split(pt) : y;
          }
          ngDoCheck() {
            for (const E of this.initialClasses) this._updateState(E, !0);
            const y = this.rawClass;
            if (Array.isArray(y) || y instanceof Set)
              for (const E of y) this._updateState(E, !0);
            else if (null != y)
              for (const E of Object.keys(y)) this._updateState(E, !!y[E]);
            this._applyStateDiff();
          }
          _updateState(y, E) {
            const x = this.stateMap.get(y);
            void 0 !== x
              ? (x.enabled !== E && ((x.changed = !0), (x.enabled = E)),
                (x.touched = !0))
              : this.stateMap.set(y, { enabled: E, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const y of this.stateMap) {
              const E = y[0],
                x = y[1];
              x.changed
                ? (this._toggleClass(E, x.enabled), (x.changed = !1))
                : x.touched ||
                  (x.enabled && this._toggleClass(E, !1),
                  this.stateMap.delete(E)),
                (x.touched = !1);
            }
          }
          _toggleClass(y, E) {
            (y = y.trim()).length > 0 &&
              y.split(pt).forEach((x) => {
                E
                  ? this._renderer.addClass(this._ngEl.nativeElement, x)
                  : this._renderer.removeClass(this._ngEl.nativeElement, x);
              });
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)(
              f.Y36(f.ZZ4),
              f.Y36(f.aQg),
              f.Y36(f.SBq),
              f.Y36(f.Qsj)
            );
          });
          static #t = (this.ɵdir = f.lG2({
            type: d,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            standalone: !0,
          }));
        }
        return d;
      })();
      class vr {
        constructor(M, y, E, x) {
          (this.$implicit = M),
            (this.ngForOf = y),
            (this.index = E),
            (this.count = x);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Or = (() => {
        class d {
          set ngForOf(y) {
            (this._ngForOf = y), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(y, E, x) {
            (this._viewContainer = y),
              (this._template = E),
              (this._differs = x),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              !this._differ &&
                y &&
                (this._differ = this._differs
                  .find(y)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const E = this._viewContainer;
            y.forEachOperation((x, Z, oe) => {
              if (null == x.previousIndex)
                E.createEmbeddedView(
                  this._template,
                  new vr(x.item, this._ngForOf, -1, -1),
                  null === oe ? void 0 : oe
                );
              else if (null == oe) E.remove(null === Z ? void 0 : Z);
              else if (null !== Z) {
                const xe = E.get(Z);
                E.move(xe, oe), gi(xe, x);
              }
            });
            for (let x = 0, Z = E.length; x < Z; x++) {
              const xe = E.get(x).context;
              (xe.index = x), (xe.count = Z), (xe.ngForOf = this._ngForOf);
            }
            y.forEachIdentityChange((x) => {
              gi(E.get(x.currentIndex), x);
            });
          }
          static ngTemplateContextGuard(y, E) {
            return !0;
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)(f.Y36(f.s_b), f.Y36(f.Rgc), f.Y36(f.ZZ4));
          });
          static #t = (this.ɵdir = f.lG2({
            type: d,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          }));
        }
        return d;
      })();
      function gi(d, M) {
        d.context.$implicit = M.item;
      }
      let sr = (() => {
        class d {
          constructor(y, E) {
            (this._viewContainer = y),
              (this._context = new uo()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = E);
          }
          set ngIf(y) {
            (this._context.$implicit = this._context.ngIf = y),
              this._updateView();
          }
          set ngIfThen(y) {
            Ii("ngIfThen", y),
              (this._thenTemplateRef = y),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(y) {
            Ii("ngIfElse", y),
              (this._elseTemplateRef = y),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(y, E) {
            return !0;
          }
          static #e = (this.ɵfac = function (E) {
            return new (E || d)(f.Y36(f.s_b), f.Y36(f.Rgc));
          });
          static #t = (this.ɵdir = f.lG2({
            type: d,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          }));
        }
        return d;
      })();
      class uo {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ii(d, M) {
        if (M && !M.createEmbeddedView)
          throw new Error(
            `${d} must be a TemplateRef, but received '${(0, f.AaK)(M)}'.`
          );
      }
      let vn = (() => {
          class d {
            constructor(y, E, x) {
              (this._ngEl = y),
                (this._differs = E),
                (this._renderer = x),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(y) {
              (this._ngStyle = y),
                !this._differ &&
                  y &&
                  (this._differ = this._differs.find(y).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const y = this._differ.diff(this._ngStyle);
                y && this._applyChanges(y);
              }
            }
            _setStyle(y, E) {
              const [x, Z] = y.split("."),
                oe = -1 === x.indexOf("-") ? void 0 : f.JOm.DashCase;
              null != E
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    x,
                    Z ? `${E}${Z}` : E,
                    oe
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, x, oe);
            }
            _applyChanges(y) {
              y.forEachRemovedItem((E) => this._setStyle(E.key, null)),
                y.forEachAddedItem((E) =>
                  this._setStyle(E.key, E.currentValue)
                ),
                y.forEachChangedItem((E) =>
                  this._setStyle(E.key, E.currentValue)
                );
            }
            static #e = (this.ɵfac = function (E) {
              return new (E || d)(f.Y36(f.SBq), f.Y36(f.aQg), f.Y36(f.Qsj));
            });
            static #t = (this.ɵdir = f.lG2({
              type: d,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
              standalone: !0,
            }));
          }
          return d;
        })(),
        Nr = (() => {
          class d {
            constructor(y) {
              (this._viewContainerRef = y),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(y) {
              if (y.ngTemplateOutlet || y.ngTemplateOutletInjector) {
                const E = this._viewContainerRef;
                if (
                  (this._viewRef && E.remove(E.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: x,
                    ngTemplateOutletContext: Z,
                    ngTemplateOutletInjector: oe,
                  } = this;
                  this._viewRef = E.createEmbeddedView(
                    x,
                    Z,
                    oe ? { injector: oe } : void 0
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  y.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
            static #e = (this.ɵfac = function (E) {
              return new (E || d)(f.Y36(f.s_b));
            });
            static #t = (this.ɵdir = f.lG2({
              type: d,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector",
              },
              standalone: !0,
              features: [f.TTD],
            }));
          }
          return d;
        })(),
        Ae = (() => {
          class d {
            static #e = (this.ɵfac = function (E) {
              return new (E || d)();
            });
            static #t = (this.ɵmod = f.oAB({ type: d }));
            static #n = (this.ɵinj = f.cJS({}));
          }
          return d;
        })();
      const Je = "browser",
        Pt = "server";
      function Jt(d) {
        return d === Je;
      }
      function Fr(d) {
        return d === Pt;
      }
      let tt = (() => {
        class d {
          static #e = (this.ɵprov = (0, f.Yz7)({
            token: d,
            providedIn: "root",
            factory: () => new bn((0, f.LFG)(ee), window),
          }));
        }
        return d;
      })();
      class bn {
        constructor(M, y) {
          (this.document = M), (this.window = y), (this.offset = () => [0, 0]);
        }
        setOffset(M) {
          this.offset = Array.isArray(M) ? () => M : M;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(M) {
          this.supportsScrolling() && this.window.scrollTo(M[0], M[1]);
        }
        scrollToAnchor(M) {
          if (!this.supportsScrolling()) return;
          const y = (function Ri(d, M) {
            const y = d.getElementById(M) || d.getElementsByName(M)[0];
            if (y) return y;
            if (
              "function" == typeof d.createTreeWalker &&
              d.body &&
              "function" == typeof d.body.attachShadow
            ) {
              const E = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT);
              let x = E.currentNode;
              for (; x; ) {
                const Z = x.shadowRoot;
                if (Z) {
                  const oe =
                    Z.getElementById(M) || Z.querySelector(`[name="${M}"]`);
                  if (oe) return oe;
                }
                x = E.nextNode();
              }
            }
            return null;
          })(this.document, M);
          y && (this.scrollToElement(y), y.focus());
        }
        setHistoryScrollRestoration(M) {
          this.supportsScrolling() &&
            (this.window.history.scrollRestoration = M);
        }
        scrollToElement(M) {
          const y = M.getBoundingClientRect(),
            E = y.left + this.window.pageXOffset,
            x = y.top + this.window.pageYOffset,
            Z = this.offset();
          this.window.scrollTo(E - Z[0], x - Z[1]);
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      class Ut {}
    },
    4769: ($e, pe, R) => {
      R.d(pe, {
        QbO: () => tD,
        tb: () => Td,
        AFp: () => mh,
        ip1: () => py,
        hGG: () => wb,
        z2F: () => Gs,
        Ojb: () => nD,
        sBO: () => ab,
        Sil: () => IM,
        EJc: () => bM,
        Xts: () => ga,
        SBq: () => va,
        lqb: () => vo,
        qLn: () => Uo,
        vpe: () => _o,
        XFs: () => Xe,
        OlP: () => zt,
        zs3: () => ro,
        ZZ4: () => xd,
        aQg: () => Ld,
        soG: () => ol,
        YKP: () => mm,
        h0i: () => is,
        PXZ: () => XM,
        R0b: () => pr,
        FiY: () => ou,
        Lbi: () => sc,
        g9A: () => yh,
        Qsj: () => yD,
        FYo: () => wh,
        JOm: () => hu,
        tp0: () => su,
        Rgc: () => La,
        dDg: () => ZM,
        eoX: () => Ey,
        GfV: () => Mh,
        s_b: () => rl,
        ifc: () => Ln,
        VuI: () => Fb,
        MMx: () => vm,
        Lck: () => cw,
        eFA: () => Sy,
        Gpc: () => fe,
        f3M: () => bt,
        X6Q: () => sb,
        $WT: () => _n,
        _c5: () => Eb,
        qFp: () => Lb,
        rg0: () => ze,
        c2e: () => gy,
        zSh: () => nc,
        HDt: () => my,
        wAp: () => Us,
        vHH: () => he,
        lri: () => Dy,
        rWj: () => Cy,
        cg1: () => nd,
        kL8: () => Ug,
        dqk: () => It,
        Z0I: () => gr,
        eJc: () => _d,
        QGY: () => qc,
        F4k: () => zp,
        RDi: () => w_,
        AaK: () => rt,
        qOj: () => Lc,
        Xq5: () => Mp,
        TTD: () => Ei,
        _Bn: () => gm,
        jDz: () => _m,
        xp6: () => Yh,
        uIk: () => Vc,
        ekj: () => Jc,
        Suo: () => qm,
        Xpm: () => Ti,
        lG2: () => Pi,
        Yz7: () => ct,
        cJS: () => on,
        oAB: () => Wi,
        Yjl: () => Pr,
        Y36: () => Is,
        _UZ: () => Wc,
        BQk: () => Zu,
        ynx: () => qu,
        qZA: () => Wu,
        TgZ: () => Gu,
        EpF: () => $p,
        n5z: () => af,
        LFG: () => sn,
        $8M: () => Al,
        $Z: () => Qh,
        NdJ: () => Zc,
        CRH: () => Zm,
        oxw: () => Yp,
        Q6J: () => zc,
        VKq: () => Sm,
        WLB: () => Am,
        l5B: () => Im,
        qbA: () => Tm,
        iGM: () => Wm,
        KtG: () => Qs,
        evT: () => Lh,
        CHM: () => ml,
        oJD: () => ih,
        P3R: () => ah,
        YNc: () => kp,
        _uU: () => _g,
      });
      var f = R(8645),
        G = R(7394),
        N = R(5592),
        le = R(3019),
        J = R(5619),
        ee = R(2096),
        ye = R(4829),
        Ie = R(305),
        _e = R(9360);
      function ie(e = {}) {
        const {
          connector: t = () => new f.x(),
          resetOnError: n = !0,
          resetOnComplete: r = !0,
          resetOnRefCountZero: i = !0,
        } = e;
        return (o) => {
          let s,
            l,
            p,
            D = 0,
            I = !1,
            F = !1;
          const U = () => {
              l?.unsubscribe(), (l = void 0);
            },
            $ = () => {
              U(), (s = p = void 0), (I = F = !1);
            },
            ue = () => {
              const De = s;
              $(), De?.unsubscribe();
            };
          return (0, _e.e)((De, Te) => {
            D++, !F && !I && U();
            const He = (p = p ?? t());
            Te.add(() => {
              D--, 0 === D && !F && !I && (l = re(ue, i));
            }),
              He.subscribe(Te),
              !s &&
                D > 0 &&
                ((s = new Ie.Hp({
                  next: (ge) => He.next(ge),
                  error: (ge) => {
                    (F = !0), U(), (l = re($, n, ge)), He.error(ge);
                  },
                  complete: () => {
                    (I = !0), U(), (l = re($, r)), He.complete();
                  },
                })),
                (0, ye.Xf)(De).subscribe(s));
          })(o);
        };
      }
      function re(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new Ie.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return (0, ye.Xf)(t(...n)).subscribe(r);
      }
      var Ce = R(4664),
        Be = R(2737),
        be = R(8251);
      function St(e, t) {
        return e === t;
      }
      function Fe(e) {
        for (let t in e) if (e[t] === Fe) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function yt(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function rt(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(rt).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function qe(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const K = Fe({ __forward_ref__: Fe });
      function fe(e) {
        return (
          (e.__forward_ref__ = fe),
          (e.toString = function () {
            return rt(this());
          }),
          e
        );
      }
      function de(e) {
        return Le(e) ? e() : e;
      }
      function Le(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(K) &&
          e.__forward_ref__ === fe
        );
      }
      function Me(e) {
        return e && !!e.ɵproviders;
      }
      const Ke = "https://g.co/ng/security#xss";
      class he extends Error {
        constructor(t, n) {
          super(
            (function jt(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function ke(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Nn(e, t) {
        throw new he(-201, !1);
      }
      function vt(e, t) {
        null == e &&
          (function Ve(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function ct(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function on(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Tn(e) {
        return kt(e, Cn) || kt(e, Pn);
      }
      function gr(e) {
        return null !== Tn(e);
      }
      function kt(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function at(e) {
        return e && (e.hasOwnProperty(nr) || e.hasOwnProperty(mr))
          ? e[nr]
          : null;
      }
      const Cn = Fe({ ɵprov: Fe }),
        nr = Fe({ ɵinj: Fe }),
        Pn = Fe({ ngInjectableDef: Fe }),
        mr = Fe({ ngInjectorDef: Fe });
      var Xe = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })(Xe || {});
      let li;
      function En(e) {
        const t = li;
        return (li = e), t;
      }
      function Tt(e, t, n) {
        const r = Tn(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Xe.Optional
          ? null
          : void 0 !== t
          ? t
          : void Nn(rt(e));
      }
      const It = globalThis,
        k = {},
        H = "__NG_DI_FLAG__",
        ae = "ngTempTokenPath",
        Ze = /\n/gm,
        Ot = "__source";
      let Nt;
      function wn(e) {
        const t = Nt;
        return (Nt = e), t;
      }
      function Wn(e, t = Xe.Default) {
        if (void 0 === Nt) throw new he(-203, !1);
        return null === Nt
          ? Tt(e, void 0, t)
          : Nt.get(e, t & Xe.Optional ? null : void 0, t);
      }
      function sn(e, t = Xe.Default) {
        return (
          (function $t() {
            return li;
          })() || Wn
        )(de(e), t);
      }
      function bt(e, t = Xe.Default) {
        return sn(e, qt(t));
      }
      function qt(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Ar(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = de(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new he(900, !1);
            let i,
              o = Xe.Default;
            for (let s = 0; s < r.length; s++) {
              const l = r[s],
                p = so(l);
              "number" == typeof p
                ? -1 === p
                  ? (i = l.token)
                  : (o |= p)
                : (i = l);
            }
            t.push(sn(i, o));
          } else t.push(sn(r));
        }
        return t;
      }
      function fi(e, t) {
        return (e[H] = t), (e.prototype[H] = t), e;
      }
      function so(e) {
        return e[H];
      }
      function or(e) {
        return { toString: e }.toString();
      }
      var hi = (function (e) {
          return (
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
          );
        })(hi || {}),
        Ln = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })(Ln || {});
      const Mn = {},
        pt = [],
        pi = Fe({ ɵcmp: Fe }),
        Ir = Fe({ ɵdir: Fe }),
        Tr = Fe({ ɵpipe: Fe }),
        Xr = Fe({ ɵmod: Fe }),
        vr = Fe({ ɵfac: Fe }),
        Or = Fe({ __NG_ELEMENT_ID__: Fe }),
        gi = Fe({ __NG_ENV_ID__: Fe });
      function Ai(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      function sr(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ("number" == typeof i) {
            if (0 !== i) break;
            r++;
            const o = n[r++],
              s = n[r++],
              l = n[r++];
            e.setAttribute(t, s, l, o);
          } else {
            const o = i,
              s = n[++r];
            Ii(o) ? e.setProperty(t, o, s) : e.setAttribute(t, o, s), r++;
          }
        }
        return r;
      }
      function uo(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Ii(e) {
        return 64 === e.charCodeAt(0);
      }
      function jr(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              "number" == typeof i
                ? (n = i)
                : 0 === n ||
                  _r(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function _r(e, t, n, r, i) {
        let o = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; o < e.length; ) {
            const l = e[o++];
            if ("number" == typeof l) {
              if (l === t) {
                s = -1;
                break;
              }
              if (l > t) {
                s = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const l = e[o];
          if ("number" == typeof l) break;
          if (l === n) {
            if (null === r) return void (null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void (e[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== s && (e.splice(s, 0, t), (o = s + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== i && e.splice(o++, 0, i);
      }
      const mi = "ng-template";
      function $n(e, t, n) {
        let r = 0,
          i = !0;
        for (; r < e.length; ) {
          let o = e[r++];
          if ("string" == typeof o && i) {
            const s = e[r++];
            if (n && "class" === o && -1 !== Ai(s.toLowerCase(), t, 0))
              return !0;
          } else {
            if (1 === o) {
              for (; r < e.length && "string" == typeof (o = e[r++]); )
                if (o.toLowerCase() === t) return !0;
              return !1;
            }
            "number" == typeof o && (i = !1);
          }
        }
        return !1;
      }
      function kn(e) {
        return 4 === e.type && e.value !== mi;
      }
      function Dr(e, t, n) {
        return t === (4 !== e.type || n ? e.value : mi);
      }
      function ar(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          o = (function Lo(e) {
            for (let t = 0; t < e.length; t++) if (uo(e[t])) return t;
            return e.length;
          })(i);
        let s = !1;
        for (let l = 0; l < t.length; l++) {
          const p = t[l];
          if ("number" != typeof p) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== p && !Dr(e, p, n)) || ("" === p && 1 === t.length))
                ) {
                  if (vn(r)) return !1;
                  s = !0;
                }
              } else {
                const D = 8 & r ? p : t[++l];
                if (8 & r && null !== e.attrs) {
                  if (!$n(e.attrs, D, n)) {
                    if (vn(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const F = Nr(8 & r ? "class" : p, i, kn(e), n);
                if (-1 === F) {
                  if (vn(r)) return !1;
                  s = !0;
                  continue;
                }
                if ("" !== D) {
                  let U;
                  U = F > o ? "" : i[F + 1].toLowerCase();
                  const $ = 8 & r ? U : null;
                  if (($ && -1 !== Ai($, D, 0)) || (2 & r && D !== U)) {
                    if (vn(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !vn(r) && !vn(p)) return !1;
            if (s && vn(p)) continue;
            (s = !1), (r = p | (1 & r));
          }
        }
        return vn(r) || s;
      }
      function vn(e) {
        return 0 == (1 & e);
      }
      function Nr(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let o = !1;
          for (; i < t.length; ) {
            const s = t[i];
            if (s === e) return i;
            if (3 === s || 6 === s) o = !0;
            else {
              if (1 === s || 2 === s) {
                let l = t[++i];
                for (; "string" == typeof l; ) l = t[++i];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function lo(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function zi(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (ar(e, t[r], n)) return !0;
        return !1;
      }
      function Jr(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function Gi(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = "",
          o = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ("string" == typeof s)
            if (2 & r) {
              const l = e[++n];
              i += "[" + s + (l.length > 0 ? '="' + l + '"' : "") + "]";
            } else 8 & r ? (i += "." + s) : 4 & r && (i += " " + s);
          else
            "" !== i && !vn(s) && ((t += Jr(o, i)), (i = "")),
              (r = s),
              (o = o || !vn(r));
          n++;
        }
        return "" !== i && (t += Jr(o, i)), t;
      }
      function Ti(e) {
        return or(() => {
          const t = ei(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === hi.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || Ln.Emulated,
              styles: e.styles || pt,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: "",
            };
          qi(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = Rr(r, !1)),
            (n.pipeDefs = Rr(r, !0)),
            (n.id = (function Zi(e) {
              let t = 0;
              const n = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join("|");
              for (const i of n) t = (Math.imul(31, t) + i.charCodeAt(0)) << 0;
              return (t += 2147483648), "c" + t;
            })(n)),
            n
          );
        });
      }
      function So(e) {
        return ft(e) || Xt(e);
      }
      function Oi(e) {
        return null !== e;
      }
      function Wi(e) {
        return or(() => ({
          type: e.type,
          bootstrap: e.bootstrap || pt,
          declarations: e.declarations || pt,
          imports: e.imports || pt,
          exports: e.exports || pt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Ao(e, t) {
        if (null == e) return Mn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = o);
          }
        return n;
      }
      function Pi(e) {
        return or(() => {
          const t = ei(e);
          return qi(t), t;
        });
      }
      function Pr(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function ft(e) {
        return e[pi] || null;
      }
      function Xt(e) {
        return e[Ir] || null;
      }
      function pn(e) {
        return e[Tr] || null;
      }
      function _n(e) {
        const t = ft(e) || Xt(e) || pn(e);
        return null !== t && t.standalone;
      }
      function dn(e, t) {
        const n = e[Xr] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${rt(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function ei(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          inputTransforms: null,
          inputConfig: e.inputs || Mn,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || pt,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Ao(e.inputs, t),
          outputs: Ao(e.outputs),
        };
      }
      function qi(e) {
        e.features?.forEach((t) => t(e));
      }
      function Rr(e, t) {
        if (!e) return null;
        const n = t ? pn : So;
        return () =>
          ("function" == typeof e ? e() : e).map((r) => n(r)).filter(Oi);
      }
      const Wt = 0,
        Ae = 1,
        Je = 2,
        Pt = 3,
        Vn = 4,
        Ur = 5,
        Jt = 6,
        Fr = 7,
        Zt = 8,
        Yn = 9,
        Dn = 10,
        tt = 11,
        bn = 12,
        Ri = 13,
        ti = 14,
        Ut = 15,
        Bn = 16,
        Cr = 17,
        lr = 18,
        Er = 19,
        Fi = 20,
        wr = 21,
        zn = 22,
        Hr = 23,
        Sn = 24,
        ot = 25,
        To = 1,
        Yi = 2,
        cr = 7,
        an = 9,
        un = 11;
      function jn(e) {
        return Array.isArray(e) && "object" == typeof e[To];
      }
      function gn(e) {
        return Array.isArray(e) && !0 === e[To];
      }
      function Ki(e) {
        return 0 != (4 & e.flags);
      }
      function Mr(e) {
        return e.componentOffset > -1;
      }
      function Qi(e) {
        return 1 == (1 & e.flags);
      }
      function dr(e) {
        return !!e.template;
      }
      function $r(e) {
        return 0 != (512 & e[Je]);
      }
      function _(e, t) {
        return e.hasOwnProperty(vr) ? e[vr] : null;
      }
      let V = null,
        W = !1;
      function ne(e) {
        const t = V;
        return (V = e), t;
      }
      const Se = {
        version: 0,
        dirty: !1,
        producerNode: void 0,
        producerLastReadVersion: void 0,
        producerIndexOfThis: void 0,
        nextProducerIndex: 0,
        liveConsumerNode: void 0,
        liveConsumerIndexOfThis: void 0,
        consumerAllowSignalWrites: !1,
        consumerIsAlwaysLive: !1,
        producerMustRecompute: () => !1,
        producerRecomputeValue: () => {},
        consumerMarkedDirty: () => {},
      };
      function _t(e) {
        if (!Kn(e) || e.dirty) {
          if (!e.producerMustRecompute(e) && !fn(e)) return void (e.dirty = !1);
          e.producerRecomputeValue(e), (e.dirty = !1);
        }
      }
      function nt(e) {
        (e.dirty = !0),
          (function ut(e) {
            if (void 0 === e.liveConsumerNode) return;
            const t = W;
            W = !0;
            try {
              for (const n of e.liveConsumerNode) n.dirty || nt(n);
            } finally {
              W = t;
            }
          })(e),
          e.consumerMarkedDirty?.(e);
      }
      function Ht(e) {
        return e && (e.nextProducerIndex = 0), ne(e);
      }
      function en(e, t) {
        if (
          (ne(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (Kn(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
              ni(e.producerNode[n], e.producerIndexOfThis[n]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function fn(e) {
        tn(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (_t(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function On(e) {
        if ((tn(e), Kn(e)))
          for (let t = 0; t < e.producerNode.length; t++)
            ni(e.producerNode[t], e.producerIndexOfThis[t]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
      }
      function ni(e, t) {
        if (
          ((function Wr(e) {
            (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
          })(e),
          tn(e),
          1 === e.liveConsumerNode.length)
        )
          for (let r = 0; r < e.producerNode.length; r++)
            ni(e.producerNode[r], e.producerIndexOfThis[r]);
        const n = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
          (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          t < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[t],
            i = e.liveConsumerNode[t];
          tn(i), (i.producerIndexOfThis[r] = t);
        }
      }
      function Kn(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function tn(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      let zo = null;
      function ze(e) {
        const t = ne(null);
        try {
          return e();
        } finally {
          ne(t);
        }
      }
      const gt = () => {},
        nn = (() => ({
          ...Se,
          consumerIsAlwaysLive: !0,
          consumerAllowSignalWrites: !1,
          consumerMarkedDirty: (e) => {
            e.schedule(e.ref);
          },
          hasRun: !1,
          cleanupFn: gt,
        }))();
      class ri {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Ei() {
        return Lr;
      }
      function Lr(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = to), eo;
      }
      function eo() {
        const e = Go(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === Mn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function to(e, t, n, r) {
        const i = this.declaredInputs[n],
          o =
            Go(e) ||
            (function dl(e, t) {
              return (e[no] = t);
            })(e, { previous: Mn, current: null }),
          s = o.current || (o.current = {}),
          l = o.previous,
          p = l[i];
        (s[i] = new ri(p && p.currentValue, t, l === Mn)), (e[r] = t);
      }
      Ei.ngInherit = !0;
      const no = "__ngSimpleChanges__";
      function Go(e) {
        return e[no] || null;
      }
      const wi = function (e, t, n) {};
      function rn(e) {
        for (; Array.isArray(e); ) e = e[Wt];
        return e;
      }
      function kr(e, t) {
        return rn(t[e.index]);
      }
      function qo(e, t) {
        return e.data[t];
      }
      function qr(e, t) {
        const n = t[e];
        return jn(n) ? n : n[Wt];
      }
      function po(e, t) {
        return null == t ? null : e[t];
      }
      function as(e) {
        e[Cr] = 0;
      }
      function $a(e) {
        1024 & e[Je] || ((e[Je] |= 1024), Ys(e, 1));
      }
      function fl(e) {
        1024 & e[Je] && ((e[Je] &= -1025), Ys(e, -1));
      }
      function Ys(e, t) {
        let n = e[Pt];
        if (null === n) return;
        n[Ur] += t;
        let r = n;
        for (
          n = n[Pt];
          null !== n && ((1 === t && 1 === r[Ur]) || (-1 === t && 0 === r[Ur]));

        )
          (n[Ur] += t), (r = n), (n = n[Pt]);
      }
      const st = {
        lFrame: dt(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      function Wa() {
        return st.bindingsEnabled;
      }
      function ve() {
        return st.lFrame.lView;
      }
      function Ft() {
        return st.lFrame.tView;
      }
      function ml(e) {
        return (st.lFrame.contextLView = e), e[Zt];
      }
      function Qs(e) {
        return (st.lFrame.contextLView = null), e;
      }
      function Qn() {
        let e = Za();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Za() {
        return st.lFrame.currentTNode;
      }
      function ji(e, t) {
        const n = st.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Xs() {
        return st.lFrame.isParent;
      }
      function Js() {
        st.lFrame.isParent = !1;
      }
      function Sr() {
        const e = st.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Yo() {
        return st.lFrame.bindingIndex++;
      }
      function c(e, t) {
        const n = st.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), a(t);
      }
      function a(e) {
        st.lFrame.currentDirectiveIndex = e;
      }
      function C() {
        return st.lFrame.currentQueryIndex;
      }
      function T(e) {
        st.lFrame.currentQueryIndex = e;
      }
      function L(e) {
        const t = e[Ae];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[Jt] : null;
      }
      function Q(e, t, n) {
        if (n & Xe.SkipSelf) {
          let i = t,
            o = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & Xe.Host ||
              ((i = L(o)), null === i || ((o = o[ti]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = o);
        }
        const r = (st.lFrame = Ne());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Y(e) {
        const t = Ne(),
          n = e[Ae];
        (st.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Ne() {
        const e = st.lFrame,
          t = null === e ? null : e.child;
        return null === t ? dt(e) : t;
      }
      function dt(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Kt() {
        const e = st.lFrame;
        return (
          (st.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const xt = Kt;
      function Mi() {
        const e = Kt();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Xn() {
        return st.lFrame.selectedIndex;
      }
      function ii(e) {
        st.lFrame.selectedIndex = e;
      }
      function mn() {
        const e = st.lFrame;
        return qo(e.tView, e.selectedIndex);
      }
      let qd = !0;
      function Ya() {
        return qd;
      }
      function Bo(e) {
        qd = e;
      }
      function Ka(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const o = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: l,
              ngAfterViewInit: p,
              ngAfterViewChecked: D,
              ngOnDestroy: I,
            } = o;
          s && (e.contentHooks ??= []).push(-n, s),
            l &&
              ((e.contentHooks ??= []).push(n, l),
              (e.contentCheckHooks ??= []).push(n, l)),
            p && (e.viewHooks ??= []).push(-n, p),
            D &&
              ((e.viewHooks ??= []).push(n, D),
              (e.viewCheckHooks ??= []).push(n, D)),
            null != I && (e.destroyHooks ??= []).push(n, I);
        }
      }
      function Qa(e, t, n) {
        Zd(e, t, 3, n);
      }
      function Xa(e, t, n, r) {
        (3 & e[Je]) === n && Zd(e, t, n, r);
      }
      function Dl(e, t) {
        let n = e[Je];
        (3 & n) === t && ((n &= 8191), (n += 1), (e[Je] = n));
      }
      function Zd(e, t, n, r) {
        const o = r ?? -1,
          s = t.length - 1;
        let l = 0;
        for (let p = void 0 !== r ? 65535 & e[Cr] : 0; p < s; p++)
          if ("number" == typeof t[p + 1]) {
            if (((l = t[p]), null != r && l >= r)) break;
          } else
            t[p] < 0 && (e[Cr] += 65536),
              (l < o || -1 == o) &&
                (iv(e, n, t, p), (e[Cr] = (4294901760 & e[Cr]) + p + 2)),
              p++;
      }
      function Yd(e, t) {
        wi(4, e, t);
        const n = ne(null);
        try {
          t.call(e);
        } finally {
          ne(n), wi(5, e, t);
        }
      }
      function iv(e, t, n, r) {
        const i = n[r] < 0,
          o = n[r + 1],
          l = e[i ? -n[r] : n[r]];
        i
          ? e[Je] >> 13 < e[Cr] >> 16 &&
            (3 & e[Je]) === t &&
            ((e[Je] += 8192), Yd(l, o))
          : Yd(l, o);
      }
      const us = -1;
      class ta {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function El(e) {
        return e !== us;
      }
      function na(e) {
        return 32767 & e;
      }
      function ra(e, t) {
        let n = (function uv(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[ti]), n--;
        return r;
      }
      let wl = !0;
      function Ja(e) {
        const t = wl;
        return (wl = e), t;
      }
      const Kd = 255,
        Qd = 5;
      let lv = 0;
      const yo = {};
      function eu(e, t) {
        const n = Xd(e, t);
        if (-1 !== n) return n;
        const r = t[Ae];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ml(r.data, e),
          Ml(t, null),
          Ml(r.blueprint, null));
        const i = tu(e, t),
          o = e.injectorIndex;
        if (El(i)) {
          const s = na(i),
            l = ra(i, t),
            p = l[Ae].data;
          for (let D = 0; D < 8; D++) t[o + D] = l[s + D] | p[s + D];
        }
        return (t[o + 8] = i), o;
      }
      function Ml(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Xd(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function tu(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          if (((r = uf(i)), null === r)) return us;
          if ((n++, (i = i[ti]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return us;
      }
      function bl(e, t, n) {
        !(function cv(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Or) && (r = n[Or]),
            null == r && (r = n[Or] = lv++);
          const i = r & Kd;
          t.data[e + (i >> Qd)] |= 1 << i;
        })(e, t, n);
      }
      function Jd(e, t, n) {
        if (n & Xe.Optional || void 0 !== e) return e;
        Nn();
      }
      function ef(e, t, n, r) {
        if (
          (n & Xe.Optional && void 0 === r && (r = null),
          !(n & (Xe.Self | Xe.Host)))
        ) {
          const i = e[Yn],
            o = En(void 0);
          try {
            return i ? i.get(t, r, n & Xe.Optional) : Tt(t, r, n & Xe.Optional);
          } finally {
            En(o);
          }
        }
        return Jd(r, 0, n);
      }
      function tf(e, t, n, r = Xe.Default, i) {
        if (null !== e) {
          if (2048 & t[Je] && !(r & Xe.Self)) {
            const s = (function mv(e, t, n, r, i) {
              let o = e,
                s = t;
              for (
                ;
                null !== o && null !== s && 2048 & s[Je] && !(512 & s[Je]);

              ) {
                const l = nf(o, s, n, r | Xe.Self, yo);
                if (l !== yo) return l;
                let p = o.parent;
                if (!p) {
                  const D = s[Fi];
                  if (D) {
                    const I = D.get(n, yo, r);
                    if (I !== yo) return I;
                  }
                  (p = uf(s)), (s = s[ti]);
                }
                o = p;
              }
              return i;
            })(e, t, n, r, yo);
            if (s !== yo) return s;
          }
          const o = nf(e, t, n, r, yo);
          if (o !== yo) return o;
        }
        return ef(t, n, r, i);
      }
      function nf(e, t, n, r, i) {
        const o = (function hv(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Or) ? e[Or] : void 0;
          return "number" == typeof t ? (t >= 0 ? t & Kd : gv) : t;
        })(n);
        if ("function" == typeof o) {
          if (!Q(t, e, r)) return r & Xe.Host ? Jd(i, 0, r) : ef(t, n, r, i);
          try {
            let s;
            if (((s = o(r)), null != s || r & Xe.Optional)) return s;
            Nn();
          } finally {
            xt();
          }
        } else if ("number" == typeof o) {
          let s = null,
            l = Xd(e, t),
            p = us,
            D = r & Xe.Host ? t[Ut][Jt] : null;
          for (
            (-1 === l || r & Xe.SkipSelf) &&
            ((p = -1 === l ? tu(e, t) : t[l + 8]),
            p !== us && sf(r, !1)
              ? ((s = t[Ae]), (l = na(p)), (t = ra(p, t)))
              : (l = -1));
            -1 !== l;

          ) {
            const I = t[Ae];
            if (rf(o, l, I.data)) {
              const F = fv(l, t, n, s, r, D);
              if (F !== yo) return F;
            }
            (p = t[l + 8]),
              p !== us && sf(r, t[Ae].data[l + 8] === D) && rf(o, l, t)
                ? ((s = I), (l = na(p)), (t = ra(p, t)))
                : (l = -1);
          }
        }
        return i;
      }
      function fv(e, t, n, r, i, o) {
        const s = t[Ae],
          l = s.data[e + 8],
          I = nu(
            l,
            s,
            n,
            null == r ? Mr(l) && wl : r != s && 0 != (3 & l.type),
            i & Xe.Host && o === l
          );
        return null !== I ? Xo(t, s, I, l) : yo;
      }
      function nu(e, t, n, r, i) {
        const o = e.providerIndexes,
          s = t.data,
          l = 1048575 & o,
          p = e.directiveStart,
          I = o >> 20,
          U = i ? l + I : e.directiveEnd;
        for (let $ = r ? l : l + I; $ < U; $++) {
          const ue = s[$];
          if (($ < p && n === ue) || ($ >= p && ue.type === n)) return $;
        }
        if (i) {
          const $ = s[p];
          if ($ && dr($) && $.type === n) return p;
        }
        return null;
      }
      function Xo(e, t, n, r) {
        let i = e[n];
        const o = t.data;
        if (
          (function ov(e) {
            return e instanceof ta;
          })(i)
        ) {
          const s = i;
          s.resolving &&
            (function yn(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new he(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function je(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : ke(e);
              })(o[n])
            );
          const l = Ja(s.canSeeViewProviders);
          s.resolving = !0;
          const D = s.injectImpl ? En(s.injectImpl) : null;
          Q(e, r, Xe.Default);
          try {
            (i = e[n] = s.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function rv(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: o,
                  } = t.type.prototype;
                  if (r) {
                    const s = Lr(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  i && (n.preOrderHooks ??= []).push(0 - e, i),
                    o &&
                      ((n.preOrderHooks ??= []).push(e, o),
                      (n.preOrderCheckHooks ??= []).push(e, o));
                })(n, o[n], t);
          } finally {
            null !== D && En(D), Ja(l), (s.resolving = !1), xt();
          }
        }
        return i;
      }
      function rf(e, t, n) {
        return !!(n[t + (e >> Qd)] & (1 << e));
      }
      function sf(e, t) {
        return !(e & Xe.Self || (e & Xe.Host && t));
      }
      class Zr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return tf(this._tNode, this._lView, t, qt(r), n);
        }
      }
      function gv() {
        return new Zr(Qn(), ve());
      }
      function af(e) {
        return or(() => {
          const t = e.prototype.constructor,
            n = t[vr] || Sl(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const o = i[vr] || Sl(i);
            if (o && o !== n) return o;
            i = Object.getPrototypeOf(i);
          }
          return (o) => new o();
        });
      }
      function Sl(e) {
        return Le(e)
          ? () => {
              const t = Sl(de(e));
              return t && t();
            }
          : _(e);
      }
      function uf(e) {
        const t = e[Ae],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[Jt] : null;
      }
      function Al(e) {
        return (function dv(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const o = n[i];
              if (uo(o)) break;
              if (0 === o) i += 2;
              else if ("number" == typeof o)
                for (i++; i < r && "string" == typeof n[i]; ) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(Qn(), e);
      }
      const cs = "__parameters__";
      function fs(e, t, n) {
        return or(() => {
          const r = (function Il(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...o) {
            if (this instanceof i) return r.apply(this, o), this;
            const s = new i(...o);
            return (l.annotation = s), l;
            function l(p, D, I) {
              const F = p.hasOwnProperty(cs)
                ? p[cs]
                : Object.defineProperty(p, cs, { value: [] })[cs];
              for (; F.length <= I; ) F.push(null);
              return (F[I] = F[I] || []).push(s), p;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      function ps(e, t) {
        e.forEach((n) => (Array.isArray(n) ? ps(n, t) : t(n)));
      }
      function cf(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ru(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function bi(e, t, n) {
        let r = gs(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function wv(e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; )
                    (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Tl(e, t) {
        const n = gs(e, t);
        if (n >= 0) return e[1 | n];
      }
      function gs(e, t) {
        return (function df(e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const o = r + ((i - r) >> 1),
              s = e[o << n];
            if (t === s) return o << n;
            s > t ? (i = o) : (r = o + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const ou = fi(fs("Optional"), 8),
        su = fi(fs("SkipSelf"), 4);
      function du(e) {
        return 128 == (128 & e.flags);
      }
      var hu = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })(hu || {});
      const zv = /^>|^->|<!--|-->|--!>|<!-$/g,
        Gv = /(<|>)/g,
        Wv = "\u200b$1\u200b";
      const Fl = new Map();
      let qv = 0;
      const Ll = "__ngContext__";
      function Vr(e, t) {
        jn(t)
          ? ((e[Ll] = t[Er]),
            (function Yv(e) {
              Fl.set(e[Er], e);
            })(t))
          : (e[Ll] = t);
      }
      let kl;
      function Vl(e, t) {
        return kl(e, t);
      }
      function la(e) {
        const t = e[Pt];
        return gn(t) ? t[Pt] : t;
      }
      function Nf(e) {
        return Rf(e[bn]);
      }
      function Pf(e) {
        return Rf(e[Vn]);
      }
      function Rf(e) {
        for (; null !== e && !gn(e); ) e = e[Vn];
        return e;
      }
      function vs(e, t, n, r, i) {
        if (null != r) {
          let o,
            s = !1;
          gn(r) ? (o = r) : jn(r) && ((s = !0), (r = r[Wt]));
          const l = rn(r);
          0 === e && null !== n
            ? null == i
              ? kf(t, n, l)
              : Jo(t, n, l, i || null, !0)
            : 1 === e && null !== n
            ? Jo(t, n, l, i || null, !0)
            : 2 === e
            ? (function _u(e, t, n) {
                const r = yu(e, t);
                r &&
                  (function p_(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, l, s)
            : 3 === e && t.destroyNode(l),
            null != o &&
              (function y_(e, t, n, r, i) {
                const o = n[cr];
                o !== rn(n) && vs(t, e, r, o, i);
                for (let l = un; l < n.length; l++) {
                  const p = n[l];
                  da(p[Ae], p, e, t, r, o);
                }
              })(t, e, o, n, i);
        }
      }
      function Bl(e, t) {
        return e.createComment(
          (function wf(e) {
            return e.replace(zv, (t) => t.replace(Gv, Wv));
          })(t)
        );
      }
      function gu(e, t, n) {
        return e.createElement(t, n);
      }
      function xf(e, t) {
        const n = e[an],
          r = n.indexOf(t);
        fl(t), n.splice(r, 1);
      }
      function mu(e, t) {
        if (e.length <= un) return;
        const n = un + t,
          r = e[n];
        if (r) {
          const i = r[Bn];
          null !== i && i !== e && xf(i, r), t > 0 && (e[n - 1][Vn] = r[Vn]);
          const o = ru(e, un + t);
          !(function s_(e, t) {
            da(e, t, t[tt], 2, null, null), (t[Wt] = null), (t[Jt] = null);
          })(r[Ae], r);
          const s = o[lr];
          null !== s && s.detachView(o[Ae]),
            (r[Pt] = null),
            (r[Vn] = null),
            (r[Je] &= -129);
        }
        return r;
      }
      function jl(e, t) {
        if (!(256 & t[Je])) {
          const n = t[tt];
          t[Hr] && On(t[Hr]),
            t[Sn] && On(t[Sn]),
            n.destroyNode && da(e, t, n, 3, null, null),
            (function l_(e) {
              let t = e[bn];
              if (!t) return Ul(e[Ae], e);
              for (; t; ) {
                let n = null;
                if (jn(t)) n = t[bn];
                else {
                  const r = t[un];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[Vn] && t !== e; )
                    jn(t) && Ul(t[Ae], t), (t = t[Pt]);
                  null === t && (t = e),
                    jn(t) && Ul(t[Ae], t),
                    (n = t && t[Vn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ul(e, t) {
        if (!(256 & t[Je])) {
          (t[Je] &= -129),
            (t[Je] |= 256),
            (function h_(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof ta)) {
                    const o = n[r + 1];
                    if (Array.isArray(o))
                      for (let s = 0; s < o.length; s += 2) {
                        const l = i[o[s]],
                          p = o[s + 1];
                        wi(4, l, p);
                        try {
                          p.call(l);
                        } finally {
                          wi(5, l, p);
                        }
                      }
                    else {
                      wi(4, i, o);
                      try {
                        o.call(i);
                      } finally {
                        wi(5, i, o);
                      }
                    }
                  }
                }
            })(e, t),
            (function f_(e, t) {
              const n = e.cleanup,
                r = t[Fr];
              if (null !== n)
                for (let o = 0; o < n.length - 1; o += 2)
                  if ("string" == typeof n[o]) {
                    const s = n[o + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (o += 2);
                  } else n[o].call(r[n[o + 1]]);
              null !== r && (t[Fr] = null);
              const i = t[wr];
              if (null !== i) {
                t[wr] = null;
                for (let o = 0; o < i.length; o++) (0, i[o])();
              }
            })(e, t),
            1 === t[Ae].type && t[tt].destroy();
          const n = t[Bn];
          if (null !== n && gn(t[Pt])) {
            n !== t[Pt] && xf(n, t);
            const r = t[lr];
            null !== r && r.detachView(e);
          }
          !(function Kv(e) {
            Fl.delete(e[Er]);
          })(t);
        }
      }
      function Hl(e, t, n) {
        return (function Lf(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Wt];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: o } = e.data[r.directiveStart + i];
              if (o === Ln.None || o === Ln.Emulated) return null;
            }
            return kr(r, n);
          }
        })(e, t.parent, n);
      }
      function Jo(e, t, n, r, i) {
        e.insertBefore(t, n, r, i);
      }
      function kf(e, t, n) {
        e.appendChild(t, n);
      }
      function Vf(e, t, n, r, i) {
        null !== r ? Jo(e, t, n, r, i) : kf(e, t, n);
      }
      function yu(e, t) {
        return e.parentNode(t);
      }
      let $l,
        Du,
        ql,
        Cu,
        Uf = function jf(e, t, n) {
          return 40 & e.type ? kr(e, n) : null;
        };
      function vu(e, t, n, r) {
        const i = Hl(e, r, t),
          o = t[tt],
          l = (function Bf(e, t, n) {
            return Uf(e, t, n);
          })(r.parent || t[Jt], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let p = 0; p < n.length; p++) Vf(o, i, n[p], l, !1);
          else Vf(o, i, n, l, !1);
        void 0 !== $l && $l(o, r, t, n, i);
      }
      function ca(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return kr(t, e);
          if (4 & n) return zl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return ca(e, r);
            {
              const i = e[t.index];
              return gn(i) ? zl(-1, i) : rn(i);
            }
          }
          if (32 & n) return Vl(t, e)() || rn(e[t.index]);
          {
            const r = $f(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : ca(la(e[Ut]), r)
              : ca(e, t.next);
          }
        }
        return null;
      }
      function $f(e, t) {
        return null !== t ? e[Ut][Jt].projection[t.projection] : null;
      }
      function zl(e, t) {
        const n = un + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[Ae].firstChild;
          if (null !== i) return ca(r, i);
        }
        return t[cr];
      }
      function Gl(e, t, n, r, i, o, s) {
        for (; null != n; ) {
          const l = r[n.index],
            p = n.type;
          if (
            (s && 0 === t && (l && Vr(rn(l), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & p) Gl(e, t, n.child, r, i, o, !1), vs(t, e, i, l, o);
            else if (32 & p) {
              const D = Vl(n, r);
              let I;
              for (; (I = D()); ) vs(t, e, i, I, o);
              vs(t, e, i, l, o);
            } else 16 & p ? Gf(e, t, r, n, i, o) : vs(t, e, i, l, o);
          n = s ? n.projectionNext : n.next;
        }
      }
      function da(e, t, n, r, i, o) {
        Gl(n, r, e.firstChild, t, i, o, !1);
      }
      function Gf(e, t, n, r, i, o) {
        const s = n[Ut],
          p = s[Jt].projection[r.projection];
        if (Array.isArray(p))
          for (let D = 0; D < p.length; D++) vs(t, e, i, p[D], o);
        else {
          let D = p;
          const I = s[Pt];
          du(r) && (D.flags |= 128), Gl(e, t, D, I, i, o, !0);
        }
      }
      function Wf(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function qf(e, t, n) {
        const { mergedAttrs: r, classes: i, styles: o } = n;
        null !== r && sr(e, t, r),
          null !== i && Wf(e, t, i),
          null !== o &&
            (function __(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, o);
      }
      function _s(e) {
        return (
          (function Wl() {
            if (void 0 === Du && ((Du = null), It.trustedTypes))
              try {
                Du = It.trustedTypes.createPolicy("angular", {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Du;
          })()?.createHTML(e) || e
        );
      }
      function w_(e) {
        ql = e;
      }
      function Ds() {
        if (void 0 !== ql) return ql;
        if (typeof document < "u") return document;
        throw new he(210, !1);
      }
      function Zl() {
        if (void 0 === Cu && ((Cu = null), It.trustedTypes))
          try {
            Cu = It.trustedTypes.createPolicy("angular#unsafe-bypass", {
              createHTML: (e) => e,
              createScript: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch {}
        return Cu;
      }
      function Zf(e) {
        return Zl()?.createHTML(e) || e;
      }
      function Kf(e) {
        return Zl()?.createScriptURL(e) || e;
      }
      class Qf {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ke})`;
        }
      }
      function jo(e) {
        return e instanceof Qf ? e.changingThisBreaksApplicationSecurity : e;
      }
      function fa(e, t) {
        const n = (function T_(e) {
          return (e instanceof Qf && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${Ke})`);
        }
        return n === t;
      }
      class O_ {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              _s(t),
              "text/html"
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch {
            return null;
          }
        }
      }
      class N_ {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              ));
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          return (n.innerHTML = _s(t)), n;
        }
      }
      const R_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      function Yl(e) {
        return (e = String(e)).match(R_) ? e : "unsafe:" + e;
      }
      function Po(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function ha(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const Jf = Po("area,br,col,hr,img,wbr"),
        eh = Po("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        th = Po("rp,rt"),
        Kl = ha(
          Jf,
          ha(
            eh,
            Po(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          ha(
            th,
            Po(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          ha(th, eh)
        ),
        Ql = Po("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        nh = ha(
          Ql,
          Po(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Po(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        F_ = Po("script,style,template");
      class x_ {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let i = this.checkClobberedElement(n, n.nextSibling);
                if (i) {
                  n = i;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Kl.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !F_.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          const r = t.attributes;
          for (let i = 0; i < r.length; i++) {
            const o = r.item(i),
              s = o.name,
              l = s.toLowerCase();
            if (!nh.hasOwnProperty(l)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let p = o.value;
            Ql[l] && (p = Yl(p)), this.buf.push(" ", s, '="', rh(p), '"');
          }
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Kl.hasOwnProperty(n) &&
            !Jf.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(rh(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const L_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        k_ = /([^\#-~ |!])/g;
      function rh(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(L_, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(k_, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let Eu;
      function Xl(e) {
        return "content" in e &&
          (function B_(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var Cs = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })(Cs || {});
      function ih(e) {
        const t = pa();
        return t
          ? Zf(t.sanitize(Cs.HTML, e) || "")
          : fa(e, "HTML")
          ? Zf(jo(e))
          : (function V_(e, t) {
              let n = null;
              try {
                Eu =
                  Eu ||
                  (function Xf(e) {
                    const t = new N_(e);
                    return (function P_() {
                      try {
                        return !!new window.DOMParser().parseFromString(
                          _s(""),
                          "text/html"
                        );
                      } catch {
                        return !1;
                      }
                    })()
                      ? new O_(t)
                      : t;
                  })(e);
                let r = t ? String(t) : "";
                n = Eu.getInertBodyElement(r);
                let i = 5,
                  o = r;
                do {
                  if (0 === i)
                    throw new Error(
                      "Failed to sanitize html because the input is unstable"
                    );
                  i--,
                    (r = o),
                    (o = n.innerHTML),
                    (n = Eu.getInertBodyElement(r));
                } while (r !== o);
                return _s(new x_().sanitizeChildren(Xl(n) || n));
              } finally {
                if (n) {
                  const r = Xl(n) || n;
                  for (; r.firstChild; ) r.removeChild(r.firstChild);
                }
              }
            })(Ds(), ke(e));
      }
      function oh(e) {
        const t = pa();
        return t
          ? t.sanitize(Cs.URL, e) || ""
          : fa(e, "URL")
          ? jo(e)
          : Yl(ke(e));
      }
      function sh(e) {
        const t = pa();
        if (t) return Kf(t.sanitize(Cs.RESOURCE_URL, e) || "");
        if (fa(e, "ResourceURL")) return Kf(jo(e));
        throw new he(904, !1);
      }
      function ah(e, t, n) {
        return (function z_(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? sh
            : oh;
        })(
          t,
          n
        )(e);
      }
      function pa() {
        const e = ve();
        return e && e[Dn].sanitizer;
      }
      class zt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = ct({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const ga = new zt("ENVIRONMENT_INITIALIZER"),
        uh = new zt("INJECTOR", -1),
        lh = new zt("INJECTOR_DEF_TYPES");
      class Jl {
        get(t, n = k) {
          if (n === k) {
            const r = new Error(`NullInjectorError: No provider for ${rt(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function G_(...e) {
        return { ɵproviders: dh(0, e), ɵfromNgModule: !0 };
      }
      function dh(e, ...t) {
        const n = [],
          r = new Set();
        let i;
        const o = (s) => {
          n.push(s);
        };
        return (
          ps(t, (s) => {
            const l = s;
            wu(l, o, [], r) && ((i ||= []), i.push(l));
          }),
          void 0 !== i && fh(i, o),
          n
        );
      }
      function fh(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: i } = e[n];
          ec(i, (o) => {
            t(o, r);
          });
        }
      }
      function wu(e, t, n, r) {
        if (!(e = de(e))) return !1;
        let i = null,
          o = at(e);
        const s = !o && ft(e);
        if (o || s) {
          if (s && !s.standalone) return !1;
          i = e;
        } else {
          const p = e.ngModule;
          if (((o = at(p)), !o)) return !1;
          i = p;
        }
        const l = r.has(i);
        if (s) {
          if (l) return !1;
          if ((r.add(i), s.dependencies)) {
            const p =
              "function" == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const D of p) wu(D, t, n, r);
          }
        } else {
          if (!o) return !1;
          {
            if (null != o.imports && !l) {
              let D;
              r.add(i);
              try {
                ps(o.imports, (I) => {
                  wu(I, t, n, r) && ((D ||= []), D.push(I));
                });
              } finally {
              }
              void 0 !== D && fh(D, t);
            }
            if (!l) {
              const D = _(i) || (() => new i());
              t({ provide: i, useFactory: D, deps: pt }, i),
                t({ provide: lh, useValue: i, multi: !0 }, i),
                t({ provide: ga, useValue: () => sn(i), multi: !0 }, i);
            }
            const p = o.providers;
            if (null != p && !l) {
              const D = e;
              ec(p, (I) => {
                t(I, D);
              });
            }
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function ec(e, t) {
        for (let n of e)
          Me(n) && (n = n.ɵproviders), Array.isArray(n) ? ec(n, t) : t(n);
      }
      const W_ = Fe({ provide: String, useValue: Fe });
      function tc(e) {
        return null !== e && "object" == typeof e && W_ in e;
      }
      function es(e) {
        return "function" == typeof e;
      }
      const nc = new zt("Set Injector scope."),
        Mu = {},
        Z_ = {};
      let rc;
      function bu() {
        return void 0 === rc && (rc = new Jl()), rc;
      }
      class vo {}
      class Su extends vo {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, i) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            oc(t, (s) => this.processProvider(s)),
            this.records.set(uh, Es(void 0, this)),
            i.has("environment") && this.records.set(vo, Es(void 0, this));
          const o = this.records.get(nc);
          null != o && "string" == typeof o.value && this.scopes.add(o.value),
            (this.injectorDefTypes = new Set(this.get(lh.multi, pt, Xe.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const n of this._ngOnDestroyHooks) n.ngOnDestroy();
            const t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const n of t) n();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear();
          }
        }
        onDestroy(t) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(t),
            () => this.removeOnDestroy(t)
          );
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = wn(this),
            r = En(void 0);
          try {
            return t();
          } finally {
            wn(n), En(r);
          }
        }
        get(t, n = k, r = Xe.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(gi)))
            return t[gi](this);
          r = qt(r);
          const o = wn(this),
            s = En(void 0);
          try {
            if (!(r & Xe.SkipSelf)) {
              let p = this.records.get(t);
              if (void 0 === p) {
                const D =
                  (function J_(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof zt)
                    );
                  })(t) && Tn(t);
                (p = D && this.injectableDefInScope(D) ? Es(ic(t), Mu) : null),
                  this.records.set(t, p);
              }
              if (null != p) return this.hydrate(t, p);
            }
            return (r & Xe.Self ? bu() : this.parent).get(
              t,
              (n = r & Xe.Optional && n === k ? null : n)
            );
          } catch (l) {
            if ("NullInjectorError" === l.name) {
              if (((l[ae] = l[ae] || []).unshift(rt(t)), o)) throw l;
              return (function qn(e, t, n, r) {
                const i = e[ae];
                throw (
                  (t[Ot] && i.unshift(t[Ot]),
                  (e.message = (function ao(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = rt(t);
                    if (Array.isArray(t)) i = t.map(rt).join(" -> ");
                    else if ("object" == typeof t) {
                      let o = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let l = t[s];
                          o.push(
                            s +
                              ":" +
                              ("string" == typeof l ? JSON.stringify(l) : rt(l))
                          );
                        }
                      i = `{${o.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(
                      Ze,
                      "\n  "
                    )}`;
                  })("\n" + e.message, i, n, r)),
                  (e.ngTokenPath = i),
                  (e[ae] = null),
                  e)
                );
              })(l, t, "R3InjectorError", this.source);
            }
            throw l;
          } finally {
            En(s), wn(o);
          }
        }
        resolveInjectorInitializers() {
          const t = wn(this),
            n = En(void 0);
          try {
            const i = this.get(ga.multi, pt, Xe.Self);
            for (const o of i) o();
          } finally {
            wn(t), En(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(rt(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new he(205, !1);
        }
        processProvider(t) {
          let n = es((t = de(t))) ? t : de(t && t.provide);
          const r = (function K_(e) {
            return tc(e) ? Es(void 0, e.useValue) : Es(gh(e), Mu);
          })(t);
          if (es(t) || !0 !== t.multi) this.records.get(n);
          else {
            let i = this.records.get(n);
            i ||
              ((i = Es(void 0, Mu, !0)),
              (i.factory = () => Ar(i.multi)),
              this.records.set(n, i)),
              (n = t),
              i.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Mu && ((n.value = Z_), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function X_(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = de(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function ic(e) {
        const t = Tn(e),
          n = null !== t ? t.factory : _(e);
        if (null !== n) return n;
        if (e instanceof zt) throw new he(204, !1);
        if (e instanceof Function)
          return (function Y_(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function sa(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new he(204, !1))
              );
            const n = (function ht(e) {
              return (e && (e[Cn] || e[Pn])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new he(204, !1);
      }
      function gh(e, t, n) {
        let r;
        if (es(e)) {
          const i = de(e);
          return _(i) || ic(i);
        }
        if (tc(e)) r = () => de(e.useValue);
        else if (
          (function ph(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Ar(e.deps || []));
        else if (
          (function hh(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => sn(de(e.useExisting));
        else {
          const i = de(e && (e.useClass || e.provide));
          if (
            !(function Q_(e) {
              return !!e.deps;
            })(e)
          )
            return _(i) || ic(i);
          r = () => new i(...Ar(e.deps));
        }
        return r;
      }
      function Es(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function oc(e, t) {
        for (const n of e)
          Array.isArray(n) ? oc(n, t) : n && Me(n) ? oc(n.ɵproviders, t) : t(n);
      }
      const mh = new zt("AppId", { providedIn: "root", factory: () => eD }),
        eD = "ng",
        yh = new zt("Platform Initializer"),
        sc = new zt("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        tD = new zt("AnimationModuleType"),
        nD = new zt("CSP nonce", {
          providedIn: "root",
          factory: () =>
            Ds()
              .body?.querySelector("[ngCspNonce]")
              ?.getAttribute("ngCspNonce") || null,
        });
      let vh = (e, t, n) => null;
      function pc(e, t, n = !1) {
        return vh(e, t, n);
      }
      class fD {}
      class Ch {}
      class pD {
        resolveComponentFactory(t) {
          throw (function hD(e) {
            const t = Error(`No component factory found for ${rt(e)}.`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Pu = (() => {
        class e {
          static #e = (this.NULL = new pD());
        }
        return e;
      })();
      function gD() {
        return bs(Qn(), ve());
      }
      function bs(e, t) {
        return new va(kr(e, t));
      }
      let va = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = gD);
        }
        return e;
      })();
      function mD(e) {
        return e instanceof va ? e.nativeElement : e;
      }
      class wh {}
      let yD = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function vD() {
                const e = ve(),
                  n = qr(Qn().index, e);
                return (jn(n) ? n : e)[tt];
              })());
          }
          return e;
        })(),
        _D = (() => {
          class e {
            static #e = (this.ɵprov = ct({
              token: e,
              providedIn: "root",
              factory: () => null,
            }));
          }
          return e;
        })();
      class Mh {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const DD = new Mh("16.2.8"),
        yc = {};
      function Ih(e, t = null, n = null, r) {
        const i = Th(e, t, n, r);
        return i.resolveInjectorInitializers(), i;
      }
      function Th(e, t = null, n = null, r, i = new Set()) {
        const o = [n || pt, G_(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : rt(e))),
          new Su(o, t || bu(), r || null, i)
        );
      }
      let ro = (() => {
        class e {
          static #e = (this.THROW_IF_NOT_FOUND = k);
          static #t = (this.NULL = new Jl());
          static create(n, r) {
            if (Array.isArray(n)) return Ih({ name: "" }, r, n, "");
            {
              const i = n.name ?? "";
              return Ih({ name: i }, n.parent, n.providers, i);
            }
          }
          static #n = (this.ɵprov = ct({
            token: e,
            providedIn: "any",
            factory: () => sn(uh),
          }));
          static #r = (this.__NG_ELEMENT_ID__ = -1);
        }
        return e;
      })();
      function _c(e) {
        return e.ngOriginalError;
      }
      class Uo {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && _c(t);
          for (; n && _c(n); ) n = _c(n);
          return n || null;
        }
      }
      function Cc(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const _o = class AD extends f.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let i = t,
            o = n || (() => null),
            s = r;
          if (t && "object" == typeof t) {
            const p = t;
            (i = p.next?.bind(p)),
              (o = p.error?.bind(p)),
              (s = p.complete?.bind(p));
          }
          this.__isAsync && ((o = Cc(o)), i && (i = Cc(i)), s && (s = Cc(s)));
          const l = super.subscribe({ next: i, error: o, complete: s });
          return t instanceof G.w0 && t.add(l), l;
        }
      };
      function Nh(...e) {}
      class pr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _o(!1)),
            (this.onMicrotaskEmpty = new _o(!1)),
            (this.onStable = new _o(!1)),
            (this.onError = new _o(!1)),
            typeof Zone > "u")
          )
            throw new he(908, !1);
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function ID() {
              const e = "function" == typeof It.requestAnimationFrame;
              let t = It[e ? "requestAnimationFrame" : "setTimeout"],
                n = It[e ? "cancelAnimationFrame" : "clearTimeout"];
              if (typeof Zone < "u" && t && n) {
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
                const i = n[Zone.__symbol__("OriginalDelegate")];
                i && (n = i);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: n,
              };
            })().nativeRequestAnimationFrame),
            (function ND(e) {
              const t = () => {
                !(function OD(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(It, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                wc(e),
                                (e.isCheckStableRunning = !0),
                                Ec(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    wc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, o, s, l) => {
                  if (
                    (function RD(e) {
                      return (
                        !(!Array.isArray(e) || 1 !== e.length) &&
                        !0 === e[0].data?.__ignore_ng_zone__
                      );
                    })(l)
                  )
                    return n.invokeTask(i, o, s, l);
                  try {
                    return Ph(e), n.invokeTask(i, o, s, l);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Rh(e);
                  }
                },
                onInvoke: (n, r, i, o, s, l, p) => {
                  try {
                    return Ph(e), n.invoke(i, o, s, l, p);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Rh(e);
                  }
                },
                onHasTask: (n, r, i, o) => {
                  n.hasTask(i, o),
                    r === i &&
                      ("microTask" == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask),
                          wc(e),
                          Ec(e))
                        : "macroTask" == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (n, r, i, o) => (
                  n.handleError(i, o),
                  e.runOutsideAngular(() => e.onError.emit(o)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!pr.isInAngularZone()) throw new he(909, !1);
        }
        static assertNotInAngularZone() {
          if (pr.isInAngularZone()) throw new he(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const o = this._inner,
            s = o.scheduleEventTask("NgZoneEvent: " + i, t, TD, Nh, Nh);
          try {
            return o.runTask(s, n, r);
          } finally {
            o.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const TD = {};
      function Ec(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function wc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Ph(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Rh(e) {
        e._nesting--, Ec(e);
      }
      class PD {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _o()),
            (this.onMicrotaskEmpty = new _o()),
            (this.onStable = new _o()),
            (this.onError = new _o());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, i) {
          return t.apply(n, r);
        }
      }
      const Fh = new zt("", { providedIn: "root", factory: xh });
      function xh() {
        const e = bt(pr);
        let t = !0;
        const n = new N.y((i) => {
            (t =
              e.isStable && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks),
              e.runOutsideAngular(() => {
                i.next(t), i.complete();
              });
          }),
          r = new N.y((i) => {
            let o;
            e.runOutsideAngular(() => {
              o = e.onStable.subscribe(() => {
                pr.assertNotInAngularZone(),
                  queueMicrotask(() => {
                    !t &&
                      !e.hasPendingMacrotasks &&
                      !e.hasPendingMicrotasks &&
                      ((t = !0), i.next(!0));
                  });
              });
            });
            const s = e.onUnstable.subscribe(() => {
              pr.assertInAngularZone(),
                t &&
                  ((t = !1),
                  e.runOutsideAngular(() => {
                    i.next(!1);
                  }));
            });
            return () => {
              o.unsubscribe(), s.unsubscribe();
            };
          });
        return (0, le.T)(n, r.pipe(ie()));
      }
      function Lh(e) {
        return e.ownerDocument;
      }
      function Ro(e) {
        return e instanceof Function ? e() : e;
      }
      let Mc = (() => {
        class e {
          constructor() {
            (this.renderDepth = 0), (this.handler = null);
          }
          begin() {
            this.handler?.validateBegin(), this.renderDepth++;
          }
          end() {
            this.renderDepth--,
              0 === this.renderDepth && this.handler?.execute();
          }
          ngOnDestroy() {
            this.handler?.destroy(), (this.handler = null);
          }
          static #e = (this.ɵprov = ct({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          }));
        }
        return e;
      })();
      function _a(e) {
        for (; e; ) {
          e[Je] |= 64;
          const t = la(e);
          if ($r(e) && !t) return e;
          e = t;
        }
        return null;
      }
      const Uh = new zt("", { providedIn: "root", factory: () => !1 });
      let Fu = null;
      function Gh(e, t) {
        return e[t] ?? Zh();
      }
      function Wh(e, t) {
        const n = Zh();
        n.producerNode?.length && ((e[t] = Fu), (n.lView = e), (Fu = qh()));
      }
      const HD = {
        ...Se,
        consumerIsAlwaysLive: !0,
        consumerMarkedDirty: (e) => {
          _a(e.lView);
        },
        lView: null,
      };
      function qh() {
        return Object.create(HD);
      }
      function Zh() {
        return (Fu ??= qh()), Fu;
      }
      const mt = {};
      function Yh(e) {
        Kh(Ft(), ve(), Xn() + e, !1);
      }
      function Kh(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[Je])) {
            const o = e.preOrderCheckHooks;
            null !== o && Qa(t, o, n);
          } else {
            const o = e.preOrderHooks;
            null !== o && Xa(t, o, 0, n);
          }
        ii(n);
      }
      function Is(e, t = Xe.Default) {
        const n = ve();
        return null === n ? sn(e, t) : tf(Qn(), n, de(e), t);
      }
      function Qh() {
        throw new Error("invalid");
      }
      function xu(e, t, n, r, i, o, s, l, p, D, I) {
        const F = t.blueprint.slice();
        return (
          (F[Wt] = i),
          (F[Je] = 140 | r),
          (null !== D || (e && 2048 & e[Je])) && (F[Je] |= 2048),
          as(F),
          (F[Pt] = F[ti] = e),
          (F[Zt] = n),
          (F[Dn] = s || (e && e[Dn])),
          (F[tt] = l || (e && e[tt])),
          (F[Yn] = p || (e && e[Yn]) || null),
          (F[Jt] = o),
          (F[Er] = (function Zv() {
            return qv++;
          })()),
          (F[zn] = I),
          (F[Fi] = D),
          (F[Ut] = 2 == t.type ? e[Ut] : F),
          F
        );
      }
      function Ts(e, t, n, r, i) {
        let o = e.data[t];
        if (null === o)
          (o = (function bc(e, t, n, r, i) {
            const o = Za(),
              s = Xs(),
              p = (e.data[t] = (function KD(e, t, n, r, i, o) {
                let s = t ? t.injectorIndex : -1,
                  l = 0;
                return (
                  (function Vo() {
                    return null !== st.skipHydrationRootTNode;
                  })() && (l |= 128),
                  {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: l,
                    providerIndexes: 0,
                    value: i,
                    attrs: o,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, s ? o : o && o.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = p),
              null !== o &&
                (s
                  ? null == o.child && null !== p.parent && (o.child = p)
                  : null === o.next && ((o.next = p), (p.prev = o))),
              p
            );
          })(e, t, n, r, i)),
            (function Gd() {
              return st.lFrame.inI18n;
            })() && (o.flags |= 32);
        else if (64 & o.type) {
          (o.type = n), (o.value = r), (o.attrs = i);
          const s = (function Zo() {
            const e = st.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          o.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return ji(o, !0), o;
      }
      function Da(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let o = 0; o < n; o++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function Xh(e, t, n, r, i) {
        const o = Gh(t, Hr),
          s = Xn(),
          l = 2 & r;
        try {
          ii(-1), l && t.length > ot && Kh(e, t, ot, !1), wi(l ? 2 : 0, i);
          const D = l ? o : null,
            I = Ht(D);
          try {
            null !== D && (D.dirty = !1), n(r, i);
          } finally {
            en(D, I);
          }
        } finally {
          l && null === t[Hr] && Wh(t, Hr), ii(s), wi(l ? 3 : 1, i);
        }
      }
      function Sc(e, t, n) {
        if (Ki(t)) {
          const r = ne(null);
          try {
            const o = t.directiveEnd;
            for (let s = t.directiveStart; s < o; s++) {
              const l = e.data[s];
              l.contentQueries && l.contentQueries(1, n[s], s);
            }
          } finally {
            ne(r);
          }
        }
      }
      function Ac(e, t, n) {
        Wa() &&
          ((function r0(e, t, n, r) {
            const i = n.directiveStart,
              o = n.directiveEnd;
            Mr(n) &&
              (function d0(e, t, n) {
                const r = kr(t, e),
                  i = Jh(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const l = Lu(
                  e,
                  xu(
                    e,
                    i,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[Dn].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null
                  )
                );
                e[t.index] = l;
              })(t, n, e.data[i + n.componentOffset]),
              e.firstCreatePass || eu(n, t),
              Vr(r, t);
            const s = n.initialInputs;
            for (let l = i; l < o; l++) {
              const p = e.data[l],
                D = Xo(t, e, l, n);
              Vr(D, t),
                null !== s && f0(0, l - i, D, p, 0, s),
                dr(p) && (qr(n.index, t)[Zt] = Xo(t, e, l, n));
            }
          })(e, t, n, kr(n, t)),
          64 == (64 & n.flags) && ip(e, t, n));
      }
      function Ic(e, t, n = kr) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let o = 0; o < r.length; o += 2) {
            const s = r[o + 1],
              l = -1 === s ? n(t, e) : e[s];
            e[i++] = l;
          }
        }
      }
      function Jh(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Tc(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
              e.id
            ))
          : t;
      }
      function Tc(e, t, n, r, i, o, s, l, p, D, I) {
        const F = ot + r,
          U = F + i,
          $ = (function zD(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : mt);
            return n;
          })(F, U),
          ue = "function" == typeof D ? D() : D;
        return ($[Ae] = {
          type: e,
          blueprint: $,
          template: n,
          queries: null,
          viewQuery: l,
          declTNode: t,
          data: $.slice().fill(null, F),
          bindingStartIndex: F,
          expandoStartIndex: U,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof o ? o() : o,
          pipeRegistry: "function" == typeof s ? s() : s,
          firstChild: null,
          schemas: p,
          consts: ue,
          incompleteFirstPass: !1,
          ssrId: I,
        });
      }
      let ep = (e) => null;
      function tp(e, t, n, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            n = null === n ? {} : n;
            const o = e[i];
            null === r
              ? np(n, t, i, o)
              : r.hasOwnProperty(i) && np(n, t, r[i], o);
          }
        return n;
      }
      function np(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function Oc(e, t, n, r) {
        if (Wa()) {
          const i = null === r ? null : { "": -1 },
            o = (function s0(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                i = null;
              if (n)
                for (let o = 0; o < n.length; o++) {
                  const s = n[o];
                  if (zi(t, s.selectors, !1))
                    if ((r || (r = []), dr(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const l = [];
                        (i = i || new Map()),
                          s.findHostDirectiveDefs(s, l, i),
                          r.unshift(...l, s),
                          Nc(e, t, l.length);
                      } else r.unshift(s), Nc(e, t, 0);
                    else
                      (i = i || new Map()),
                        s.findHostDirectiveDefs?.(s, r, i),
                        r.push(s);
                }
              return null === r ? null : [r, i];
            })(e, n);
          let s, l;
          null === o ? (s = l = null) : ([s, l] = o),
            null !== s && rp(e, t, n, s, i, l),
            i &&
              (function a0(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < t.length; i += 2) {
                    const o = n[t[i + 1]];
                    if (null == o) throw new he(-301, !1);
                    r.push(t[i], o);
                  }
                }
              })(n, r, i);
        }
        n.mergedAttrs = jr(n.mergedAttrs, n.attrs);
      }
      function rp(e, t, n, r, i, o) {
        for (let D = 0; D < r.length; D++) bl(eu(n, t), e, r[D].type);
        !(function l0(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let D = 0; D < r.length; D++) {
          const I = r[D];
          I.providersResolver && I.providersResolver(I);
        }
        let s = !1,
          l = !1,
          p = Da(e, t, r.length, null);
        for (let D = 0; D < r.length; D++) {
          const I = r[D];
          (n.mergedAttrs = jr(n.mergedAttrs, I.hostAttrs)),
            c0(e, n, t, p, I),
            u0(p, I, i),
            null !== I.contentQueries && (n.flags |= 4),
            (null !== I.hostBindings ||
              null !== I.hostAttrs ||
              0 !== I.hostVars) &&
              (n.flags |= 64);
          const F = I.type.prototype;
          !s &&
            (F.ngOnChanges || F.ngOnInit || F.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
            !l &&
              (F.ngOnChanges || F.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(n.index), (l = !0)),
            p++;
        }
        !(function QD(e, t, n) {
          const i = t.directiveEnd,
            o = e.data,
            s = t.attrs,
            l = [];
          let p = null,
            D = null;
          for (let I = t.directiveStart; I < i; I++) {
            const F = o[I],
              U = n ? n.get(F) : null,
              ue = U ? U.outputs : null;
            (p = tp(F.inputs, I, p, U ? U.inputs : null)),
              (D = tp(F.outputs, I, D, ue));
            const De = null === p || null === s || kn(t) ? null : h0(p, I, s);
            l.push(De);
          }
          null !== p &&
            (p.hasOwnProperty("class") && (t.flags |= 8),
            p.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = l),
            (t.inputs = p),
            (t.outputs = D);
        })(e, n, o);
      }
      function ip(e, t, n) {
        const r = n.directiveStart,
          i = n.directiveEnd,
          o = n.index,
          s = (function g() {
            return st.lFrame.currentDirectiveIndex;
          })();
        try {
          ii(o);
          for (let l = r; l < i; l++) {
            const p = e.data[l],
              D = t[l];
            a(l),
              (null !== p.hostBindings ||
                0 !== p.hostVars ||
                null !== p.hostAttrs) &&
                o0(p, D);
          }
        } finally {
          ii(-1), a(s);
        }
      }
      function o0(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Nc(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function u0(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          dr(t) && (n[""] = e);
        }
      }
      function c0(e, t, n, r, i) {
        e.data[r] = i;
        const o = i.factory || (i.factory = _(i.type)),
          s = new ta(o, dr(i), Is);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function t0(e, t, n, r, i) {
            const o = i.hostBindings;
            if (o) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const l = ~t.index;
              (function n0(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != l && s.push(l),
                s.push(n, r, o);
            }
          })(e, t, r, Da(e, n, i.hostVars, mt), i);
      }
      function Do(e, t, n, r, i, o) {
        const s = kr(e, t);
        !(function Pc(e, t, n, r, i, o, s) {
          if (null == o) e.removeAttribute(t, i, n);
          else {
            const l = null == s ? ke(o) : s(o, r || "", i);
            e.setAttribute(t, i, l, n);
          }
        })(t[tt], s, o, e.value, n, r, i);
      }
      function f0(e, t, n, r, i, o) {
        const s = o[t];
        if (null !== s)
          for (let l = 0; l < s.length; ) op(r, n, s[l++], s[l++], s[l++]);
      }
      function op(e, t, n, r, i) {
        const o = ne(null);
        try {
          const s = e.inputTransforms;
          null !== s && s.hasOwnProperty(r) && (i = s[r].call(t, i)),
            null !== e.setInput ? e.setInput(t, i, n, r) : (t[r] = i);
        } finally {
          ne(o);
        }
      }
      function h0(e, t, n) {
        let r = null,
          i = 0;
        for (; i < n.length; ) {
          const o = n[i];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              if (e.hasOwnProperty(o)) {
                null === r && (r = []);
                const s = e[o];
                for (let l = 0; l < s.length; l += 2)
                  if (s[l] === t) {
                    r.push(o, s[l + 1], n[i + 1]);
                    break;
                  }
              }
              i += 2;
            } else i += 2;
          else i += 4;
        }
        return r;
      }
      function sp(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null, null];
      }
      function ap(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r + 1];
            if (-1 !== o) {
              const s = e.data[o];
              T(n[r]), s.contentQueries(2, t[o], o);
            }
          }
      }
      function Lu(e, t) {
        return e[bn] ? (e[Ri][Vn] = t) : (e[bn] = t), (e[Ri] = t), t;
      }
      function Rc(e, t, n) {
        T(0);
        const r = ne(null);
        try {
          t(e, n);
        } finally {
          ne(r);
        }
      }
      function up(e) {
        return e[Fr] || (e[Fr] = []);
      }
      function lp(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function dp(e, t) {
        const n = e[Yn],
          r = n ? n.get(Uo, null) : null;
        r && r.handleError(t);
      }
      function Fc(e, t, n, r, i) {
        for (let o = 0; o < n.length; ) {
          const s = n[o++],
            l = n[o++];
          op(e.data[s], t[s], r, l, i);
        }
      }
      function p0(e, t) {
        const n = qr(t, e),
          r = n[Ae];
        !(function g0(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const i = n[Wt];
        null !== i && null === n[zn] && (n[zn] = pc(i, n[Yn])), xc(r, n, n[Zt]);
      }
      function xc(e, t, n) {
        Y(t);
        try {
          const r = e.viewQuery;
          null !== r && Rc(1, r, n);
          const i = e.template;
          null !== i && Xh(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && ap(e, t),
            e.staticViewQueries && Rc(2, e.viewQuery, n);
          const o = e.components;
          null !== o &&
            (function m0(e, t) {
              for (let n = 0; n < t.length; n++) p0(e, t[n]);
            })(t, o);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[Je] &= -5), Mi();
        }
      }
      let fp = (() => {
        class e {
          constructor() {
            (this.all = new Set()), (this.queue = new Map());
          }
          create(n, r, i) {
            const o = typeof Zone > "u" ? null : Zone.current,
              s = (function Bt(e, t, n) {
                const r = Object.create(nn);
                n && (r.consumerAllowSignalWrites = !0),
                  (r.fn = e),
                  (r.schedule = t);
                const i = (s) => {
                  r.cleanupFn = s;
                };
                return (
                  (r.ref = {
                    notify: () => nt(r),
                    run: () => {
                      if (((r.dirty = !1), r.hasRun && !fn(r))) return;
                      r.hasRun = !0;
                      const s = Ht(r);
                      try {
                        r.cleanupFn(), (r.cleanupFn = gt), r.fn(i);
                      } finally {
                        en(r, s);
                      }
                    },
                    cleanup: () => r.cleanupFn(),
                  }),
                  r.ref
                );
              })(
                n,
                (D) => {
                  this.all.has(D) && this.queue.set(D, o);
                },
                i
              );
            let l;
            this.all.add(s), s.notify();
            const p = () => {
              s.cleanup(), l?.(), this.all.delete(s), this.queue.delete(s);
            };
            return (l = r?.onDestroy(p)), { destroy: p };
          }
          flush() {
            if (0 !== this.queue.size)
              for (const [n, r] of this.queue)
                this.queue.delete(n), r ? r.run(() => n.run()) : n.run();
          }
          get isQueueEmpty() {
            return 0 === this.queue.size;
          }
          static #e = (this.ɵprov = ct({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          }));
        }
        return e;
      })();
      function ku(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          o = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const l = t[s];
            "number" == typeof l
              ? (o = l)
              : 1 == o
              ? (i = qe(i, l))
              : 2 == o && (r = qe(r, l + ": " + t[++s] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function Ca(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const o = t[n.index];
          null !== o && r.push(rn(o)), gn(o) && hp(o, r);
          const s = n.type;
          if (8 & s) Ca(e, t, n.child, r);
          else if (32 & s) {
            const l = Vl(n, t);
            let p;
            for (; (p = l()); ) r.push(p);
          } else if (16 & s) {
            const l = $f(t, n);
            if (Array.isArray(l)) r.push(...l);
            else {
              const p = la(t[Ut]);
              Ca(p[Ae], p, l, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      function hp(e, t) {
        for (let n = un; n < e.length; n++) {
          const r = e[n],
            i = r[Ae].firstChild;
          null !== i && Ca(r[Ae], r, i, t);
        }
        e[cr] !== e[Wt] && t.push(e[cr]);
      }
      function Vu(e, t, n, r = !0) {
        const i = t[Dn],
          o = i.rendererFactory,
          s = i.afterRenderEventManager;
        o.begin?.(), s?.begin();
        try {
          pp(e, t, e.template, n);
        } catch (p) {
          throw (r && dp(t, p), p);
        } finally {
          o.end?.(), i.effectManager?.flush(), s?.end();
        }
      }
      function pp(e, t, n, r) {
        const i = t[Je];
        if (256 != (256 & i)) {
          t[Dn].effectManager?.flush(), Y(t);
          try {
            as(t),
              (function vl(e) {
                return (st.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Xh(e, t, n, 2, r);
            const s = 3 == (3 & i);
            if (s) {
              const D = e.preOrderCheckHooks;
              null !== D && Qa(t, D, null);
            } else {
              const D = e.preOrderHooks;
              null !== D && Xa(t, D, 0, null), Dl(t, 0);
            }
            if (
              ((function _0(e) {
                for (let t = Nf(e); null !== t; t = Pf(t)) {
                  if (!t[Yi]) continue;
                  const n = t[an];
                  for (let r = 0; r < n.length; r++) {
                    $a(n[r]);
                  }
                }
              })(t),
              gp(t, 2),
              null !== e.contentQueries && ap(e, t),
              s)
            ) {
              const D = e.contentCheckHooks;
              null !== D && Qa(t, D);
            } else {
              const D = e.contentHooks;
              null !== D && Xa(t, D, 1), Dl(t, 1);
            }
            !(function $D(e, t) {
              const n = e.hostBindingOpCodes;
              if (null === n) return;
              const r = Gh(t, Sn);
              try {
                for (let i = 0; i < n.length; i++) {
                  const o = n[i];
                  if (o < 0) ii(~o);
                  else {
                    const s = o,
                      l = n[++i],
                      p = n[++i];
                    c(l, s), (r.dirty = !1);
                    const D = Ht(r);
                    try {
                      p(2, t[s]);
                    } finally {
                      en(r, D);
                    }
                  }
                }
              } finally {
                null === t[Sn] && Wh(t, Sn), ii(-1);
              }
            })(e, t);
            const l = e.components;
            null !== l && yp(t, l, 0);
            const p = e.viewQuery;
            if ((null !== p && Rc(2, p, r), s)) {
              const D = e.viewCheckHooks;
              null !== D && Qa(t, D);
            } else {
              const D = e.viewHooks;
              null !== D && Xa(t, D, 2), Dl(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[Je] &= -73),
              fl(t);
          } finally {
            Mi();
          }
        }
      }
      function gp(e, t) {
        for (let n = Nf(e); null !== n; n = Pf(n))
          for (let r = un; r < n.length; r++) mp(n[r], t);
      }
      function D0(e, t, n) {
        mp(qr(t, e), n);
      }
      function mp(e, t) {
        if (
          !(function Bd(e) {
            return 128 == (128 & e[Je]);
          })(e)
        )
          return;
        const n = e[Ae],
          r = e[Je];
        if ((80 & r && 0 === t) || 1024 & r || 2 === t)
          pp(n, e, n.template, e[Zt]);
        else if (e[Ur] > 0) {
          gp(e, 1);
          const i = n.components;
          null !== i && yp(e, i, 1);
        }
      }
      function yp(e, t, n) {
        for (let r = 0; r < t.length; r++) D0(e, t[r], n);
      }
      class Ea {
        get rootNodes() {
          const t = this._lView,
            n = t[Ae];
          return Ca(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Zt];
        }
        set context(t) {
          this._lView[Zt] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[Je]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Pt];
            if (gn(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (mu(t, r), ru(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          jl(this._lView[Ae], this._lView);
        }
        onDestroy(t) {
          !(function Bi(e, t) {
            if (256 == (256 & e[Je])) throw new he(911, !1);
            null === e[wr] && (e[wr] = []), e[wr].push(t);
          })(this._lView, t);
        }
        markForCheck() {
          _a(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[Je] &= -129;
        }
        reattach() {
          this._lView[Je] |= 128;
        }
        detectChanges() {
          Vu(this._lView[Ae], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new he(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function u_(e, t) {
              da(e, t, t[tt], 2, null, null);
            })(this._lView[Ae], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new he(902, !1);
          this._appRef = t;
        }
      }
      class C0 extends Ea {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Vu(t[Ae], t, t[Zt], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class vp extends Pu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = ft(t);
          return new wa(n, this.ngModule);
        }
      }
      function _p(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class w0 {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = qt(r);
          const i = this.injector.get(t, yc, r);
          return i !== yc || n === yc ? i : this.parentInjector.get(t, n, r);
        }
      }
      class wa extends Ch {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = _p(t.inputs);
          if (null !== n)
            for (const i of r)
              n.hasOwnProperty(i.propName) && (i.transform = n[i.propName]);
          return r;
        }
        get outputs() {
          return _p(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function yi(e) {
              return e.map(Gi).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, i) {
          let o = (i = i || this.ngModule) instanceof vo ? i : i?.injector;
          o &&
            null !== this.componentDef.getStandaloneInjector &&
            (o = this.componentDef.getStandaloneInjector(o) || o);
          const s = o ? new w0(t, o) : t,
            l = s.get(wh, null);
          if (null === l) throw new he(407, !1);
          const F = {
              rendererFactory: l,
              sanitizer: s.get(_D, null),
              effectManager: s.get(fp, null),
              afterRenderEventManager: s.get(Mc, null),
            },
            U = l.createRenderer(null, this.componentDef),
            $ = this.componentDef.selectors[0][0] || "div",
            ue = r
              ? (function GD(e, t, n, r) {
                  const o = r.get(Uh, !1) || n === Ln.ShadowDom,
                    s = e.selectRootElement(t, o);
                  return (
                    (function WD(e) {
                      ep(e);
                    })(s),
                    s
                  );
                })(U, r, this.componentDef.encapsulation, s)
              : gu(
                  U,
                  $,
                  (function E0(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })($)
                ),
            He = this.componentDef.signals
              ? 4608
              : this.componentDef.onPush
              ? 576
              : 528;
          let ge = null;
          null !== ue && (ge = pc(ue, s, !0));
          const lt = Tc(
              0,
              null,
              null,
              1,
              0,
              null,
              null,
              null,
              null,
              null,
              null
            ),
            wt = xu(null, lt, null, He, null, null, F, U, s, null, ge);
          let Qt, ui;
          Y(wt);
          try {
            const xo = this.componentDef;
            let Ws,
              Vd = null;
            xo.findHostDirectiveDefs
              ? ((Ws = []),
                (Vd = new Map()),
                xo.findHostDirectiveDefs(xo, Ws, Vd),
                Ws.push(xo))
              : (Ws = [xo]);
            const kb = (function b0(e, t) {
                const n = e[Ae],
                  r = ot;
                return (e[r] = t), Ts(n, r, 2, "#host", null);
              })(wt, ue),
              Vb = (function S0(e, t, n, r, i, o, s) {
                const l = i[Ae];
                !(function A0(e, t, n, r) {
                  for (const i of e)
                    t.mergedAttrs = jr(t.mergedAttrs, i.hostAttrs);
                  null !== t.mergedAttrs &&
                    (ku(t, t.mergedAttrs, !0), null !== n && qf(r, n, t));
                })(r, e, t, s);
                let p = null;
                null !== t && (p = pc(t, i[Yn]));
                const D = o.rendererFactory.createRenderer(t, n);
                let I = 16;
                n.signals ? (I = 4096) : n.onPush && (I = 64);
                const F = xu(
                  i,
                  Jh(n),
                  null,
                  I,
                  i[e.index],
                  e,
                  o,
                  D,
                  null,
                  null,
                  p
                );
                return (
                  l.firstCreatePass && Nc(l, e, r.length - 1),
                  Lu(i, F),
                  (i[e.index] = F)
                );
              })(kb, ue, xo, Ws, wt, F, U);
            (ui = qo(lt, ot)),
              ue &&
                (function T0(e, t, n, r) {
                  if (r) sr(e, n, ["ng-version", DD.full]);
                  else {
                    const { attrs: i, classes: o } = (function co(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        i = 2;
                      for (; r < e.length; ) {
                        let o = e[r];
                        if ("string" == typeof o)
                          2 === i
                            ? "" !== o && t.push(o, e[++r])
                            : 8 === i && n.push(o);
                        else {
                          if (!vn(i)) break;
                          i = o;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    i && sr(e, n, i),
                      o && o.length > 0 && Wf(e, n, o.join(" "));
                  }
                })(U, xo, ue, r),
              void 0 !== n &&
                (function O0(e, t, n) {
                  const r = (e.projection = []);
                  for (let i = 0; i < t.length; i++) {
                    const o = n[i];
                    r.push(null != o ? Array.from(o) : null);
                  }
                })(ui, this.ngContentSelectors, n),
              (Qt = (function I0(e, t, n, r, i, o) {
                const s = Qn(),
                  l = i[Ae],
                  p = kr(s, i);
                rp(l, i, s, n, null, r);
                for (let I = 0; I < n.length; I++)
                  Vr(Xo(i, l, s.directiveStart + I, s), i);
                ip(l, i, s), p && Vr(p, i);
                const D = Xo(i, l, s.directiveStart + s.componentOffset, s);
                if (((e[Zt] = i[Zt] = D), null !== o))
                  for (const I of o) I(D, t);
                return Sc(l, s, e), D;
              })(Vb, xo, Ws, Vd, wt, [N0])),
              xc(lt, wt, null);
          } finally {
            Mi();
          }
          return new M0(this.componentType, Qt, bs(ui, wt), wt, ui);
        }
      }
      class M0 extends fD {
        constructor(t, n, r, i, o) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = o),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new C0(i)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[t])) {
            if (
              ((this.previousInputValues ??= new Map()),
              this.previousInputValues.has(t) &&
                Object.is(this.previousInputValues.get(t), n))
            )
              return;
            const o = this._rootLView;
            Fc(o[Ae], o, i, t, n),
              this.previousInputValues.set(t, n),
              _a(qr(this._tNode.index, o));
          }
        }
        get injector() {
          return new Zr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function N0() {
        const e = Qn();
        Ka(ve()[Ae], e);
      }
      function Lc(e) {
        let t = (function Dp(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (dr(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new he(903, !1);
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const s = e;
              (s.inputs = Bu(e.inputs)),
                (s.inputTransforms = Bu(e.inputTransforms)),
                (s.declaredInputs = Bu(e.declaredInputs)),
                (s.outputs = Bu(e.outputs));
              const l = i.hostBindings;
              l && x0(e, l);
              const p = i.viewQuery,
                D = i.contentQueries;
              if (
                (p && R0(e, p),
                D && F0(e, D),
                yt(e.inputs, i.inputs),
                yt(e.declaredInputs, i.declaredInputs),
                yt(e.outputs, i.outputs),
                null !== i.inputTransforms &&
                  (null === s.inputTransforms && (s.inputTransforms = {}),
                  yt(s.inputTransforms, i.inputTransforms)),
                dr(i) && i.data.animation)
              ) {
                const I = e.data;
                I.animation = (I.animation || []).concat(i.data.animation);
              }
            }
            const o = i.features;
            if (o)
              for (let s = 0; s < o.length; s++) {
                const l = o[s];
                l && l.ngInherit && l(e), l === Lc && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function P0(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = jr(i.hostAttrs, (n = jr(n, i.hostAttrs))));
          }
        })(r);
      }
      function Bu(e) {
        return e === Mn ? {} : e === pt ? [] : e;
      }
      function R0(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function F0(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, o) => {
              t(r, i, o), n(r, i, o);
            }
          : t;
      }
      function x0(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function Mp(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const i = t[r];
            Array.isArray(i) && i[2] && (n[r] = i[2]);
          }
        e.inputTransforms = n;
      }
      function ju(e) {
        return (
          !!kc(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function kc(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Co(e, t, n) {
        return (e[t] = n);
      }
      function Br(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function ts(e, t, n, r) {
        const i = Br(e, t, n);
        return Br(e, t + 1, r) || i;
      }
      function Hi(e, t, n, r, i, o) {
        const s = ts(e, t, n, r);
        return ts(e, t + 2, i, o) || s;
      }
      function Vc(e, t, n, r) {
        const i = ve();
        return Br(i, Yo(), t) && (Ft(), Do(mn(), i, e, t, n, r)), Vc;
      }
      function kp(e, t, n, r, i, o, s, l) {
        const p = ve(),
          D = Ft(),
          I = e + ot,
          F = D.firstCreatePass
            ? (function sC(e, t, n, r, i, o, s, l, p) {
                const D = t.consts,
                  I = Ts(t, e, 4, s || null, po(D, l));
                Oc(t, n, I, po(D, p)), Ka(t, I);
                const F = (I.tView = Tc(
                  2,
                  I,
                  r,
                  i,
                  o,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  D,
                  null
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, I),
                    (F.queries = t.queries.embeddedTView(I))),
                  I
                );
              })(I, D, p, t, n, r, i, o, s)
            : D.data[I];
        ji(F, !1);
        const U = Vp(D, p, F, e);
        Ya() && vu(D, p, U, F),
          Vr(U, p),
          Lu(p, (p[I] = sp(U, p, U, F))),
          Qi(F) && Ac(D, p, F),
          null != s && Ic(p, F, l);
      }
      let Vp = function Bp(e, t, n, r) {
        return Bo(!0), t[tt].createComment("");
      };
      function zc(e, t, n) {
        const r = ve();
        return (
          Br(r, Yo(), t) &&
            (function Si(e, t, n, r, i, o, s, l) {
              const p = kr(t, n);
              let I,
                D = t.inputs;
              !l && null != D && (I = D[r])
                ? (Fc(e, n, I, r, i),
                  Mr(t) &&
                    (function JD(e, t) {
                      const n = qr(t, e);
                      16 & n[Je] || (n[Je] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function XD(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (i = null != s ? s(i, t.value || "", r) : i),
                  o.setProperty(p, r, i));
            })(Ft(), mn(), r, e, t, r[tt], n, !1),
          zc
        );
      }
      function Gc(e, t, n, r, i) {
        const s = i ? "class" : "style";
        Fc(e, n, t.inputs[s], s, r);
      }
      function Gu(e, t, n, r) {
        const i = ve(),
          o = Ft(),
          s = ot + e,
          l = i[tt],
          p = o.firstCreatePass
            ? (function dC(e, t, n, r, i, o) {
                const s = t.consts,
                  p = Ts(t, e, 2, r, po(s, i));
                return (
                  Oc(t, n, p, po(s, o)),
                  null !== p.attrs && ku(p, p.attrs, !1),
                  null !== p.mergedAttrs && ku(p, p.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, p),
                  p
                );
              })(s, o, i, t, n, r)
            : o.data[s],
          D = jp(o, i, p, l, t, e);
        i[s] = D;
        const I = Qi(p);
        return (
          ji(p, !0),
          qf(l, D, p),
          32 != (32 & p.flags) && Ya() && vu(o, i, D, p),
          0 ===
            (function za() {
              return st.lFrame.elementDepthCount;
            })() && Vr(D, i),
          (function Ga() {
            st.lFrame.elementDepthCount++;
          })(),
          I && (Ac(o, i, p), Sc(o, p, i)),
          null !== r && Ic(i, p),
          Gu
        );
      }
      function Wu() {
        let e = Qn();
        Xs() ? Js() : ((e = e.parent), ji(e, !1));
        const t = e;
        (function Ud(e) {
          return st.skipHydrationRootTNode === e;
        })(t) &&
          (function $d() {
            st.skipHydrationRootTNode = null;
          })(),
          (function Ks() {
            st.lFrame.elementDepthCount--;
          })();
        const n = Ft();
        return (
          n.firstCreatePass && (Ka(n, e), Ki(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function sv(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Gc(n, t, ve(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function av(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Gc(n, t, ve(), t.stylesWithoutHost, !1),
          Wu
        );
      }
      function Wc(e, t, n, r) {
        return Gu(e, t, n, r), Wu(), Wc;
      }
      let jp = (e, t, n, r, i, o) => (
        Bo(!0),
        gu(
          r,
          i,
          (function Wd() {
            return st.lFrame.currentNamespace;
          })()
        )
      );
      function qu(e, t, n) {
        const r = ve(),
          i = Ft(),
          o = e + ot,
          s = i.firstCreatePass
            ? (function pC(e, t, n, r, i) {
                const o = t.consts,
                  s = po(o, r),
                  l = Ts(t, e, 8, "ng-container", s);
                return (
                  null !== s && ku(l, s, !0),
                  Oc(t, n, l, po(o, i)),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(o, i, r, t, n)
            : i.data[o];
        ji(s, !0);
        const l = Hp(i, r, s, e);
        return (
          (r[o] = l),
          Ya() && vu(i, r, l, s),
          Vr(l, r),
          Qi(s) && (Ac(i, r, s), Sc(i, s, r)),
          null != n && Ic(r, s),
          qu
        );
      }
      function Zu() {
        let e = Qn();
        const t = Ft();
        return (
          Xs() ? Js() : ((e = e.parent), ji(e, !1)),
          t.firstCreatePass && (Ka(t, e), Ki(e) && t.queries.elementEnd(e)),
          Zu
        );
      }
      let Hp = (e, t, n, r) => (Bo(!0), Bl(t[tt], ""));
      function $p() {
        return ve();
      }
      function qc(e) {
        return !!e && "function" == typeof e.then;
      }
      function zp(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      function Zc(e, t, n, r) {
        const i = ve(),
          o = Ft(),
          s = Qn();
        return (
          (function Wp(e, t, n, r, i, o, s) {
            const l = Qi(r),
              D = e.firstCreatePass && lp(e),
              I = t[Zt],
              F = up(t);
            let U = !0;
            if (3 & r.type || s) {
              const De = kr(r, t),
                Te = s ? s(De) : De,
                He = F.length,
                ge = s ? (wt) => s(rn(wt[r.index])) : r.index;
              let lt = null;
              if (
                (!s &&
                  l &&
                  (lt = (function yC(e, t, n, r) {
                    const i = e.cleanup;
                    if (null != i)
                      for (let o = 0; o < i.length - 1; o += 2) {
                        const s = i[o];
                        if (s === n && i[o + 1] === r) {
                          const l = t[Fr],
                            p = i[o + 2];
                          return l.length > p ? l[p] : null;
                        }
                        "string" == typeof s && (o += 2);
                      }
                    return null;
                  })(e, t, i, r.index)),
                null !== lt)
              )
                ((lt.__ngLastListenerFn__ || lt).__ngNextListenerFn__ = o),
                  (lt.__ngLastListenerFn__ = o),
                  (U = !1);
              else {
                o = Zp(r, t, I, o, !1);
                const wt = n.listen(Te, i, o);
                F.push(o, wt), D && D.push(i, ge, He, He + 1);
              }
            } else o = Zp(r, t, I, o, !1);
            const $ = r.outputs;
            let ue;
            if (U && null !== $ && (ue = $[i])) {
              const De = ue.length;
              if (De)
                for (let Te = 0; Te < De; Te += 2) {
                  const Qt = t[ue[Te]][ue[Te + 1]].subscribe(o),
                    ui = F.length;
                  F.push(o, Qt), D && D.push(i, r.index, ui, -(ui + 1));
                }
            }
          })(o, i, i[tt], s, e, t, r),
          Zc
        );
      }
      function qp(e, t, n, r) {
        try {
          return wi(6, t, n), !1 !== n(r);
        } catch (i) {
          return dp(e, i), !1;
        } finally {
          wi(7, t, n);
        }
      }
      function Zp(e, t, n, r, i) {
        return function o(s) {
          if (s === Function) return r;
          _a(e.componentOffset > -1 ? qr(e.index, t) : t);
          let p = qp(t, n, r, s),
            D = o.__ngNextListenerFn__;
          for (; D; ) (p = qp(t, n, D, s) && p), (D = D.__ngNextListenerFn__);
          return i && !1 === p && s.preventDefault(), p;
        };
      }
      function Yp(e = 1) {
        return (function Ko(e) {
          return (st.lFrame.contextLView = (function Qo(e, t) {
            for (; e > 0; ) (t = t[ti]), e--;
            return t;
          })(e, st.lFrame.contextLView))[Zt];
        })(e);
      }
      function Yu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Ho(e) {
        return (e >> 17) & 32767;
      }
      function Kc(e) {
        return 2 | e;
      }
      function ns(e) {
        return (131068 & e) >> 2;
      }
      function Qc(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Xc(e) {
        return 1 | e;
      }
      function og(e, t, n, r, i) {
        const o = e[n + 1],
          s = null === t;
        let l = r ? Ho(o) : ns(o),
          p = !1;
        for (; 0 !== l && (!1 === p || s); ) {
          const I = e[l + 1];
          SC(e[l], t) && ((p = !0), (e[l + 1] = r ? Xc(I) : Kc(I))),
            (l = r ? Ho(I) : ns(I));
        }
        p && (e[n + 1] = r ? Kc(o) : Xc(o));
      }
      function SC(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && gs(e, t) >= 0)
        );
      }
      function Jc(e, t) {
        return (
          (function io(e, t, n, r) {
            const i = ve(),
              o = Ft(),
              s = (function mo(e) {
                const t = st.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            o.firstUpdatePass &&
              (function pg(e, t, n, r) {
                const i = e.data;
                if (null === i[n + 1]) {
                  const o = i[Xn()],
                    s = (function hg(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function vg(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(o, r) &&
                    null === t &&
                    !s &&
                    (t = !1),
                    (t = (function xC(e, t, n, r) {
                      const i = (function m(e) {
                        const t = st.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let o = r ? t.residualClasses : t.residualStyles;
                      if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Ia((n = ed(null, e, t, n, r)), t.attrs, r)),
                          (o = null));
                      else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== i)
                          if (((n = ed(i, e, t, n, r)), null === o)) {
                            let p = (function LC(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== ns(r)) return e[Ho(r)];
                            })(e, t, r);
                            void 0 !== p &&
                              Array.isArray(p) &&
                              ((p = ed(null, e, t, p[1], r)),
                              (p = Ia(p, t.attrs, r)),
                              (function kC(e, t, n, r) {
                                e[Ho(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, p));
                          } else
                            o = (function VC(e, t, n) {
                              let r;
                              const i = t.directiveEnd;
                              for (
                                let o = 1 + t.directiveStylingLast;
                                o < i;
                                o++
                              )
                                r = Ia(r, e[o].hostAttrs, n);
                              return Ia(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== o &&
                          (r
                            ? (t.residualClasses = o)
                            : (t.residualStyles = o)),
                        n
                      );
                    })(i, o, t, r)),
                    (function MC(e, t, n, r, i, o) {
                      let s = o ? t.classBindings : t.styleBindings,
                        l = Ho(s),
                        p = ns(s);
                      e[r] = n;
                      let I,
                        D = !1;
                      if (
                        (Array.isArray(n)
                          ? ((I = n[1]),
                            (null === I || gs(n, I) > 0) && (D = !0))
                          : (I = n),
                        i)
                      )
                        if (0 !== p) {
                          const U = Ho(e[l + 1]);
                          (e[r + 1] = Yu(U, l)),
                            0 !== U && (e[U + 1] = Qc(e[U + 1], r)),
                            (e[l + 1] = (function EC(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[l + 1], r));
                        } else
                          (e[r + 1] = Yu(l, 0)),
                            0 !== l && (e[l + 1] = Qc(e[l + 1], r)),
                            (l = r);
                      else
                        (e[r + 1] = Yu(p, 0)),
                          0 === l ? (l = r) : (e[p + 1] = Qc(e[p + 1], r)),
                          (p = r);
                      D && (e[r + 1] = Kc(e[r + 1])),
                        og(e, I, r, !0),
                        og(e, I, r, !1),
                        (function bC(e, t, n, r, i) {
                          const o = i ? e.residualClasses : e.residualStyles;
                          null != o &&
                            "string" == typeof t &&
                            gs(o, t) >= 0 &&
                            (n[r + 1] = Xc(n[r + 1]));
                        })(t, I, e, r, o),
                        (s = Yu(l, p)),
                        o ? (t.classBindings = s) : (t.styleBindings = s);
                    })(i, o, t, n, s, r);
                }
              })(o, e, s, r),
              t !== mt &&
                Br(i, s, t) &&
                (function mg(e, t, n, r, i, o, s, l) {
                  if (!(3 & t.type)) return;
                  const p = e.data,
                    D = p[l + 1],
                    I = (function wC(e) {
                      return 1 == (1 & e);
                    })(D)
                      ? yg(p, t, n, i, ns(D), s)
                      : void 0;
                  Ku(I) ||
                    (Ku(o) ||
                      ((function CC(e) {
                        return 2 == (2 & e);
                      })(D) &&
                        (o = yg(p, null, n, i, l, s))),
                    (function v_(e, t, n, r, i) {
                      if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let o = -1 === r.indexOf("-") ? void 0 : hu.DashCase;
                        null == i
                          ? e.removeStyle(n, r, o)
                          : ("string" == typeof i &&
                              i.endsWith("!important") &&
                              ((i = i.slice(0, -10)), (o |= hu.Important)),
                            e.setStyle(n, r, i, o));
                      }
                    })(
                      r,
                      s,
                      (function hr(e, t) {
                        return rn(t[e]);
                      })(Xn(), n),
                      i,
                      o
                    ));
                })(
                  o,
                  o.data[Xn()],
                  i,
                  i[tt],
                  e,
                  (i[s + 1] = (function HC(e, t) {
                    return (
                      null == e ||
                        "" === e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = rt(jo(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  s
                );
          })(e, t, null, !0),
          Jc
        );
      }
      function ed(e, t, n, r, i) {
        let o = null;
        const s = n.directiveEnd;
        let l = n.directiveStylingLast;
        for (
          -1 === l ? (l = n.directiveStart) : l++;
          l < s && ((o = t[l]), (r = Ia(r, o.hostAttrs, i)), o !== e);

        )
          l++;
        return null !== e && (n.directiveStylingLast = l), r;
      }
      function Ia(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const s = t[o];
            "number" == typeof s
              ? (i = s)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                bi(e, s, !!n || t[++o]));
          }
        return void 0 === e ? null : e;
      }
      function yg(e, t, n, r, i, o) {
        const s = null === t;
        let l;
        for (; i > 0; ) {
          const p = e[i],
            D = Array.isArray(p),
            I = D ? p[1] : p,
            F = null === I;
          let U = n[i + 1];
          U === mt && (U = F ? pt : void 0);
          let $ = F ? Tl(U, r) : I === r ? U : void 0;
          if ((D && !Ku($) && ($ = Tl(p, r)), Ku($) && ((l = $), s))) return l;
          const ue = e[i + 1];
          i = s ? Ho(ue) : ns(ue);
        }
        if (null !== t) {
          let p = o ? t.residualClasses : t.residualStyles;
          null != p && (l = Tl(p, r));
        }
        return l;
      }
      function Ku(e) {
        return void 0 !== e;
      }
      function _g(e, t = "") {
        const n = ve(),
          r = Ft(),
          i = e + ot,
          o = r.firstCreatePass ? Ts(r, i, 1, t, null) : r.data[i],
          s = Dg(r, n, o, t, e);
        (n[i] = s), Ya() && vu(r, n, s, o), ji(o, !1);
      }
      let Dg = (e, t, n, r, i) => (
        Bo(!0),
        (function pu(e, t) {
          return e.createText(t);
        })(t[tt], r)
      );
      const rs = void 0;
      var cE = [
        "en",
        [["a", "p"], ["AM", "PM"], rs],
        [["AM", "PM"], rs, rs],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        rs,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        rs,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", rs, "{1} 'at' {0}", rs],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function lE(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let js = {};
      function nd(e) {
        const t = (function dE(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Hg(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = Hg(r)), n)) return n;
        if ("en" === r) return cE;
        throw new he(701, !1);
      }
      function Ug(e) {
        return nd(e)[Us.PluralCase];
      }
      function Hg(e) {
        return (
          e in js ||
            (js[e] =
              It.ng &&
              It.ng.common &&
              It.ng.common.locales &&
              It.ng.common.locales[e]),
          js[e]
        );
      }
      var Us = (function (e) {
        return (
          (e[(e.LocaleId = 0)] = "LocaleId"),
          (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (e[(e.DaysFormat = 3)] = "DaysFormat"),
          (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
          (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
          (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
          (e[(e.Eras = 7)] = "Eras"),
          (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (e[(e.WeekendRange = 9)] = "WeekendRange"),
          (e[(e.DateFormat = 10)] = "DateFormat"),
          (e[(e.TimeFormat = 11)] = "TimeFormat"),
          (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
          (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
          (e[(e.NumberFormats = 14)] = "NumberFormats"),
          (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
          (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
          (e[(e.CurrencyName = 17)] = "CurrencyName"),
          (e[(e.Currencies = 18)] = "Currencies"),
          (e[(e.Directionality = 19)] = "Directionality"),
          (e[(e.PluralCase = 20)] = "PluralCase"),
          (e[(e.ExtraData = 21)] = "ExtraData"),
          e
        );
      })(Us || {});
      const Hs = "en-US";
      let $g = Hs;
      function od(e, t, n, r, i) {
        if (((e = de(e)), Array.isArray(e)))
          for (let o = 0; o < e.length; o++) od(e[o], t, n, r, i);
        else {
          const o = Ft(),
            s = ve(),
            l = Qn();
          let p = es(e) ? e : de(e.provide);
          const D = gh(e),
            I = 1048575 & l.providerIndexes,
            F = l.directiveStart,
            U = l.providerIndexes >> 20;
          if (es(e) || !e.multi) {
            const $ = new ta(D, i, Is),
              ue = ad(p, t, i ? I : I + U, F);
            -1 === ue
              ? (bl(eu(l, s), o, p),
                sd(o, e, t.length),
                t.push(p),
                l.directiveStart++,
                l.directiveEnd++,
                i && (l.providerIndexes += 1048576),
                n.push($),
                s.push($))
              : ((n[ue] = $), (s[ue] = $));
          } else {
            const $ = ad(p, t, I + U, F),
              ue = ad(p, t, I, I + U),
              Te = ue >= 0 && n[ue];
            if ((i && !Te) || (!i && !($ >= 0 && n[$]))) {
              bl(eu(l, s), o, p);
              const He = (function lw(e, t, n, r, i) {
                const o = new ta(e, n, Is);
                return (
                  (o.multi = []),
                  (o.index = t),
                  (o.componentProviders = 0),
                  pm(o, i, r && !n),
                  o
                );
              })(i ? uw : aw, n.length, i, r, D);
              !i && Te && (n[ue].providerFactory = He),
                sd(o, e, t.length, 0),
                t.push(p),
                l.directiveStart++,
                l.directiveEnd++,
                i && (l.providerIndexes += 1048576),
                n.push(He),
                s.push(He);
            } else sd(o, e, $ > -1 ? $ : ue, pm(n[i ? ue : $], D, !i && r));
            !i && r && Te && n[ue].componentProviders++;
          }
        }
      }
      function sd(e, t, n, r) {
        const i = es(t),
          o = (function q_(e) {
            return !!e.useClass;
          })(t);
        if (i || o) {
          const p = (o ? de(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const I = D.indexOf(n);
              -1 === I ? D.push(n, [r, p]) : D[I + 1].push(r, p);
            } else D.push(n, p);
          }
        }
      }
      function pm(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function ad(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function aw(e, t, n, r) {
        return ud(this.multi, []);
      }
      function uw(e, t, n, r) {
        const i = this.multi;
        let o;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            l = Xo(n, n[Ae], this.providerFactory.index, r);
          (o = l.slice(0, s)), ud(i, o);
          for (let p = s; p < l.length; p++) o.push(l[p]);
        } else (o = []), ud(i, o);
        return o;
      }
      function ud(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function gm(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function sw(e, t, n) {
              const r = Ft();
              if (r.firstCreatePass) {
                const i = dr(e);
                od(n, r.data, r.blueprint, i, !0),
                  od(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class is {}
      class mm {}
      function cw(e, t) {
        return new ld(e, t ?? null, []);
      }
      class ld extends is {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new vp(this));
          const i = dn(t);
          (this._bootstrapComponents = Ro(i.bootstrap)),
            (this._r3Injector = Th(
              t,
              n,
              [
                { provide: is, useValue: this },
                { provide: Pu, useValue: this.componentFactoryResolver },
                ...r,
              ],
              rt(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class cd extends mm {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new ld(this.moduleType, t, []);
        }
      }
      class ym extends is {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new vp(this)),
            (this.instance = null);
          const n = new Su(
            [
              ...t.providers,
              { provide: is, useValue: this },
              { provide: Pu, useValue: this.componentFactoryResolver },
            ],
            t.parent || bu(),
            t.debugName,
            new Set(["environment"])
          );
          (this.injector = n),
            t.runEnvironmentInitializers && n.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function vm(e, t, n = null) {
        return new ym({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      let fw = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const r = dh(0, n.type),
                i =
                  r.length > 0
                    ? vm([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n, i);
            }
            return this.cachedInjectors.get(n);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static #e = (this.ɵprov = ct({
            token: e,
            providedIn: "environment",
            factory: () => new e(sn(vo)),
          }));
        }
        return e;
      })();
      function _m(e) {
        e.getStandaloneInjector = (t) =>
          t.get(fw).getOrCreateStandaloneInjector(e);
      }
      function Sm(e, t, n, r) {
        return (function Om(e, t, n, r, i, o) {
          const s = t + n;
          return Br(e, s, i)
            ? Co(e, s + 1, o ? r.call(o, i) : r(i))
            : Fa(e, s + 1);
        })(ve(), Sr(), e, t, n, r);
      }
      function Am(e, t, n, r, i) {
        return (function Nm(e, t, n, r, i, o, s) {
          const l = t + n;
          return ts(e, l, i, o)
            ? Co(e, l + 2, s ? r.call(s, i, o) : r(i, o))
            : Fa(e, l + 2);
        })(ve(), Sr(), e, t, n, r, i);
      }
      function Im(e, t, n, r, i, o, s) {
        return (function Rm(e, t, n, r, i, o, s, l, p) {
          const D = t + n;
          return Hi(e, D, i, o, s, l)
            ? Co(e, D + 4, p ? r.call(p, i, o, s, l) : r(i, o, s, l))
            : Fa(e, D + 4);
        })(ve(), Sr(), e, t, n, r, i, o, s);
      }
      function Tm(e, t, n, r, i, o, s, l) {
        const p = Sr() + e,
          D = ve(),
          I = Hi(D, p, n, r, i, o);
        return Br(D, p + 4, s) || I
          ? Co(D, p + 5, l ? t.call(l, n, r, i, o, s) : t(n, r, i, o, s))
          : (function Ma(e, t) {
              return e[t];
            })(D, p + 5);
      }
      function Fa(e, t) {
        const n = e[t];
        return n === mt ? void 0 : n;
      }
      function Fw() {
        return this._results[Symbol.iterator]();
      }
      class fd {
        static #e = Symbol.iterator;
        get changes() {
          return this._changes || (this._changes = new _o());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = fd.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = Fw);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = (function Ui(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function Cv(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                o = t[r];
              if ((n && ((i = n(i)), (o = n(o))), o !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      function Lw(e, t, n, r = !0) {
        const i = t[Ae];
        if (
          ((function c_(e, t, n, r) {
            const i = un + r,
              o = n.length;
            r > 0 && (n[i - 1][Vn] = t),
              r < o - un
                ? ((t[Vn] = n[i]), cf(n, un + r, t))
                : (n.push(t), (t[Vn] = null)),
              (t[Pt] = n);
            const s = t[Bn];
            null !== s &&
              n !== s &&
              (function d_(e, t) {
                const n = e[an];
                t[Ut] !== t[Pt][Pt][Ut] && (e[Yi] = !0),
                  null === n ? (e[an] = [t]) : n.push(t);
              })(s, t);
            const l = t[lr];
            null !== l && l.insertView(e), (t[Je] |= 128);
          })(i, t, e, n),
          r)
        ) {
          const o = zl(n, e),
            s = t[tt],
            l = yu(s, e[cr]);
          null !== l &&
            (function a_(e, t, n, r, i, o) {
              (r[Wt] = i), (r[Jt] = t), da(e, r, n, 1, i, o);
            })(i, e[Jt], s, t, l, o);
        }
      }
      let La = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Bw);
        }
        return e;
      })();
      const kw = La,
        Vw = class extends kw {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n);
          }
          createEmbeddedViewImpl(t, n, r) {
            const i = (function xw(e, t, n, r) {
              const i = t.tView,
                l = xu(
                  e,
                  i,
                  n,
                  4096 & e[Je] ? 4096 : 16,
                  null,
                  t,
                  null,
                  null,
                  null,
                  r?.injector ?? null,
                  r?.hydrationInfo ?? null
                );
              l[Bn] = e[t.index];
              const D = e[lr];
              return (
                null !== D && (l[lr] = D.createEmbeddedView(i)), xc(i, l, n), l
              );
            })(this._declarationLView, this._declarationTContainer, t, {
              injector: n,
              hydrationInfo: r,
            });
            return new Ea(i);
          }
        };
      function Bw() {
        return tl(Qn(), ve());
      }
      function tl(e, t) {
        return 4 & e.type ? new Vw(t, e, bs(e, t)) : null;
      }
      let rl = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Gw);
        }
        return e;
      })();
      function Gw() {
        return Um(Qn(), ve());
      }
      const Ww = rl,
        Bm = class extends Ww {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return bs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Zr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = tu(this._hostTNode, this._hostLView);
            if (El(t)) {
              const n = ra(t, this._hostLView),
                r = na(t);
              return new Zr(n[Ae].data[r + 8], n);
            }
            return new Zr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = jm(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - un;
          }
          createEmbeddedView(t, n, r) {
            let i, o;
            "number" == typeof r
              ? (i = r)
              : null != r && ((i = r.index), (o = r.injector));
            const l = t.createEmbeddedViewImpl(n || {}, o, null);
            return this.insertImpl(l, i, false), l;
          }
          createComponent(t, n, r, i, o) {
            const s =
              t &&
              !(function oa(e) {
                return "function" == typeof e;
              })(t);
            let l;
            if (s) l = n;
            else {
              const De = n || {};
              (l = De.index),
                (r = De.injector),
                (i = De.projectableNodes),
                (o = De.environmentInjector || De.ngModuleRef);
            }
            const p = s ? t : new wa(ft(t)),
              D = r || this.parentInjector;
            if (!o && null == p.ngModule) {
              const Te = (s ? D : this.parentInjector).get(vo, null);
              Te && (o = Te);
            }
            ft(p.componentType ?? {});
            const $ = p.create(D, i, null, o);
            return this.insertImpl($.hostView, l, false), $;
          }
          insert(t, n) {
            return this.insertImpl(t, n, !1);
          }
          insertImpl(t, n, r) {
            const i = t._lView;
            if (
              (function jd(e) {
                return gn(e[Pt]);
              })(i)
            ) {
              const p = this.indexOf(t);
              if (-1 !== p) this.detach(p);
              else {
                const D = i[Pt],
                  I = new Bm(D, D[Jt], D[Pt]);
                I.detach(I.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              l = this._lContainer;
            return (
              Lw(l, i, s, !r), t.attachToViewContainerRef(), cf(hd(l), s, t), t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = jm(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = mu(this._lContainer, n);
            r && (ru(hd(this._lContainer), n), jl(r[Ae], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = mu(this._lContainer, n);
            return r && null != ru(hd(this._lContainer), n) ? new Ea(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function jm(e) {
        return e[8];
      }
      function hd(e) {
        return e[8] || (e[8] = []);
      }
      function Um(e, t) {
        let n;
        const r = t[e.index];
        return (
          gn(r)
            ? (n = r)
            : ((n = sp(r, t, null, e)), (t[e.index] = n), Lu(t, n)),
          Hm(n, t, e, r),
          new Bm(n, e, t)
        );
      }
      let Hm = function $m(e, t, n, r) {
        if (e[cr]) return;
        let i;
        (i =
          8 & n.type
            ? rn(r)
            : (function qw(e, t) {
                const n = e[tt],
                  r = n.createComment(""),
                  i = kr(t, e);
                return (
                  Jo(
                    n,
                    yu(n, i),
                    r,
                    (function g_(e, t) {
                      return e.nextSibling(t);
                    })(n, i),
                    !1
                  ),
                  r
                );
              })(t, n)),
          (e[cr] = i);
      };
      class pd {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new pd(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class gd {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let o = 0; o < r; o++) {
              const s = n.getByIndex(o);
              i.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new gd(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Qm(t, n).matches && this.queries[n].setDirty();
        }
      }
      class zm {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class md {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              o = this.getByIndex(r).embeddedTView(t, i);
            o &&
              ((o.indexInDeclarationView = r),
              null !== n ? n.push(o) : (n = [o]));
          }
          return null !== n ? new md(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class yd {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new yd(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const o = r[i];
              this.matchTNodeWithReadOption(t, n, Kw(n, o)),
                this.matchTNodeWithReadOption(t, n, nu(n, t, o, !1, !1));
            }
          else
            r === La
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, nu(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === va || i === rl || (i === La && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const o = nu(n, t, i, !1, !1);
                null !== o && this.addMatch(n.index, o);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function Kw(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function Xw(e, t, n, r) {
        return -1 === n
          ? (function Qw(e, t) {
              return 11 & e.type ? bs(e, t) : 4 & e.type ? tl(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function Jw(e, t, n) {
              return n === va
                ? bs(t, e)
                : n === La
                ? tl(t, e)
                : n === rl
                ? Um(t, e)
                : void 0;
            })(e, t, r)
          : Xo(e, e[Ae], n, t);
      }
      function Gm(e, t, n, r) {
        const i = t[lr].queries[r];
        if (null === i.matches) {
          const o = e.data,
            s = n.matches,
            l = [];
          for (let p = 0; p < s.length; p += 2) {
            const D = s[p];
            l.push(D < 0 ? null : Xw(t, o[D], s[p + 1], n.metadata.read));
          }
          i.matches = l;
        }
        return i.matches;
      }
      function vd(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          o = i.matches;
        if (null !== o) {
          const s = Gm(e, t, i, n);
          for (let l = 0; l < o.length; l += 2) {
            const p = o[l];
            if (p > 0) r.push(s[l / 2]);
            else {
              const D = o[l + 1],
                I = t[-p];
              for (let F = un; F < I.length; F++) {
                const U = I[F];
                U[Bn] === U[Pt] && vd(U[Ae], U, D, r);
              }
              if (null !== I[an]) {
                const F = I[an];
                for (let U = 0; U < F.length; U++) {
                  const $ = F[U];
                  vd($[Ae], $, D, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Wm(e) {
        const t = ve(),
          n = Ft(),
          r = C();
        T(r + 1);
        const i = Qm(n, r);
        if (
          e.dirty &&
          (function Ha(e) {
            return 4 == (4 & e[Je]);
          })(t) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const o = i.crossesNgTemplate ? vd(n, t, r, []) : Gm(n, t, i, r);
            e.reset(o, mD), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function qm(e, t, n, r) {
        const i = Ft();
        if (i.firstCreatePass) {
          const o = Qn();
          (function Km(e, t, n) {
            null === e.queries && (e.queries = new md()),
              e.queries.track(new yd(t, n));
          })(i, new zm(t, n, r), o.index),
            (function nM(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        !(function Ym(e, t, n) {
          const r = new fd(4 == (4 & n));
          (function YD(e, t, n, r) {
            const i = up(t);
            i.push(n), e.firstCreatePass && lp(e).push(r, i.length - 1);
          })(e, t, r, r.destroy),
            null === t[lr] && (t[lr] = new gd()),
            t[lr].queries.push(new pd(r));
        })(i, ve(), n);
      }
      function Zm() {
        return (function tM(e, t) {
          return e[lr].queries[t].queryList;
        })(ve(), C());
      }
      function Qm(e, t) {
        return e.queries.getByIndex(t);
      }
      function _d(e) {
        return !!dn(e);
      }
      const py = new zt("Application Initializer");
      let Md = (() => {
          class e {
            constructor() {
              (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise((n, r) => {
                  (this.resolve = n), (this.reject = r);
                })),
                (this.appInits = bt(py, { optional: !0 }) ?? []);
            }
            runInitializers() {
              if (this.initialized) return;
              const n = [];
              for (const i of this.appInits) {
                const o = i();
                if (qc(o)) n.push(o);
                else if (zp(o)) {
                  const s = new Promise((l, p) => {
                    o.subscribe({ complete: l, error: p });
                  });
                  n.push(s);
                }
              }
              const r = () => {
                (this.done = !0), this.resolve();
              };
              Promise.all(n)
                .then(() => {
                  r();
                })
                .catch((i) => {
                  this.reject(i);
                }),
                0 === n.length && r(),
                (this.initialized = !0);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = ct({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        gy = (() => {
          class e {
            log(n) {
              console.log(n);
            }
            warn(n) {
              console.warn(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = ct({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            }));
          }
          return e;
        })();
      const ol = new zt("LocaleId", {
          providedIn: "root",
          factory: () =>
            bt(ol, Xe.Optional | Xe.SkipSelf) ||
            (function MM() {
              return (typeof $localize < "u" && $localize.locale) || Hs;
            })(),
        }),
        bM = new zt("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      let my = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new J.X(!1));
          }
          add() {
            this.hasPendingTasks.next(!0);
            const n = this.taskId++;
            return this.pendingTasks.add(n), n;
          }
          remove(n) {
            this.pendingTasks.delete(n),
              0 === this.pendingTasks.size && this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(), this.hasPendingTasks.next(!1);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = ct({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      class AM {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let IM = (() => {
        class e {
          compileModuleSync(n) {
            return new cd(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              o = Ro(dn(n).declarations).reduce((s, l) => {
                const p = ft(l);
                return p && s.push(new wa(p)), s;
              }, []);
            return new AM(r, o);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = ct({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      const Dy = new zt(""),
        Cy = new zt("");
      let Ad,
        ZM = (() => {
          class e {
            constructor(n, r, i) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                Ad ||
                  ((function YM(e) {
                    Ad = e;
                  })(i),
                  i.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      pr.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                queueMicrotask(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let o = -1;
              r &&
                r > 0 &&
                (o = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (s) => s.timeoutId !== o
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: o, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, i) {
              return [];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(sn(pr), sn(Ey), sn(Cy));
            });
            static #t = (this.ɵprov = ct({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        Ey = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return Ad?.findTestabilityInTree(this, n, r) ?? null;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = ct({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            }));
          }
          return e;
        })(),
        $o = null;
      const wy = new zt("AllowMultipleToken"),
        Id = new zt("PlatformDestroyListeners"),
        Td = new zt("appBootstrapListener");
      class XM {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function Sy(e, t, n = []) {
        const r = `Platform: ${t}`,
          i = new zt(r);
        return (o = []) => {
          let s = Od();
          if (!s || s.injector.get(wy, !1)) {
            const l = [...n, ...o, { provide: i, useValue: !0 }];
            e
              ? e(l)
              : (function JM(e) {
                  if ($o && !$o.get(wy, !1)) throw new he(400, !1);
                  (function My() {
                    !(function M(e) {
                      zo = e;
                    })(() => {
                      throw new he(600, !1);
                    });
                  })(),
                    ($o = e);
                  const t = e.get(Iy);
                  (function by(e) {
                    e.get(yh, null)?.forEach((n) => n());
                  })(e);
                })(
                  (function Ay(e = [], t) {
                    return ro.create({
                      name: t,
                      providers: [
                        { provide: nc, useValue: "platform" },
                        { provide: Id, useValue: new Set([() => ($o = null)]) },
                        ...e,
                      ],
                    });
                  })(l, r)
                );
          }
          return (function tb(e) {
            const t = Od();
            if (!t) throw new he(401, !1);
            return t;
          })();
        };
      }
      function Od() {
        return $o?.get(Iy) ?? null;
      }
      let Iy = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const i = (function nb(e = "zone.js", t) {
              return "noop" === e ? new PD() : "zone.js" === e ? new pr(t) : e;
            })(
              r?.ngZone,
              (function Ty(e) {
                return {
                  enableLongStackTrace: !1,
                  shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
                  shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
                };
              })({
                eventCoalescing: r?.ngZoneEventCoalescing,
                runCoalescing: r?.ngZoneRunCoalescing,
              })
            );
            return i.run(() => {
              const o = (function dw(e, t, n) {
                  return new ld(e, t, n);
                })(
                  n.moduleType,
                  this.injector,
                  (function Fy(e) {
                    return [
                      { provide: pr, useFactory: e },
                      {
                        provide: ga,
                        multi: !0,
                        useFactory: () => {
                          const t = bt(ib, { optional: !0 });
                          return () => t.initialize();
                        },
                      },
                      { provide: Ry, useFactory: rb },
                      { provide: Fh, useFactory: xh },
                    ];
                  })(() => i)
                ),
                s = o.injector.get(Uo, null);
              return (
                i.runOutsideAngular(() => {
                  const l = i.onError.subscribe({
                    next: (p) => {
                      s.handleError(p);
                    },
                  });
                  o.onDestroy(() => {
                    al(this._modules, o), l.unsubscribe();
                  });
                }),
                (function Oy(e, t, n) {
                  try {
                    const r = n();
                    return qc(r)
                      ? r.catch((i) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(i)), i)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(s, i, () => {
                  const l = o.injector.get(Md);
                  return (
                    l.runInitializers(),
                    l.donePromise.then(
                      () => (
                        (function zg(e) {
                          vt(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              ($g = e.toLowerCase().replace(/_/g, "-"));
                        })(o.injector.get(ol, Hs) || Hs),
                        this._moduleDoBootstrap(o),
                        o
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const i = Ny({}, r);
            return (function KM(e, t, n) {
              const r = new cd(n);
              return Promise.resolve(r);
            })(0, 0, n).then((o) => this.bootstrapModuleFactory(o, i));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(Gs);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((i) => r.bootstrap(i));
            else {
              if (!n.instance.ngDoBootstrap) throw new he(-403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new he(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(Id, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(sn(ro));
          });
          static #t = (this.ɵprov = ct({
            token: e,
            factory: e.ɵfac,
            providedIn: "platform",
          }));
        }
        return e;
      })();
      function Ny(e, t) {
        return Array.isArray(t) ? t.reduce(Ny, e) : { ...e, ...t };
      }
      let Gs = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = bt(Ry)),
              (this.zoneIsStable = bt(Fh)),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = bt(my).hasPendingTasks.pipe(
                (0, Ce.w)((n) => (n ? (0, ee.of)(!1) : this.zoneIsStable)),
                (function Re(e, t = Be.y) {
                  return (
                    (e = e ?? St),
                    (0, _e.e)((n, r) => {
                      let i,
                        o = !0;
                      n.subscribe(
                        (0, be.x)(r, (s) => {
                          const l = t(s);
                          (o || !e(i, l)) && ((o = !1), (i = l), r.next(s));
                        })
                      );
                    })
                  );
                })(),
                ie()
              )),
              (this._injector = bt(vo));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const i = n instanceof Ch;
            if (!this._injector.get(Md).done)
              throw (!i && _n(n), new he(405, !1));
            let s;
            (s = i ? n : this._injector.get(Pu).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const l = (function QM(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(is),
              D = s.create(ro.NULL, [], r || s.selector, l),
              I = D.location.nativeElement,
              F = D.injector.get(Dy, null);
            return (
              F?.registerApplication(I),
              D.onDestroy(() => {
                this.detachView(D.hostView),
                  al(this.components, D),
                  F?.unregisterApplication(I);
              }),
              this._loadComponent(D),
              D
            );
          }
          tick() {
            if (this._runningTick) throw new he(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this.internalErrorHandler(n);
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            al(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(Td, []);
            r.push(...this._bootstrapListeners), r.forEach((i) => i(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => al(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new he(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = ct({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function al(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const Ry = new zt("", {
        providedIn: "root",
        factory: () => bt(Uo).handleError.bind(void 0),
      });
      function rb() {
        const e = bt(pr),
          t = bt(Uo);
        return (n) => e.runOutsideAngular(() => t.handleError(n));
      }
      let ib = (() => {
        class e {
          constructor() {
            (this.zone = bt(pr)), (this.applicationRef = bt(Gs));
          }
          initialize() {
            this._onMicrotaskEmptySubscription ||
              (this._onMicrotaskEmptySubscription =
                this.zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this.zone.run(() => {
                      this.applicationRef.tick();
                    });
                  },
                }));
          }
          ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = ct({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function sb() {
        return !1;
      }
      let ab = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = ub);
        }
        return e;
      })();
      function ub(e) {
        return (function lb(e, t, n) {
          if (Mr(e) && !n) {
            const r = qr(e.index, t);
            return new Ea(r, r);
          }
          return 47 & e.type ? new Ea(t[Ut], t) : null;
        })(Qn(), ve(), 16 == (16 & e));
      }
      class Vy {
        constructor() {}
        supports(t) {
          return ju(t);
        }
        create(t) {
          return new gb(t);
        }
      }
      const pb = (e, t) => t;
      class gb {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || pb);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            o = null;
          for (; n || r; ) {
            const s = !r || (n && n.currentIndex < jy(r, i, o)) ? n : r,
              l = jy(s, i, o),
              p = s.currentIndex;
            if (s === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) i++;
            else {
              o || (o = []);
              const D = l - i,
                I = p - i;
              if (D != I) {
                for (let U = 0; U < D; U++) {
                  const $ = U < o.length ? o[U] : (o[U] = 0),
                    ue = $ + U;
                  I <= ue && ue < D && (o[U] = $ + 1);
                }
                o[s.previousIndex] = I - D;
              }
            }
            l !== p && t(s, l, p);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !ju(t))) throw new he(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            o,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let l = 0; l < this.length; l++)
              (o = t[l]),
                (s = this._trackByFn(l, o)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, o, s, l)),
                    Object.is(n.item, o) || this._addIdentityChange(n, o))
                  : ((n = this._mismatch(n, o, s, l)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function H0(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (l) => {
                (s = this._trackByFn(i, l)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, l, s, i)),
                      Object.is(n.item, l) || this._addIdentityChange(n, l))
                    : ((n = this._mismatch(n, l, s, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let o;
          return (
            null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, o, i))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, i))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, o, i))
              : (t = this._addAfter(new mb(n, r), o, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let o =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== o
              ? (t = this._reinsertAfter(o, t._prev, i))
              : t.currentIndex != i &&
                ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            o = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = o) : (i._nextRemoved = o),
            null === o ? (this._removalsTail = i) : (o._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new By()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new By()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class mb {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class yb {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class By {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new yb()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function jy(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class Uy {
        constructor() {}
        supports(t) {
          return t instanceof Map || kc(t);
        }
        create() {
          return new vb();
        }
      }
      class vb {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || kc(t))) throw new he(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const o = i._prev,
              s = i._next;
            return (
              o && (o._next = s),
              s && (s._prev = o),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new _b(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class _b {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Hy() {
        return new xd([new Vy()]);
      }
      let xd = (() => {
        class e {
          static #e = (this.ɵprov = ct({
            token: e,
            providedIn: "root",
            factory: Hy,
          }));
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Hy()),
              deps: [[e, new su(), new ou()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new he(901, !1);
          }
        }
        return e;
      })();
      function $y() {
        return new Ld([new Uy()]);
      }
      let Ld = (() => {
        class e {
          static #e = (this.ɵprov = ct({
            token: e,
            providedIn: "root",
            factory: $y,
          }));
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || $y()),
              deps: [[e, new su(), new ou()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new he(901, !1);
          }
        }
        return e;
      })();
      const Eb = Sy(null, "core", []);
      let wb = (() => {
        class e {
          constructor(n) {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(sn(Gs));
          });
          static #t = (this.ɵmod = Wi({ type: e }));
          static #n = (this.ɵinj = on({}));
        }
        return e;
      })();
      function Fb(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
      function Lb(e) {
        const t = ft(e);
        if (!t) return null;
        const n = new wa(t);
        return {
          get selector() {
            return n.selector;
          },
          get type() {
            return n.componentType;
          },
          get inputs() {
            return n.inputs;
          },
          get outputs() {
            return n.outputs;
          },
          get ngContentSelectors() {
            return n.ngContentSelectors;
          },
          get isStandalone() {
            return t.standalone;
          },
          get isSignal() {
            return t.signals;
          },
        };
      }
    },
    95: ($e, pe, R) => {
      R.d(pe, {
        Fj: () => K,
        NI: () => Dr,
        u: () => Je,
        cw: () => Et,
        sg: () => ei,
        u5: () => Li,
        JJ: () => ht,
        JL: () => at,
        UX: () => _i,
        kI: () => Ke,
        _Y: () => Ti,
      });
      var f = R(4769),
        G = R(6814),
        N = R(7715),
        le = R(5592),
        J = R(7453),
        ee = R(4829),
        ye = R(9940),
        Ie = R(8251),
        _e = R(7400),
        ie = R(2714),
        Ce = R(7398);
      let Be = (() => {
          class w {
            constructor(v, O) {
              (this._renderer = v),
                (this._elementRef = O),
                (this.onChange = (j) => {}),
                (this.onTouched = () => {});
            }
            setProperty(v, O) {
              this._renderer.setProperty(this._elementRef.nativeElement, v, O);
            }
            registerOnTouched(v) {
              this.onTouched = v;
            }
            registerOnChange(v) {
              this.onChange = v;
            }
            setDisabledState(v) {
              this.setProperty("disabled", v);
            }
            static #e = (this.ɵfac = function (O) {
              return new (O || w)(f.Y36(f.Qsj), f.Y36(f.SBq));
            });
            static #t = (this.ɵdir = f.lG2({ type: w }));
          }
          return w;
        })(),
        be = (() => {
          class w extends Be {
            static #e = (this.ɵfac = (function () {
              let v;
              return function (j) {
                return (v || (v = f.n5z(w)))(j || w);
              };
            })());
            static #t = (this.ɵdir = f.lG2({ type: w, features: [f.qOj] }));
          }
          return w;
        })();
      const Re = new f.OlP("NgValueAccessor"),
        yt = { provide: Re, useExisting: (0, f.Gpc)(() => K), multi: !0 },
        qe = new f.OlP("CompositionEventMode");
      let K = (() => {
        class w extends Be {
          constructor(v, O, j) {
            super(v, O),
              (this._compositionMode = j),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function rt() {
                  const w = (0, G.q)() ? (0, G.q)().getUserAgent() : "";
                  return /android (\d+)/.test(w.toLowerCase());
                })());
          }
          writeValue(v) {
            this.setProperty("value", v ?? "");
          }
          _handleInput(v) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(v);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(v) {
            (this._composing = !1), this._compositionMode && this.onChange(v);
          }
          static #e = (this.ɵfac = function (O) {
            return new (O || w)(f.Y36(f.Qsj), f.Y36(f.SBq), f.Y36(qe, 8));
          });
          static #t = (this.ɵdir = f.lG2({
            type: w,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (O, j) {
              1 & O &&
                f.NdJ("input", function (it) {
                  return j._handleInput(it.target.value);
                })("blur", function () {
                  return j.onTouched();
                })("compositionstart", function () {
                  return j._compositionStart();
                })("compositionend", function (it) {
                  return j._compositionEnd(it.target.value);
                });
            },
            features: [f._Bn([yt]), f.qOj],
          }));
        }
        return w;
      })();
      function fe(w) {
        return (
          null == w ||
          (("string" == typeof w || Array.isArray(w)) && 0 === w.length)
        );
      }
      function de(w) {
        return null != w && "number" == typeof w.length;
      }
      const Le = new f.OlP("NgValidators"),
        Me = new f.OlP("NgAsyncValidators"),
        Ee =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Ke {
        static min(b) {
          return (function he(w) {
            return (b) => {
              if (fe(b.value) || fe(w)) return null;
              const v = parseFloat(b.value);
              return !isNaN(v) && v < w
                ? { min: { min: w, actual: b.value } }
                : null;
            };
          })(b);
        }
        static max(b) {
          return (function jt(w) {
            return (b) => {
              if (fe(b.value) || fe(w)) return null;
              const v = parseFloat(b.value);
              return !isNaN(v) && v > w
                ? { max: { max: w, actual: b.value } }
                : null;
            };
          })(b);
        }
        static required(b) {
          return (function ke(w) {
            return fe(w.value) ? { required: !0 } : null;
          })(b);
        }
        static requiredTrue(b) {
          return (function je(w) {
            return !0 === w.value ? null : { required: !0 };
          })(b);
        }
        static email(b) {
          return (function yn(w) {
            return fe(w.value) || Ee.test(w.value) ? null : { email: !0 };
          })(b);
        }
        static minLength(b) {
          return (function tr(w) {
            return (b) =>
              fe(b.value) || !de(b.value)
                ? null
                : b.value.length < w
                ? {
                    minlength: {
                      requiredLength: w,
                      actualLength: b.value.length,
                    },
                  }
                : null;
          })(b);
        }
        static maxLength(b) {
          return (function Kr(w) {
            return (b) =>
              de(b.value) && b.value.length > w
                ? {
                    maxlength: {
                      requiredLength: w,
                      actualLength: b.value.length,
                    },
                  }
                : null;
          })(b);
        }
        static pattern(b) {
          return (function Nn(w) {
            if (!w) return z;
            let b, v;
            return (
              "string" == typeof w
                ? ((v = ""),
                  "^" !== w.charAt(0) && (v += "^"),
                  (v += w),
                  "$" !== w.charAt(w.length - 1) && (v += "$"),
                  (b = new RegExp(v)))
                : ((v = w.toString()), (b = w)),
              (O) => {
                if (fe(O.value)) return null;
                const j = O.value;
                return b.test(j)
                  ? null
                  : { pattern: { requiredPattern: v, actualValue: j } };
              }
            );
          })(b);
        }
        static nullValidator(b) {
          return null;
        }
        static compose(b) {
          return Dt(b);
        }
        static composeAsync(b) {
          return Qe(b);
        }
      }
      function z(w) {
        return null;
      }
      function X(w) {
        return null != w;
      }
      function se(w) {
        return (0, f.QGY)(w) ? (0, N.D)(w) : w;
      }
      function te(w) {
        let b = {};
        return (
          w.forEach((v) => {
            b = null != v ? { ...b, ...v } : b;
          }),
          0 === Object.keys(b).length ? null : b
        );
      }
      function me(w, b) {
        return b.map((v) => v(w));
      }
      function et(w) {
        return w.map((b) =>
          (function we(w) {
            return !w.validate;
          })(b)
            ? b
            : (v) => b.validate(v)
        );
      }
      function Dt(w) {
        if (!w) return null;
        const b = w.filter(X);
        return 0 == b.length
          ? null
          : function (v) {
              return te(me(v, b));
            };
      }
      function ln(w) {
        return null != w ? Dt(et(w)) : null;
      }
      function Qe(w) {
        if (!w) return null;
        const b = w.filter(X);
        return 0 == b.length
          ? null
          : function (v) {
              return (function re(...w) {
                const b = (0, ye.jO)(w),
                  { args: v, keys: O } = (0, J.D)(w),
                  j = new le.y((Ue) => {
                    const { length: it } = v;
                    if (!it) return void Ue.complete();
                    const Un = new Array(it);
                    let zr = it,
                      br = it;
                    for (let Gr = 0; Gr < it; Gr++) {
                      let Oo = !1;
                      (0, ee.Xf)(v[Gr]).subscribe(
                        (0, Ie.x)(
                          Ue,
                          (Xi) => {
                            Oo || ((Oo = !0), br--), (Un[Gr] = Xi);
                          },
                          () => zr--,
                          void 0,
                          () => {
                            (!zr || !Oo) &&
                              (br || Ue.next(O ? (0, ie.n)(O, Un) : Un),
                              Ue.complete());
                          }
                        )
                      );
                    }
                  });
                return b ? j.pipe((0, _e.Z)(b)) : j;
              })(me(v, b).map(se)).pipe((0, Ce.U)(te));
            };
      }
      function Lt(w) {
        return null != w ? Qe(et(w)) : null;
      }
      function Gt(w, b) {
        return null === w ? [b] : Array.isArray(w) ? [...w, b] : [w, b];
      }
      function Vt(w) {
        return w._rawValidators;
      }
      function vt(w) {
        return w._rawAsyncValidators;
      }
      function Ve(w) {
        return w ? (Array.isArray(w) ? w : [w]) : [];
      }
      function At(w, b) {
        return Array.isArray(w) ? w.includes(b) : w === b;
      }
      function In(w, b) {
        const v = Ve(b);
        return (
          Ve(w).forEach((j) => {
            At(v, j) || v.push(j);
          }),
          v
        );
      }
      function Ge(w, b) {
        return Ve(b).filter((v) => !At(w, v));
      }
      class ct {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(b) {
          (this._rawValidators = b || []),
            (this._composedValidatorFn = ln(this._rawValidators));
        }
        _setAsyncValidators(b) {
          (this._rawAsyncValidators = b || []),
            (this._composedAsyncValidatorFn = Lt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(b) {
          this._onDestroyCallbacks.push(b);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((b) => b()),
            (this._onDestroyCallbacks = []);
        }
        reset(b = void 0) {
          this.control && this.control.reset(b);
        }
        hasError(b, v) {
          return !!this.control && this.control.hasError(b, v);
        }
        getError(b, v) {
          return this.control ? this.control.getError(b, v) : null;
        }
      }
      class hn extends ct {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class on extends ct {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Tn {
        constructor(b) {
          this._cd = b;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let ht = (() => {
          class w extends Tn {
            constructor(v) {
              super(v);
            }
            static #e = (this.ɵfac = function (O) {
              return new (O || w)(f.Y36(on, 2));
            });
            static #t = (this.ɵdir = f.lG2({
              type: w,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (O, j) {
                2 & O &&
                  f.ekj("ng-untouched", j.isUntouched)(
                    "ng-touched",
                    j.isTouched
                  )("ng-pristine", j.isPristine)("ng-dirty", j.isDirty)(
                    "ng-valid",
                    j.isValid
                  )("ng-invalid", j.isInvalid)("ng-pending", j.isPending);
              },
              features: [f.qOj],
            }));
          }
          return w;
        })(),
        at = (() => {
          class w extends Tn {
            constructor(v) {
              super(v);
            }
            static #e = (this.ɵfac = function (O) {
              return new (O || w)(f.Y36(hn, 10));
            });
            static #t = (this.ɵdir = f.lG2({
              type: w,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (O, j) {
                2 & O &&
                  f.ekj("ng-untouched", j.isUntouched)(
                    "ng-touched",
                    j.isTouched
                  )("ng-pristine", j.isPristine)("ng-dirty", j.isDirty)(
                    "ng-valid",
                    j.isValid
                  )("ng-invalid", j.isInvalid)("ng-pending", j.isPending)(
                    "ng-submitted",
                    j.isSubmitted
                  );
              },
              features: [f.qOj],
            }));
          }
          return w;
        })();
      const Hn = "VALID",
        rr = "INVALID",
        ir = "PENDING",
        Fn = "DISABLED";
      function ci(w) {
        return (H(w) ? w.validators : w) || null;
      }
      function q(w, b) {
        return (H(b) ? b.asyncValidators : w) || null;
      }
      function H(w) {
        return null != w && !Array.isArray(w) && "object" == typeof w;
      }
      class Ze {
        constructor(b, v) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(b),
            this._assignAsyncValidators(v);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(b) {
          this._rawValidators = this._composedValidatorFn = b;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(b) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = b;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Hn;
        }
        get invalid() {
          return this.status === rr;
        }
        get pending() {
          return this.status == ir;
        }
        get disabled() {
          return this.status === Fn;
        }
        get enabled() {
          return this.status !== Fn;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(b) {
          this._assignValidators(b);
        }
        setAsyncValidators(b) {
          this._assignAsyncValidators(b);
        }
        addValidators(b) {
          this.setValidators(In(b, this._rawValidators));
        }
        addAsyncValidators(b) {
          this.setAsyncValidators(In(b, this._rawAsyncValidators));
        }
        removeValidators(b) {
          this.setValidators(Ge(b, this._rawValidators));
        }
        removeAsyncValidators(b) {
          this.setAsyncValidators(Ge(b, this._rawAsyncValidators));
        }
        hasValidator(b) {
          return At(this._rawValidators, b);
        }
        hasAsyncValidator(b) {
          return At(this._rawAsyncValidators, b);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(b = {}) {
          (this.touched = !0),
            this._parent && !b.onlySelf && this._parent.markAsTouched(b);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((b) => b.markAllAsTouched());
        }
        markAsUntouched(b = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((v) => {
              v.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !b.onlySelf && this._parent._updateTouched(b);
        }
        markAsDirty(b = {}) {
          (this.pristine = !1),
            this._parent && !b.onlySelf && this._parent.markAsDirty(b);
        }
        markAsPristine(b = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((v) => {
              v.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !b.onlySelf && this._parent._updatePristine(b);
        }
        markAsPending(b = {}) {
          (this.status = ir),
            !1 !== b.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !b.onlySelf && this._parent.markAsPending(b);
        }
        disable(b = {}) {
          const v = this._parentMarkedDirty(b.onlySelf);
          (this.status = Fn),
            (this.errors = null),
            this._forEachChild((O) => {
              O.disable({ ...b, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== b.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...b, skipPristineCheck: v }),
            this._onDisabledChange.forEach((O) => O(!0));
        }
        enable(b = {}) {
          const v = this._parentMarkedDirty(b.onlySelf);
          (this.status = Hn),
            this._forEachChild((O) => {
              O.enable({ ...b, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: b.emitEvent,
            }),
            this._updateAncestors({ ...b, skipPristineCheck: v }),
            this._onDisabledChange.forEach((O) => O(!1));
        }
        _updateAncestors(b) {
          this._parent &&
            !b.onlySelf &&
            (this._parent.updateValueAndValidity(b),
            b.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(b) {
          this._parent = b;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(b = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Hn || this.status === ir) &&
                this._runAsyncValidator(b.emitEvent)),
            !1 !== b.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !b.onlySelf &&
              this._parent.updateValueAndValidity(b);
        }
        _updateTreeValidity(b = { emitEvent: !0 }) {
          this._forEachChild((v) => v._updateTreeValidity(b)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: b.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Fn : Hn;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(b) {
          if (this.asyncValidator) {
            (this.status = ir), (this._hasOwnPendingAsyncValidator = !0);
            const v = se(this.asyncValidator(this));
            this._asyncValidationSubscription = v.subscribe((O) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(O, { emitEvent: b });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(b, v = {}) {
          (this.errors = b), this._updateControlsErrors(!1 !== v.emitEvent);
        }
        get(b) {
          let v = b;
          return null == v ||
            (Array.isArray(v) || (v = v.split(".")), 0 === v.length)
            ? null
            : v.reduce((O, j) => O && O._find(j), this);
        }
        getError(b, v) {
          const O = v ? this.get(v) : this;
          return O && O.errors ? O.errors[b] : null;
        }
        hasError(b, v) {
          return !!this.getError(b, v);
        }
        get root() {
          let b = this;
          for (; b._parent; ) b = b._parent;
          return b;
        }
        _updateControlsErrors(b) {
          (this.status = this._calculateStatus()),
            b && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(b);
        }
        _initObservables() {
          (this.valueChanges = new f.vpe()), (this.statusChanges = new f.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Fn
            : this.errors
            ? rr
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(ir)
            ? ir
            : this._anyControlsHaveStatus(rr)
            ? rr
            : Hn;
        }
        _anyControlsHaveStatus(b) {
          return this._anyControls((v) => v.status === b);
        }
        _anyControlsDirty() {
          return this._anyControls((b) => b.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((b) => b.touched);
        }
        _updatePristine(b = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !b.onlySelf && this._parent._updatePristine(b);
        }
        _updateTouched(b = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !b.onlySelf && this._parent._updateTouched(b);
        }
        _registerOnCollectionChange(b) {
          this._onCollectionChange = b;
        }
        _setUpdateStrategy(b) {
          H(b) && null != b.updateOn && (this._updateOn = b.updateOn);
        }
        _parentMarkedDirty(b) {
          return (
            !b &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(b) {
          return null;
        }
        _assignValidators(b) {
          (this._rawValidators = Array.isArray(b) ? b.slice() : b),
            (this._composedValidatorFn = (function ce(w) {
              return Array.isArray(w) ? ln(w) : w || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(b) {
          (this._rawAsyncValidators = Array.isArray(b) ? b.slice() : b),
            (this._composedAsyncValidatorFn = (function k(w) {
              return Array.isArray(w) ? Lt(w) : w || null;
            })(this._rawAsyncValidators));
        }
      }
      class Et extends Ze {
        constructor(b, v, O) {
          super(ci(v), q(O, v)),
            (this.controls = b),
            this._initObservables(),
            this._setUpdateStrategy(v),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(b, v) {
          return this.controls[b]
            ? this.controls[b]
            : ((this.controls[b] = v),
              v.setParent(this),
              v._registerOnCollectionChange(this._onCollectionChange),
              v);
        }
        addControl(b, v, O = {}) {
          this.registerControl(b, v),
            this.updateValueAndValidity({ emitEvent: O.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(b, v = {}) {
          this.controls[b] &&
            this.controls[b]._registerOnCollectionChange(() => {}),
            delete this.controls[b],
            this.updateValueAndValidity({ emitEvent: v.emitEvent }),
            this._onCollectionChange();
        }
        setControl(b, v, O = {}) {
          this.controls[b] &&
            this.controls[b]._registerOnCollectionChange(() => {}),
            delete this.controls[b],
            v && this.registerControl(b, v),
            this.updateValueAndValidity({ emitEvent: O.emitEvent }),
            this._onCollectionChange();
        }
        contains(b) {
          return this.controls.hasOwnProperty(b) && this.controls[b].enabled;
        }
        setValue(b, v = {}) {
          (function Oe(w, b, v) {
            w._forEachChild((O, j) => {
              if (void 0 === v[j]) throw new f.vHH(1002, "");
            });
          })(this, 0, b),
            Object.keys(b).forEach((O) => {
              (function ae(w, b, v) {
                const O = w.controls;
                if (!(b ? Object.keys(O) : O).length) throw new f.vHH(1e3, "");
                if (!O[v]) throw new f.vHH(1001, "");
              })(this, !0, O),
                this.controls[O].setValue(b[O], {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v);
        }
        patchValue(b, v = {}) {
          null != b &&
            (Object.keys(b).forEach((O) => {
              const j = this.controls[O];
              j && j.patchValue(b[O], { onlySelf: !0, emitEvent: v.emitEvent });
            }),
            this.updateValueAndValidity(v));
        }
        reset(b = {}, v = {}) {
          this._forEachChild((O, j) => {
            O.reset(b[j], { onlySelf: !0, emitEvent: v.emitEvent });
          }),
            this._updatePristine(v),
            this._updateTouched(v),
            this.updateValueAndValidity(v);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (b, v, O) => ((b[O] = v.getRawValue()), b)
          );
        }
        _syncPendingControls() {
          let b = this._reduceChildren(
            !1,
            (v, O) => !!O._syncPendingControls() || v
          );
          return b && this.updateValueAndValidity({ onlySelf: !0 }), b;
        }
        _forEachChild(b) {
          Object.keys(this.controls).forEach((v) => {
            const O = this.controls[v];
            O && b(O, v);
          });
        }
        _setUpControls() {
          this._forEachChild((b) => {
            b.setParent(this),
              b._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(b) {
          for (const [v, O] of Object.entries(this.controls))
            if (this.contains(v) && b(O)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (v, O, j) => ((O.enabled || this.disabled) && (v[j] = O.value), v)
          );
        }
        _reduceChildren(b, v) {
          let O = b;
          return (
            this._forEachChild((j, Ue) => {
              O = v(O, j, Ue);
            }),
            O
          );
        }
        _allControlsDisabled() {
          for (const b of Object.keys(this.controls))
            if (this.controls[b].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(b) {
          return this.controls.hasOwnProperty(b) ? this.controls[b] : null;
        }
      }
      const Wn = new f.OlP("CallSetDisabledState", {
          providedIn: "root",
          factory: () => sn,
        }),
        sn = "always";
      function bt(w, b, v = sn) {
        so(w, b),
          b.valueAccessor.writeValue(w.value),
          (w.disabled || "always" === v) &&
            b.valueAccessor.setDisabledState?.(w.disabled),
          (function ao(w, b) {
            b.valueAccessor.registerOnChange((v) => {
              (w._pendingValue = v),
                (w._pendingChange = !0),
                (w._pendingDirty = !0),
                "change" === w.updateOn && hi(w, b);
            });
          })(w, b),
          (function Ln(w, b) {
            const v = (O, j) => {
              b.valueAccessor.writeValue(O), j && b.viewToModelUpdate(O);
            };
            w.registerOnChange(v),
              b._registerOnDestroy(() => {
                w._unregisterOnChange(v);
              });
          })(w, b),
          (function or(w, b) {
            b.valueAccessor.registerOnTouched(() => {
              (w._pendingTouched = !0),
                "blur" === w.updateOn && w._pendingChange && hi(w, b),
                "submit" !== w.updateOn && w.markAsTouched();
            });
          })(w, b),
          (function fi(w, b) {
            if (b.valueAccessor.setDisabledState) {
              const v = (O) => {
                b.valueAccessor.setDisabledState(O);
              };
              w.registerOnDisabledChange(v),
                b._registerOnDestroy(() => {
                  w._unregisterOnDisabledChange(v);
                });
            }
          })(w, b);
      }
      function qt(w, b, v = !0) {
        const O = () => {};
        b.valueAccessor &&
          (b.valueAccessor.registerOnChange(O),
          b.valueAccessor.registerOnTouched(O)),
          qn(w, b),
          w &&
            (b._invokeOnDestroyCallbacks(),
            w._registerOnCollectionChange(() => {}));
      }
      function Ar(w, b) {
        w.forEach((v) => {
          v.registerOnValidatorChange && v.registerOnValidatorChange(b);
        });
      }
      function so(w, b) {
        const v = Vt(w);
        null !== b.validator
          ? w.setValidators(Gt(v, b.validator))
          : "function" == typeof v && w.setValidators([v]);
        const O = vt(w);
        null !== b.asyncValidator
          ? w.setAsyncValidators(Gt(O, b.asyncValidator))
          : "function" == typeof O && w.setAsyncValidators([O]);
        const j = () => w.updateValueAndValidity();
        Ar(b._rawValidators, j), Ar(b._rawAsyncValidators, j);
      }
      function qn(w, b) {
        let v = !1;
        if (null !== w) {
          if (null !== b.validator) {
            const j = Vt(w);
            if (Array.isArray(j) && j.length > 0) {
              const Ue = j.filter((it) => it !== b.validator);
              Ue.length !== j.length && ((v = !0), w.setValidators(Ue));
            }
          }
          if (null !== b.asyncValidator) {
            const j = vt(w);
            if (Array.isArray(j) && j.length > 0) {
              const Ue = j.filter((it) => it !== b.asyncValidator);
              Ue.length !== j.length && ((v = !0), w.setAsyncValidators(Ue));
            }
          }
        }
        const O = () => {};
        return Ar(b._rawValidators, O), Ar(b._rawAsyncValidators, O), v;
      }
      function hi(w, b) {
        w._pendingDirty && w.markAsDirty(),
          w.setValue(w._pendingValue, { emitModelToViewChange: !1 }),
          b.viewToModelUpdate(w._pendingValue),
          (w._pendingChange = !1);
      }
      function $n(w, b) {
        const v = w.indexOf(b);
        v > -1 && w.splice(v, 1);
      }
      function kn(w) {
        return (
          "object" == typeof w &&
          null !== w &&
          2 === Object.keys(w).length &&
          "value" in w &&
          "disabled" in w
        );
      }
      const Dr = class extends Ze {
        constructor(b = null, v, O) {
          super(ci(v), q(O, v)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(b),
            this._setUpdateStrategy(v),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            H(v) &&
              (v.nonNullable || v.initialValueIsDefault) &&
              (this.defaultValue = kn(b) ? b.value : b);
        }
        setValue(b, v = {}) {
          (this.value = this._pendingValue = b),
            this._onChange.length &&
              !1 !== v.emitModelToViewChange &&
              this._onChange.forEach((O) =>
                O(this.value, !1 !== v.emitViewToModelChange)
              ),
            this.updateValueAndValidity(v);
        }
        patchValue(b, v = {}) {
          this.setValue(b, v);
        }
        reset(b = this.defaultValue, v = {}) {
          this._applyFormState(b),
            this.markAsPristine(v),
            this.markAsUntouched(v),
            this.setValue(this.value, v),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(b) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(b) {
          this._onChange.push(b);
        }
        _unregisterOnChange(b) {
          $n(this._onChange, b);
        }
        registerOnDisabledChange(b) {
          this._onDisabledChange.push(b);
        }
        _unregisterOnDisabledChange(b) {
          $n(this._onDisabledChange, b);
        }
        _forEachChild(b) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(b) {
          kn(b)
            ? ((this.value = this._pendingValue = b.value),
              b.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = b);
        }
      };
      let Ti = (() => {
          class w {
            static #e = (this.ɵfac = function (O) {
              return new (O || w)();
            });
            static #t = (this.ɵdir = f.lG2({
              type: w,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            }));
          }
          return w;
        })(),
        Ni = (() => {
          class w {
            static #e = (this.ɵfac = function (O) {
              return new (O || w)();
            });
            static #t = (this.ɵmod = f.oAB({ type: w }));
            static #n = (this.ɵinj = f.cJS({}));
          }
          return w;
        })();
      const Xt = new f.OlP("NgModelWithFormControlWarning"),
        dn = { provide: hn, useExisting: (0, f.Gpc)(() => ei) };
      let ei = (() => {
        class w extends hn {
          constructor(v, O, j) {
            super(),
              (this.callSetDisabledState = j),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new f.vpe()),
              this._setValidators(v),
              this._setAsyncValidators(O);
          }
          ngOnChanges(v) {
            this._checkFormPresent(),
              v.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (qn(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(v) {
            const O = this.form.get(v.path);
            return (
              bt(O, v, this.callSetDisabledState),
              O.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(v),
              O
            );
          }
          getControl(v) {
            return this.form.get(v.path);
          }
          removeControl(v) {
            qt(v.control || null, v, !1),
              (function uo(w, b) {
                const v = w.indexOf(b);
                v > -1 && w.splice(v, 1);
              })(this.directives, v);
          }
          addFormGroup(v) {
            this._setUpFormContainer(v);
          }
          removeFormGroup(v) {
            this._cleanUpFormContainer(v);
          }
          getFormGroup(v) {
            return this.form.get(v.path);
          }
          addFormArray(v) {
            this._setUpFormContainer(v);
          }
          removeFormArray(v) {
            this._cleanUpFormContainer(v);
          }
          getFormArray(v) {
            return this.form.get(v.path);
          }
          updateModel(v, O) {
            this.form.get(v.path).setValue(O);
          }
          onSubmit(v) {
            return (
              (this.submitted = !0),
              (function Ai(w, b) {
                w._syncPendingControls(),
                  b.forEach((v) => {
                    const O = v.control;
                    "submit" === O.updateOn &&
                      O._pendingChange &&
                      (v.viewToModelUpdate(O._pendingValue),
                      (O._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(v),
              "dialog" === v?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(v = void 0) {
            this.form.reset(v), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((v) => {
              const O = v.control,
                j = this.form.get(v.path);
              O !== j &&
                (qt(O || null, v),
                ((w) => w instanceof Dr)(j) &&
                  (bt(j, v, this.callSetDisabledState), (v.control = j)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(v) {
            const O = this.form.get(v.path);
            (function Mn(w, b) {
              so(w, b);
            })(O, v),
              O.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(v) {
            if (this.form) {
              const O = this.form.get(v.path);
              O &&
                (function pt(w, b) {
                  return qn(w, b);
                })(O, v) &&
                O.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            so(this.form, this), this._oldForm && qn(this._oldForm, this);
          }
          _checkFormPresent() {}
          static #e = (this.ɵfac = function (O) {
            return new (O || w)(f.Y36(Le, 10), f.Y36(Me, 10), f.Y36(Wn, 8));
          });
          static #t = (this.ɵdir = f.lG2({
            type: w,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (O, j) {
              1 & O &&
                f.NdJ("submit", function (it) {
                  return j.onSubmit(it);
                })("reset", function () {
                  return j.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [f._Bn([dn]), f.qOj, f.TTD],
          }));
        }
        return w;
      })();
      const Ae = { provide: on, useExisting: (0, f.Gpc)(() => Je) };
      let Je = (() => {
          class w extends on {
            set isDisabled(v) {}
            static #e = (this._ngModelWarningSentOnce = !1);
            constructor(v, O, j, Ue, it) {
              super(),
                (this._ngModelWarningConfig = it),
                (this._added = !1),
                (this.name = null),
                (this.update = new f.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = v),
                this._setValidators(O),
                this._setAsyncValidators(j),
                (this.valueAccessor = (function sr(w, b) {
                  if (!b) return null;
                  let v, O, j;
                  return (
                    Array.isArray(b),
                    b.forEach((Ue) => {
                      Ue.constructor === K
                        ? (v = Ue)
                        : (function gi(w) {
                            return Object.getPrototypeOf(w.constructor) === be;
                          })(Ue)
                        ? (O = Ue)
                        : (j = Ue);
                    }),
                    j || O || v || null
                  );
                })(0, Ue));
            }
            ngOnChanges(v) {
              this._added || this._setUpControl(),
                (function Or(w, b) {
                  if (!w.hasOwnProperty("model")) return !1;
                  const v = w.model;
                  return !!v.isFirstChange() || !Object.is(b, v.currentValue);
                })(v, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(v) {
              (this.viewModel = v), this.update.emit(v);
            }
            get path() {
              return (function di(w, b) {
                return [...b.path, w];
              })(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
            static #t = (this.ɵfac = function (O) {
              return new (O || w)(
                f.Y36(hn, 13),
                f.Y36(Le, 10),
                f.Y36(Me, 10),
                f.Y36(Re, 10),
                f.Y36(Xt, 8)
              );
            });
            static #n = (this.ɵdir = f.lG2({
              type: w,
              selectors: [["", "formControlName", ""]],
              inputs: {
                name: ["formControlName", "name"],
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
              },
              outputs: { update: "ngModelChange" },
              features: [f._Bn([Ae]), f.qOj, f.TTD],
            }));
          }
          return w;
        })(),
        gn = (() => {
          class w {
            static #e = (this.ɵfac = function (O) {
              return new (O || w)();
            });
            static #t = (this.ɵmod = f.oAB({ type: w }));
            static #n = (this.ɵinj = f.cJS({ imports: [Ni] }));
          }
          return w;
        })(),
        Li = (() => {
          class w {
            static withConfig(v) {
              return {
                ngModule: w,
                providers: [
                  { provide: Wn, useValue: v.callSetDisabledState ?? sn },
                ],
              };
            }
            static #e = (this.ɵfac = function (O) {
              return new (O || w)();
            });
            static #t = (this.ɵmod = f.oAB({ type: w }));
            static #n = (this.ɵinj = f.cJS({ imports: [gn] }));
          }
          return w;
        })(),
        _i = (() => {
          class w {
            static withConfig(v) {
              return {
                ngModule: w,
                providers: [
                  {
                    provide: Xt,
                    useValue: v.warnOnNgModelWithFormControl ?? "always",
                  },
                  { provide: Wn, useValue: v.callSetDisabledState ?? sn },
                ],
              };
            }
            static #e = (this.ɵfac = function (O) {
              return new (O || w)();
            });
            static #t = (this.ɵmod = f.oAB({ type: w }));
            static #n = (this.ɵinj = f.cJS({ imports: [gn] }));
          }
          return w;
        })();
    },
    6593: ($e, pe, R) => {
      R.d(pe, { Dx: () => on, b2: () => At, q6: () => Gt, se: () => Ee });
      var f = R(4769),
        G = R(6814);
      class N extends G.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class le extends N {
        static makeCurrent() {
          (0, G.HT)(new le());
        }
        onAndCancel(q, k, H) {
          return (
            q.addEventListener(k, H),
            () => {
              q.removeEventListener(k, H);
            }
          );
        }
        dispatchEvent(q, k) {
          q.dispatchEvent(k);
        }
        remove(q) {
          q.parentNode && q.parentNode.removeChild(q);
        }
        createElement(q, k) {
          return (k = k || this.getDefaultDocument()).createElement(q);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(q) {
          return q.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(q) {
          return q instanceof DocumentFragment;
        }
        getGlobalEventTarget(q, k) {
          return "window" === k
            ? window
            : "document" === k
            ? q
            : "body" === k
            ? q.body
            : null;
        }
        getBaseHref(q) {
          const k = (function ee() {
            return (
              (J = J || document.querySelector("base")),
              J ? J.getAttribute("href") : null
            );
          })();
          return null == k
            ? null
            : (function Ie(ce) {
                (ye = ye || document.createElement("a")),
                  ye.setAttribute("href", ce);
                const q = ye.pathname;
                return "/" === q.charAt(0) ? q : `/${q}`;
              })(k);
        }
        resetBaseElement() {
          J = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(q) {
          return (0, G.Mx)(document.cookie, q);
        }
      }
      let ye,
        J = null,
        ie = (() => {
          class ce {
            build() {
              return new XMLHttpRequest();
            }
            static #e = (this.ɵfac = function (H) {
              return new (H || ce)();
            });
            static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
          }
          return ce;
        })();
      const re = new f.OlP("EventManagerPlugins");
      let Ce = (() => {
        class ce {
          constructor(k, H) {
            (this._zone = H),
              (this._eventNameToPlugin = new Map()),
              k.forEach((ae) => {
                ae.manager = this;
              }),
              (this._plugins = k.slice().reverse());
          }
          addEventListener(k, H, ae) {
            return this._findPluginFor(H).addEventListener(k, H, ae);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(k) {
            let H = this._eventNameToPlugin.get(k);
            if (H) return H;
            if (((H = this._plugins.find((Oe) => Oe.supports(k))), !H))
              throw new f.vHH(5101, !1);
            return this._eventNameToPlugin.set(k, H), H;
          }
          static #e = (this.ɵfac = function (H) {
            return new (H || ce)(f.LFG(re), f.LFG(f.R0b));
          });
          static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
        }
        return ce;
      })();
      class Be {
        constructor(q) {
          this._doc = q;
        }
      }
      const be = "ng-app-id";
      let Re = (() => {
        class ce {
          constructor(k, H, ae, Oe = {}) {
            (this.doc = k),
              (this.appId = H),
              (this.nonce = ae),
              (this.platformId = Oe),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = (0, G.PM)(Oe)),
              this.resetHostNodes();
          }
          addStyles(k) {
            for (const H of k)
              1 === this.changeUsageCount(H, 1) && this.onStyleAdded(H);
          }
          removeStyles(k) {
            for (const H of k)
              this.changeUsageCount(H, -1) <= 0 && this.onStyleRemoved(H);
          }
          ngOnDestroy() {
            const k = this.styleNodesInDOM;
            k && (k.forEach((H) => H.remove()), k.clear());
            for (const H of this.getAllStyles()) this.onStyleRemoved(H);
            this.resetHostNodes();
          }
          addHost(k) {
            this.hostNodes.add(k);
            for (const H of this.getAllStyles()) this.addStyleToHost(k, H);
          }
          removeHost(k) {
            this.hostNodes.delete(k);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(k) {
            for (const H of this.hostNodes) this.addStyleToHost(H, k);
          }
          onStyleRemoved(k) {
            const H = this.styleRef;
            H.get(k)?.elements?.forEach((ae) => ae.remove()), H.delete(k);
          }
          collectServerRenderedStyles() {
            const k = this.doc.head?.querySelectorAll(
              `style[${be}="${this.appId}"]`
            );
            if (k?.length) {
              const H = new Map();
              return (
                k.forEach((ae) => {
                  null != ae.textContent && H.set(ae.textContent, ae);
                }),
                H
              );
            }
            return null;
          }
          changeUsageCount(k, H) {
            const ae = this.styleRef;
            if (ae.has(k)) {
              const Oe = ae.get(k);
              return (Oe.usage += H), Oe.usage;
            }
            return ae.set(k, { usage: H, elements: [] }), H;
          }
          getStyleElement(k, H) {
            const ae = this.styleNodesInDOM,
              Oe = ae?.get(H);
            if (Oe?.parentNode === k)
              return ae.delete(H), Oe.removeAttribute(be), Oe;
            {
              const Ze = this.doc.createElement("style");
              return (
                this.nonce && Ze.setAttribute("nonce", this.nonce),
                (Ze.textContent = H),
                this.platformIsServer && Ze.setAttribute(be, this.appId),
                Ze
              );
            }
          }
          addStyleToHost(k, H) {
            const ae = this.getStyleElement(k, H);
            k.appendChild(ae);
            const Oe = this.styleRef,
              Ze = Oe.get(H)?.elements;
            Ze ? Ze.push(ae) : Oe.set(H, { elements: [ae], usage: 1 });
          }
          resetHostNodes() {
            const k = this.hostNodes;
            k.clear(), k.add(this.doc.head);
          }
          static #e = (this.ɵfac = function (H) {
            return new (H || ce)(
              f.LFG(G.K0),
              f.LFG(f.AFp),
              f.LFG(f.Ojb, 8),
              f.LFG(f.Lbi)
            );
          });
          static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
        }
        return ce;
      })();
      const St = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Fe = /%COMP%/g,
        fe = new f.OlP("RemoveStylesOnCompDestroy", {
          providedIn: "root",
          factory: () => !1,
        });
      function Me(ce, q) {
        return q.map((k) => k.replace(Fe, ce));
      }
      let Ee = (() => {
        class ce {
          constructor(k, H, ae, Oe, Ze, Et, Ot, Nt = null) {
            (this.eventManager = k),
              (this.sharedStylesHost = H),
              (this.appId = ae),
              (this.removeStylesOnCompDestroy = Oe),
              (this.doc = Ze),
              (this.platformId = Et),
              (this.ngZone = Ot),
              (this.nonce = Nt),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = (0, G.PM)(Et)),
              (this.defaultRenderer = new Ke(k, Ze, Ot, this.platformIsServer));
          }
          createRenderer(k, H) {
            if (!k || !H) return this.defaultRenderer;
            this.platformIsServer &&
              H.encapsulation === f.ifc.ShadowDom &&
              (H = { ...H, encapsulation: f.ifc.Emulated });
            const ae = this.getOrCreateRenderer(k, H);
            return (
              ae instanceof tr
                ? ae.applyToHost(k)
                : ae instanceof yn && ae.applyStyles(),
              ae
            );
          }
          getOrCreateRenderer(k, H) {
            const ae = this.rendererByCompId;
            let Oe = ae.get(H.id);
            if (!Oe) {
              const Ze = this.doc,
                Et = this.ngZone,
                Ot = this.eventManager,
                Nt = this.sharedStylesHost,
                xn = this.removeStylesOnCompDestroy,
                wn = this.platformIsServer;
              switch (H.encapsulation) {
                case f.ifc.Emulated:
                  Oe = new tr(Ot, Nt, H, this.appId, xn, Ze, Et, wn);
                  break;
                case f.ifc.ShadowDom:
                  return new je(Ot, Nt, k, H, Ze, Et, this.nonce, wn);
                default:
                  Oe = new yn(Ot, Nt, H, xn, Ze, Et, wn);
              }
              ae.set(H.id, Oe);
            }
            return Oe;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static #e = (this.ɵfac = function (H) {
            return new (H || ce)(
              f.LFG(Ce),
              f.LFG(Re),
              f.LFG(f.AFp),
              f.LFG(fe),
              f.LFG(G.K0),
              f.LFG(f.Lbi),
              f.LFG(f.R0b),
              f.LFG(f.Ojb)
            );
          });
          static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
        }
        return ce;
      })();
      class Ke {
        constructor(q, k, H, ae) {
          (this.eventManager = q),
            (this.doc = k),
            (this.ngZone = H),
            (this.platformIsServer = ae),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(q, k) {
          return k
            ? this.doc.createElementNS(St[k] || k, q)
            : this.doc.createElement(q);
        }
        createComment(q) {
          return this.doc.createComment(q);
        }
        createText(q) {
          return this.doc.createTextNode(q);
        }
        appendChild(q, k) {
          (ke(q) ? q.content : q).appendChild(k);
        }
        insertBefore(q, k, H) {
          q && (ke(q) ? q.content : q).insertBefore(k, H);
        }
        removeChild(q, k) {
          q && q.removeChild(k);
        }
        selectRootElement(q, k) {
          let H = "string" == typeof q ? this.doc.querySelector(q) : q;
          if (!H) throw new f.vHH(-5104, !1);
          return k || (H.textContent = ""), H;
        }
        parentNode(q) {
          return q.parentNode;
        }
        nextSibling(q) {
          return q.nextSibling;
        }
        setAttribute(q, k, H, ae) {
          if (ae) {
            k = ae + ":" + k;
            const Oe = St[ae];
            Oe ? q.setAttributeNS(Oe, k, H) : q.setAttribute(k, H);
          } else q.setAttribute(k, H);
        }
        removeAttribute(q, k, H) {
          if (H) {
            const ae = St[H];
            ae ? q.removeAttributeNS(ae, k) : q.removeAttribute(`${H}:${k}`);
          } else q.removeAttribute(k);
        }
        addClass(q, k) {
          q.classList.add(k);
        }
        removeClass(q, k) {
          q.classList.remove(k);
        }
        setStyle(q, k, H, ae) {
          ae & (f.JOm.DashCase | f.JOm.Important)
            ? q.style.setProperty(k, H, ae & f.JOm.Important ? "important" : "")
            : (q.style[k] = H);
        }
        removeStyle(q, k, H) {
          H & f.JOm.DashCase ? q.style.removeProperty(k) : (q.style[k] = "");
        }
        setProperty(q, k, H) {
          q[k] = H;
        }
        setValue(q, k) {
          q.nodeValue = k;
        }
        listen(q, k, H) {
          if (
            "string" == typeof q &&
            !(q = (0, G.q)().getGlobalEventTarget(this.doc, q))
          )
            throw new Error(`Unsupported event target ${q} for event ${k}`);
          return this.eventManager.addEventListener(
            q,
            k,
            this.decoratePreventDefault(H)
          );
        }
        decoratePreventDefault(q) {
          return (k) => {
            if ("__ngUnwrap__" === k) return q;
            !1 ===
              (this.platformIsServer
                ? this.ngZone.runGuarded(() => q(k))
                : q(k)) && k.preventDefault();
          };
        }
      }
      function ke(ce) {
        return "TEMPLATE" === ce.tagName && void 0 !== ce.content;
      }
      class je extends Ke {
        constructor(q, k, H, ae, Oe, Ze, Et, Ot) {
          super(q, Oe, Ze, Ot),
            (this.sharedStylesHost = k),
            (this.hostEl = H),
            (this.shadowRoot = H.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Nt = Me(ae.id, ae.styles);
          for (const xn of Nt) {
            const wn = document.createElement("style");
            Et && wn.setAttribute("nonce", Et),
              (wn.textContent = xn),
              this.shadowRoot.appendChild(wn);
          }
        }
        nodeOrShadowRoot(q) {
          return q === this.hostEl ? this.shadowRoot : q;
        }
        appendChild(q, k) {
          return super.appendChild(this.nodeOrShadowRoot(q), k);
        }
        insertBefore(q, k, H) {
          return super.insertBefore(this.nodeOrShadowRoot(q), k, H);
        }
        removeChild(q, k) {
          return super.removeChild(this.nodeOrShadowRoot(q), k);
        }
        parentNode(q) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(q))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class yn extends Ke {
        constructor(q, k, H, ae, Oe, Ze, Et, Ot) {
          super(q, Oe, Ze, Et),
            (this.sharedStylesHost = k),
            (this.removeStylesOnCompDestroy = ae),
            (this.styles = Ot ? Me(Ot, H.styles) : H.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class tr extends yn {
        constructor(q, k, H, ae, Oe, Ze, Et, Ot) {
          const Nt = ae + "-" + H.id;
          super(q, k, H, Oe, Ze, Et, Ot, Nt),
            (this.contentAttr = (function de(ce) {
              return "_ngcontent-%COMP%".replace(Fe, ce);
            })(Nt)),
            (this.hostAttr = (function Le(ce) {
              return "_nghost-%COMP%".replace(Fe, ce);
            })(Nt));
        }
        applyToHost(q) {
          this.applyStyles(), this.setAttribute(q, this.hostAttr, "");
        }
        createElement(q, k) {
          const H = super.createElement(q, k);
          return super.setAttribute(H, this.contentAttr, ""), H;
        }
      }
      let Kr = (() => {
        class ce extends Be {
          constructor(k) {
            super(k);
          }
          supports(k) {
            return !0;
          }
          addEventListener(k, H, ae) {
            return (
              k.addEventListener(H, ae, !1),
              () => this.removeEventListener(k, H, ae)
            );
          }
          removeEventListener(k, H, ae) {
            return k.removeEventListener(H, ae);
          }
          static #e = (this.ɵfac = function (H) {
            return new (H || ce)(f.LFG(G.K0));
          });
          static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
        }
        return ce;
      })();
      const Nn = ["alt", "control", "meta", "shift"],
        z = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        X = {
          alt: (ce) => ce.altKey,
          control: (ce) => ce.ctrlKey,
          meta: (ce) => ce.metaKey,
          shift: (ce) => ce.shiftKey,
        };
      let se = (() => {
        class ce extends Be {
          constructor(k) {
            super(k);
          }
          supports(k) {
            return null != ce.parseEventName(k);
          }
          addEventListener(k, H, ae) {
            const Oe = ce.parseEventName(H),
              Ze = ce.eventCallback(Oe.fullKey, ae, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, G.q)().onAndCancel(k, Oe.domEventName, Ze)
              );
          }
          static parseEventName(k) {
            const H = k.toLowerCase().split("."),
              ae = H.shift();
            if (0 === H.length || ("keydown" !== ae && "keyup" !== ae))
              return null;
            const Oe = ce._normalizeKey(H.pop());
            let Ze = "",
              Et = H.indexOf("code");
            if (
              (Et > -1 && (H.splice(Et, 1), (Ze = "code.")),
              Nn.forEach((Nt) => {
                const xn = H.indexOf(Nt);
                xn > -1 && (H.splice(xn, 1), (Ze += Nt + "."));
              }),
              (Ze += Oe),
              0 != H.length || 0 === Oe.length)
            )
              return null;
            const Ot = {};
            return (Ot.domEventName = ae), (Ot.fullKey = Ze), Ot;
          }
          static matchEventFullKeyCode(k, H) {
            let ae = z[k.key] || k.key,
              Oe = "";
            return (
              H.indexOf("code.") > -1 && ((ae = k.code), (Oe = "code.")),
              !(null == ae || !ae) &&
                ((ae = ae.toLowerCase()),
                " " === ae ? (ae = "space") : "." === ae && (ae = "dot"),
                Nn.forEach((Ze) => {
                  Ze !== ae && (0, X[Ze])(k) && (Oe += Ze + ".");
                }),
                (Oe += ae),
                Oe === H)
            );
          }
          static eventCallback(k, H, ae) {
            return (Oe) => {
              ce.matchEventFullKeyCode(Oe, k) && ae.runGuarded(() => H(Oe));
            };
          }
          static _normalizeKey(k) {
            return "esc" === k ? "escape" : k;
          }
          static #e = (this.ɵfac = function (H) {
            return new (H || ce)(f.LFG(G.K0));
          });
          static #t = (this.ɵprov = f.Yz7({ token: ce, factory: ce.ɵfac }));
        }
        return ce;
      })();
      const Gt = (0, f.eFA)(f._c5, "browser", [
          { provide: f.Lbi, useValue: G.bD },
          {
            provide: f.g9A,
            useValue: function Dt() {
              le.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: G.K0,
            useFactory: function Qe() {
              return (0, f.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Vt = new f.OlP(""),
        vt = [
          {
            provide: f.rWj,
            useClass: class _e {
              addToWindow(q) {
                (f.dqk.getAngularTestability = (H, ae = !0) => {
                  const Oe = q.findTestabilityInTree(H, ae);
                  if (null == Oe) throw new f.vHH(5103, !1);
                  return Oe;
                }),
                  (f.dqk.getAllAngularTestabilities = () =>
                    q.getAllTestabilities()),
                  (f.dqk.getAllAngularRootElements = () =>
                    q.getAllRootElements()),
                  f.dqk.frameworkStabilizers ||
                    (f.dqk.frameworkStabilizers = []),
                  f.dqk.frameworkStabilizers.push((H) => {
                    const ae = f.dqk.getAllAngularTestabilities();
                    let Oe = ae.length,
                      Ze = !1;
                    const Et = function (Ot) {
                      (Ze = Ze || Ot), Oe--, 0 == Oe && H(Ze);
                    };
                    ae.forEach((Ot) => {
                      Ot.whenStable(Et);
                    });
                  });
              }
              findTestabilityInTree(q, k, H) {
                return null == k
                  ? null
                  : q.getTestability(k) ??
                      (H
                        ? (0, G.q)().isShadowRoot(k)
                          ? this.findTestabilityInTree(q, k.host, !0)
                          : this.findTestabilityInTree(q, k.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: f.lri, useClass: f.dDg, deps: [f.R0b, f.eoX, f.rWj] },
          { provide: f.dDg, useClass: f.dDg, deps: [f.R0b, f.eoX, f.rWj] },
        ],
        Ve = [
          { provide: f.zSh, useValue: "root" },
          {
            provide: f.qLn,
            useFactory: function ln() {
              return new f.qLn();
            },
            deps: [],
          },
          { provide: re, useClass: Kr, multi: !0, deps: [G.K0, f.R0b, f.Lbi] },
          { provide: re, useClass: se, multi: !0, deps: [G.K0] },
          Ee,
          Re,
          Ce,
          { provide: f.FYo, useExisting: Ee },
          { provide: G.JF, useClass: ie, deps: [] },
          [],
        ];
      let At = (() => {
          class ce {
            constructor(k) {}
            static withServerTransition(k) {
              return {
                ngModule: ce,
                providers: [{ provide: f.AFp, useValue: k.appId }],
              };
            }
            static #e = (this.ɵfac = function (H) {
              return new (H || ce)(f.LFG(Vt, 12));
            });
            static #t = (this.ɵmod = f.oAB({ type: ce }));
            static #n = (this.ɵinj = f.cJS({
              providers: [...Ve, ...vt],
              imports: [G.ez, f.hGG],
            }));
          }
          return ce;
        })(),
        on = (() => {
          class ce {
            constructor(k) {
              this._doc = k;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(k) {
              this._doc.title = k || "";
            }
            static #e = (this.ɵfac = function (H) {
              return new (H || ce)(f.LFG(G.K0));
            });
            static #t = (this.ɵprov = f.Yz7({
              token: ce,
              factory: function (H) {
                let ae = null;
                return (
                  (ae = H
                    ? new H()
                    : (function hn() {
                        return new on((0, f.LFG)(G.K0));
                      })()),
                  ae
                );
              },
              providedIn: "root",
            }));
          }
          return ce;
        })();
      typeof window < "u" && window;
    },
    9343: ($e, pe, R) => {
      R.d(pe, {
        gz: () => ur,
        F0: () => hr,
        rH: () => qo,
        Od: () => No,
        Bz: () => Zo,
        lC: () => Fr,
      });
      var f = R(4769),
        G = R(5592),
        N = R(4674),
        J = R(7715),
        ee = R(2096),
        ye = R(5619),
        Ie = R(7453),
        _e = R(2737),
        ie = R(7400),
        re = R(9940),
        Ce = R(2714),
        Be = R(8251),
        be = R(7103);
      function Re(...c) {
        const g = (0, re.yG)(c),
          a = (0, re.jO)(c),
          { args: m, keys: C } = (0, Ie.D)(c);
        if (0 === m.length) return (0, J.D)([], g);
        const T = new G.y(
          (function St(c, g, a = _e.y) {
            return (m) => {
              Fe(
                g,
                () => {
                  const { length: C } = c,
                    T = new Array(C);
                  let L = C,
                    Q = C;
                  for (let Y = 0; Y < C; Y++)
                    Fe(
                      g,
                      () => {
                        const Ne = (0, J.D)(c[Y], g);
                        let dt = !1;
                        Ne.subscribe(
                          (0, Be.x)(
                            m,
                            (Kt) => {
                              (T[Y] = Kt),
                                dt || ((dt = !0), Q--),
                                Q || m.next(a(T.slice()));
                            },
                            () => {
                              --L || m.complete();
                            }
                          )
                        );
                      },
                      m
                    );
                },
                m
              );
            };
          })(m, g, C ? (L) => (0, Ce.n)(C, L) : _e.y)
        );
        return a ? T.pipe((0, ie.Z)(a)) : T;
      }
      function Fe(c, g, a) {
        c ? (0, be.f)(a, c, g) : g();
      }
      var yt = R(6973),
        rt = R(5211),
        qe = R(4829);
      function K(c) {
        return new G.y((g) => {
          (0, qe.Xf)(c()).subscribe(g);
        });
      }
      var fe = R(8407);
      function de(c, g) {
        const a = (0, N.m)(c) ? c : () => c,
          m = (C) => C.error(a());
        return new G.y(g ? (C) => g.schedule(m, 0, C) : m);
      }
      var Le = R(6232),
        Me = R(7394),
        Ee = R(9360);
      function Ke() {
        return (0, Ee.e)((c, g) => {
          let a = null;
          c._refCount++;
          const m = (0, Be.x)(g, void 0, void 0, void 0, () => {
            if (!c || c._refCount <= 0 || 0 < --c._refCount)
              return void (a = null);
            const C = c._connection,
              T = a;
            (a = null),
              C && (!T || C === T) && C.unsubscribe(),
              g.unsubscribe();
          });
          c.subscribe(m), m.closed || (a = c.connect());
        });
      }
      class he extends G.y {
        constructor(g, a) {
          super(),
            (this.source = g),
            (this.subjectFactory = a),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Ee.A)(g) && (this.lift = g.lift);
        }
        _subscribe(g) {
          return this.getSubject().subscribe(g);
        }
        getSubject() {
          const g = this._subject;
          return (
            (!g || g.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: g } = this;
          (this._subject = this._connection = null), g?.unsubscribe();
        }
        connect() {
          let g = this._connection;
          if (!g) {
            g = this._connection = new Me.w0();
            const a = this.getSubject();
            g.add(
              this.source.subscribe(
                (0, Be.x)(
                  a,
                  void 0,
                  () => {
                    this._teardown(), a.complete();
                  },
                  (m) => {
                    this._teardown(), a.error(m);
                  },
                  () => this._teardown()
                )
              )
            ),
              g.closed && ((this._connection = null), (g = Me.w0.EMPTY));
          }
          return g;
        }
        refCount() {
          return Ke()(this);
        }
      }
      var jt = R(8645),
        ke = R(6814),
        je = R(7398),
        yn = R(4664),
        tr = R(8180),
        Nn = R(2181),
        z = R(1631),
        X = R(1374);
      function se(c, g) {
        return (0, N.m)(g) ? (0, z.z)(c, g, 1) : (0, z.z)(c, 1);
      }
      var te = R(9397);
      function me(c) {
        return (0, Ee.e)((g, a) => {
          let T,
            m = null,
            C = !1;
          (m = g.subscribe(
            (0, Be.x)(a, void 0, void 0, (L) => {
              (T = (0, qe.Xf)(c(L, me(c)(g)))),
                m ? (m.unsubscribe(), (m = null), T.subscribe(a)) : (C = !0);
            })
          )),
            C && (m.unsubscribe(), (m = null), T.subscribe(a));
        });
      }
      var we = R(9732),
        Dt = R(3572);
      function ln(c) {
        return c <= 0
          ? () => Le.E
          : (0, Ee.e)((g, a) => {
              let m = [];
              g.subscribe(
                (0, Be.x)(
                  a,
                  (C) => {
                    m.push(C), c < m.length && m.shift();
                  },
                  () => {
                    for (const C of m) a.next(C);
                    a.complete();
                  },
                  void 0,
                  () => {
                    m = null;
                  }
                )
              );
            });
      }
      var Qe = R(3026),
        Gt = R(975);
      function Vt(c) {
        return (0, Ee.e)((g, a) => {
          try {
            g.subscribe(a);
          } finally {
            a.add(c);
          }
        });
      }
      var vt = R(2420),
        At = R(7537),
        In = R(6593);
      const Ge = "primary",
        ct = Symbol("RouteTitle");
      class hn {
        constructor(g) {
          this.params = g || {};
        }
        has(g) {
          return Object.prototype.hasOwnProperty.call(this.params, g);
        }
        get(g) {
          if (this.has(g)) {
            const a = this.params[g];
            return Array.isArray(a) ? a[0] : a;
          }
          return null;
        }
        getAll(g) {
          if (this.has(g)) {
            const a = this.params[g];
            return Array.isArray(a) ? a : [a];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function on(c) {
        return new hn(c);
      }
      function Tn(c, g, a) {
        const m = a.path.split("/");
        if (
          m.length > c.length ||
          ("full" === a.pathMatch && (g.hasChildren() || m.length < c.length))
        )
          return null;
        const C = {};
        for (let T = 0; T < m.length; T++) {
          const L = m[T],
            Q = c[T];
          if (L.startsWith(":")) C[L.substring(1)] = Q;
          else if (L !== Q.path) return null;
        }
        return { consumed: c.slice(0, m.length), posParams: C };
      }
      function kt(c, g) {
        const a = c ? Object.keys(c) : void 0,
          m = g ? Object.keys(g) : void 0;
        if (!a || !m || a.length != m.length) return !1;
        let C;
        for (let T = 0; T < a.length; T++)
          if (((C = a[T]), !ht(c[C], g[C]))) return !1;
        return !0;
      }
      function ht(c, g) {
        if (Array.isArray(c) && Array.isArray(g)) {
          if (c.length !== g.length) return !1;
          const a = [...c].sort(),
            m = [...g].sort();
          return a.every((C, T) => m[T] === C);
        }
        return c === g;
      }
      function at(c) {
        return c.length > 0 ? c[c.length - 1] : null;
      }
      function Cn(c) {
        return (function le(c) {
          return (
            !!c &&
            (c instanceof G.y || ((0, N.m)(c.lift) && (0, N.m)(c.subscribe)))
          );
        })(c)
          ? c
          : (0, f.QGY)(c)
          ? (0, J.D)(Promise.resolve(c))
          : (0, ee.of)(c);
      }
      const nr = {
          exact: function li(c, g, a) {
            if (
              !Rn(c.segments, g.segments) ||
              !$i(c.segments, g.segments, a) ||
              c.numberOfChildren !== g.numberOfChildren
            )
              return !1;
            for (const m in g.children)
              if (!c.children[m] || !li(c.children[m], g.children[m], a))
                return !1;
            return !0;
          },
          subset: En,
        },
        Pn = {
          exact: function Xe(c, g) {
            return kt(c, g);
          },
          subset: function $t(c, g) {
            return (
              Object.keys(g).length <= Object.keys(c).length &&
              Object.keys(g).every((a) => ht(c[a], g[a]))
            );
          },
          ignored: () => !0,
        };
      function mr(c, g, a) {
        return (
          nr[a.paths](c.root, g.root, a.matrixParams) &&
          Pn[a.queryParams](c.queryParams, g.queryParams) &&
          !("exact" === a.fragment && c.fragment !== g.fragment)
        );
      }
      function En(c, g, a) {
        return Tt(c, g, g.segments, a);
      }
      function Tt(c, g, a, m) {
        if (c.segments.length > a.length) {
          const C = c.segments.slice(0, a.length);
          return !(!Rn(C, a) || g.hasChildren() || !$i(C, a, m));
        }
        if (c.segments.length === a.length) {
          if (!Rn(c.segments, a) || !$i(c.segments, a, m)) return !1;
          for (const C in g.children)
            if (!c.children[C] || !En(c.children[C], g.children[C], m))
              return !1;
          return !0;
        }
        {
          const C = a.slice(0, c.segments.length),
            T = a.slice(c.segments.length);
          return (
            !!(Rn(c.segments, C) && $i(c.segments, C, m) && c.children[Ge]) &&
            Tt(c.children[Ge], g, T, m)
          );
        }
      }
      function $i(c, g, a) {
        return g.every((m, C) => Pn[a](c[C].parameters, m.parameters));
      }
      class It {
        constructor(g = new Mt([], {}), a = {}, m = null) {
          (this.root = g), (this.queryParams = a), (this.fragment = m);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = on(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return rr.serialize(this);
        }
      }
      class Mt {
        constructor(g, a) {
          (this.segments = g),
            (this.children = a),
            (this.parent = null),
            Object.values(a).forEach((m) => (m.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ir(this);
        }
      }
      class Gn {
        constructor(g, a) {
          (this.path = g), (this.parameters = a);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = on(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Oe(this);
        }
      }
      function Rn(c, g) {
        return c.length === g.length && c.every((a, m) => a.path === g[m].path);
      }
      let cn = (() => {
        class c {
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: function () {
              return new Hn();
            },
            providedIn: "root",
          }));
        }
        return c;
      })();
      class Hn {
        parse(g) {
          const a = new qt(g);
          return new It(
            a.parseRootSegment(),
            a.parseQueryParams(),
            a.parseFragment()
          );
        }
        serialize(g) {
          const a = `/${Fn(g.root, !0)}`,
            m = (function Et(c) {
              const g = Object.keys(c)
                .map((a) => {
                  const m = c[a];
                  return Array.isArray(m)
                    ? m.map((C) => `${ce(a)}=${ce(C)}`).join("&")
                    : `${ce(a)}=${ce(m)}`;
                })
                .filter((a) => !!a);
              return g.length ? `?${g.join("&")}` : "";
            })(g.queryParams);
          return `${a}${m}${
            "string" == typeof g.fragment
              ? `#${(function q(c) {
                  return encodeURI(c);
                })(g.fragment)}`
              : ""
          }`;
        }
      }
      const rr = new Hn();
      function ir(c) {
        return c.segments.map((g) => Oe(g)).join("/");
      }
      function Fn(c, g) {
        if (!c.hasChildren()) return ir(c);
        if (g) {
          const a = c.children[Ge] ? Fn(c.children[Ge], !1) : "",
            m = [];
          return (
            Object.entries(c.children).forEach(([C, T]) => {
              C !== Ge && m.push(`${C}:${Fn(T, !1)}`);
            }),
            m.length > 0 ? `${a}(${m.join("//")})` : a
          );
        }
        {
          const a = (function Qr(c, g) {
            let a = [];
            return (
              Object.entries(c.children).forEach(([m, C]) => {
                m === Ge && (a = a.concat(g(C, m)));
              }),
              Object.entries(c.children).forEach(([m, C]) => {
                m !== Ge && (a = a.concat(g(C, m)));
              }),
              a
            );
          })(c, (m, C) =>
            C === Ge ? [Fn(c.children[Ge], !1)] : [`${C}:${Fn(m, !1)}`]
          );
          return 1 === Object.keys(c.children).length && null != c.children[Ge]
            ? `${ir(c)}/${a[0]}`
            : `${ir(c)}/(${a.join("//")})`;
        }
      }
      function ci(c) {
        return encodeURIComponent(c)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function ce(c) {
        return ci(c).replace(/%3B/gi, ";");
      }
      function k(c) {
        return ci(c)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function H(c) {
        return decodeURIComponent(c);
      }
      function ae(c) {
        return H(c.replace(/\+/g, "%20"));
      }
      function Oe(c) {
        return `${k(c.path)}${(function Ze(c) {
          return Object.keys(c)
            .map((g) => `;${k(g)}=${k(c[g])}`)
            .join("");
        })(c.parameters)}`;
      }
      const Ot = /^[^\/()?;#]+/;
      function Nt(c) {
        const g = c.match(Ot);
        return g ? g[0] : "";
      }
      const xn = /^[^\/()?;=#]+/,
        Wn = /^[^=?&#]+/,
        di = /^[^&#]+/;
      class qt {
        constructor(g) {
          (this.url = g), (this.remaining = g);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Mt([], {})
              : new Mt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const g = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(g);
            } while (this.consumeOptional("&"));
          return g;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const g = [];
          for (
            this.peekStartsWith("(") || g.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), g.push(this.parseSegment());
          let a = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (a = this.parseParens(!0)));
          let m = {};
          return (
            this.peekStartsWith("(") && (m = this.parseParens(!1)),
            (g.length > 0 || Object.keys(a).length > 0) &&
              (m[Ge] = new Mt(g, a)),
            m
          );
        }
        parseSegment() {
          const g = Nt(this.remaining);
          if ("" === g && this.peekStartsWith(";")) throw new f.vHH(4009, !1);
          return this.capture(g), new Gn(H(g), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const g = {};
          for (; this.consumeOptional(";"); ) this.parseParam(g);
          return g;
        }
        parseParam(g) {
          const a = (function wn(c) {
            const g = c.match(xn);
            return g ? g[0] : "";
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let m = "";
          if (this.consumeOptional("=")) {
            const C = Nt(this.remaining);
            C && ((m = C), this.capture(m));
          }
          g[H(a)] = H(m);
        }
        parseQueryParam(g) {
          const a = (function sn(c) {
            const g = c.match(Wn);
            return g ? g[0] : "";
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let m = "";
          if (this.consumeOptional("=")) {
            const L = (function bt(c) {
              const g = c.match(di);
              return g ? g[0] : "";
            })(this.remaining);
            L && ((m = L), this.capture(m));
          }
          const C = ae(a),
            T = ae(m);
          if (g.hasOwnProperty(C)) {
            let L = g[C];
            Array.isArray(L) || ((L = [L]), (g[C] = L)), L.push(T);
          } else g[C] = T;
        }
        parseParens(g) {
          const a = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const m = Nt(this.remaining),
              C = this.remaining[m.length];
            if ("/" !== C && ")" !== C && ";" !== C) throw new f.vHH(4010, !1);
            let T;
            m.indexOf(":") > -1
              ? ((T = m.slice(0, m.indexOf(":"))),
                this.capture(T),
                this.capture(":"))
              : g && (T = Ge);
            const L = this.parseChildren();
            (a[T] = 1 === Object.keys(L).length ? L[Ge] : new Mt([], L)),
              this.consumeOptional("//");
          }
          return a;
        }
        peekStartsWith(g) {
          return this.remaining.startsWith(g);
        }
        consumeOptional(g) {
          return (
            !!this.peekStartsWith(g) &&
            ((this.remaining = this.remaining.substring(g.length)), !0)
          );
        }
        capture(g) {
          if (!this.consumeOptional(g)) throw new f.vHH(4011, !1);
        }
      }
      function Ar(c) {
        return c.segments.length > 0 ? new Mt([], { [Ge]: c }) : c;
      }
      function fi(c) {
        const g = {};
        for (const m of Object.keys(c.children)) {
          const T = fi(c.children[m]);
          if (m === Ge && 0 === T.segments.length && T.hasChildren())
            for (const [L, Q] of Object.entries(T.children)) g[L] = Q;
          else (T.segments.length > 0 || T.hasChildren()) && (g[m] = T);
        }
        return (function so(c) {
          if (1 === c.numberOfChildren && c.children[Ge]) {
            const g = c.children[Ge];
            return new Mt(c.segments.concat(g.segments), g.children);
          }
          return c;
        })(new Mt(c.segments, g));
      }
      function qn(c) {
        return c instanceof It;
      }
      function or(c) {
        let g;
        const C = Ar(
          (function a(T) {
            const L = {};
            for (const Y of T.children) {
              const Ne = a(Y);
              L[Y.outlet] = Ne;
            }
            const Q = new Mt(T.url, L);
            return T === c && (g = Q), Q;
          })(c.root)
        );
        return g ?? C;
      }
      function hi(c, g, a, m) {
        let C = c;
        for (; C.parent; ) C = C.parent;
        if (0 === g.length) return pt(C, C, C, a, m);
        const T = (function Tr(c) {
          if ("string" == typeof c[0] && 1 === c.length && "/" === c[0])
            return new Ir(!0, 0, c);
          let g = 0,
            a = !1;
          const m = c.reduce((C, T, L) => {
            if ("object" == typeof T && null != T) {
              if (T.outlets) {
                const Q = {};
                return (
                  Object.entries(T.outlets).forEach(([Y, Ne]) => {
                    Q[Y] = "string" == typeof Ne ? Ne.split("/") : Ne;
                  }),
                  [...C, { outlets: Q }]
                );
              }
              if (T.segmentPath) return [...C, T.segmentPath];
            }
            return "string" != typeof T
              ? [...C, T]
              : 0 === L
              ? (T.split("/").forEach((Q, Y) => {
                  (0 == Y && "." === Q) ||
                    (0 == Y && "" === Q
                      ? (a = !0)
                      : ".." === Q
                      ? g++
                      : "" != Q && C.push(Q));
                }),
                C)
              : [...C, T];
          }, []);
          return new Ir(a, g, m);
        })(g);
        if (T.toRoot()) return pt(C, C, new Mt([], {}), a, m);
        const L = (function vr(c, g, a) {
            if (c.isAbsolute) return new Xr(g, !0, 0);
            if (!a) return new Xr(g, !1, NaN);
            if (null === a.parent) return new Xr(a, !0, 0);
            const m = Ln(c.commands[0]) ? 0 : 1;
            return (function Or(c, g, a) {
              let m = c,
                C = g,
                T = a;
              for (; T > C; ) {
                if (((T -= C), (m = m.parent), !m)) throw new f.vHH(4005, !1);
                C = m.segments.length;
              }
              return new Xr(m, !1, C - T);
            })(a, a.segments.length - 1 + m, c.numberOfDoubleDots);
          })(T, C, c),
          Q = L.processChildren
            ? sr(L.segmentGroup, L.index, T.commands)
            : Ai(L.segmentGroup, L.index, T.commands);
        return pt(C, L.segmentGroup, Q, a, m);
      }
      function Ln(c) {
        return (
          "object" == typeof c && null != c && !c.outlets && !c.segmentPath
        );
      }
      function Mn(c) {
        return "object" == typeof c && null != c && c.outlets;
      }
      function pt(c, g, a, m, C) {
        let L,
          T = {};
        m &&
          Object.entries(m).forEach(([Y, Ne]) => {
            T[Y] = Array.isArray(Ne) ? Ne.map((dt) => `${dt}`) : `${Ne}`;
          }),
          (L = c === g ? a : pi(c, g, a));
        const Q = Ar(fi(L));
        return new It(Q, T, C);
      }
      function pi(c, g, a) {
        const m = {};
        return (
          Object.entries(c.children).forEach(([C, T]) => {
            m[C] = T === g ? a : pi(T, g, a);
          }),
          new Mt(c.segments, m)
        );
      }
      class Ir {
        constructor(g, a, m) {
          if (
            ((this.isAbsolute = g),
            (this.numberOfDoubleDots = a),
            (this.commands = m),
            g && m.length > 0 && Ln(m[0]))
          )
            throw new f.vHH(4003, !1);
          const C = m.find(Mn);
          if (C && C !== at(m)) throw new f.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Xr {
        constructor(g, a, m) {
          (this.segmentGroup = g), (this.processChildren = a), (this.index = m);
        }
      }
      function Ai(c, g, a) {
        if (
          (c || (c = new Mt([], {})),
          0 === c.segments.length && c.hasChildren())
        )
          return sr(c, g, a);
        const m = (function uo(c, g, a) {
            let m = 0,
              C = g;
            const T = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; C < c.segments.length; ) {
              if (m >= a.length) return T;
              const L = c.segments[C],
                Q = a[m];
              if (Mn(Q)) break;
              const Y = `${Q}`,
                Ne = m < a.length - 1 ? a[m + 1] : null;
              if (C > 0 && void 0 === Y) break;
              if (Y && Ne && "object" == typeof Ne && void 0 === Ne.outlets) {
                if (!mi(Y, Ne, L)) return T;
                m += 2;
              } else {
                if (!mi(Y, {}, L)) return T;
                m++;
              }
              C++;
            }
            return { match: !0, pathIndex: C, commandIndex: m };
          })(c, g, a),
          C = a.slice(m.commandIndex);
        if (m.match && m.pathIndex < c.segments.length) {
          const T = new Mt(c.segments.slice(0, m.pathIndex), {});
          return (
            (T.children[Ge] = new Mt(
              c.segments.slice(m.pathIndex),
              c.children
            )),
            sr(T, 0, C)
          );
        }
        return m.match && 0 === C.length
          ? new Mt(c.segments, {})
          : m.match && !c.hasChildren()
          ? Ii(c, g, a)
          : m.match
          ? sr(c, 0, C)
          : Ii(c, g, a);
      }
      function sr(c, g, a) {
        if (0 === a.length) return new Mt(c.segments, {});
        {
          const m = (function gi(c) {
              return Mn(c[0]) ? c[0].outlets : { [Ge]: c };
            })(a),
            C = {};
          if (
            Object.keys(m).some((T) => T !== Ge) &&
            c.children[Ge] &&
            1 === c.numberOfChildren &&
            0 === c.children[Ge].segments.length
          ) {
            const T = sr(c.children[Ge], g, a);
            return new Mt(c.segments, T.children);
          }
          return (
            Object.entries(m).forEach(([T, L]) => {
              "string" == typeof L && (L = [L]),
                null !== L && (C[T] = Ai(c.children[T], g, L));
            }),
            Object.entries(c.children).forEach(([T, L]) => {
              void 0 === m[T] && (C[T] = L);
            }),
            new Mt(c.segments, C)
          );
        }
      }
      function Ii(c, g, a) {
        const m = c.segments.slice(0, g);
        let C = 0;
        for (; C < a.length; ) {
          const T = a[C];
          if (Mn(T)) {
            const Y = jr(T.outlets);
            return new Mt(m, Y);
          }
          if (0 === C && Ln(a[0])) {
            m.push(new Gn(c.segments[g].path, _r(a[0]))), C++;
            continue;
          }
          const L = Mn(T) ? T.outlets[Ge] : `${T}`,
            Q = C < a.length - 1 ? a[C + 1] : null;
          L && Q && Ln(Q)
            ? (m.push(new Gn(L, _r(Q))), (C += 2))
            : (m.push(new Gn(L, {})), C++);
        }
        return new Mt(m, {});
      }
      function jr(c) {
        const g = {};
        return (
          Object.entries(c).forEach(([a, m]) => {
            "string" == typeof m && (m = [m]),
              null !== m && (g[a] = Ii(new Mt([], {}), 0, m));
          }),
          g
        );
      }
      function _r(c) {
        const g = {};
        return Object.entries(c).forEach(([a, m]) => (g[a] = `${m}`)), g;
      }
      function mi(c, g, a) {
        return c == a.path && kt(g, a.parameters);
      }
      const $n = "imperative";
      class kn {
        constructor(g, a) {
          (this.id = g), (this.url = a);
        }
      }
      class Dr extends kn {
        constructor(g, a, m = "imperative", C = null) {
          super(g, a),
            (this.type = 0),
            (this.navigationTrigger = m),
            (this.restoredState = C);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ar extends kn {
        constructor(g, a, m) {
          super(g, a), (this.urlAfterRedirects = m), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class vn extends kn {
        constructor(g, a, m, C) {
          super(g, a), (this.reason = m), (this.code = C), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Nr extends kn {
        constructor(g, a, m, C) {
          super(g, a), (this.reason = m), (this.code = C), (this.type = 16);
        }
      }
      class zi extends kn {
        constructor(g, a, m, C) {
          super(g, a), (this.error = m), (this.target = C), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Zn extends kn {
        constructor(g, a, m, C) {
          super(g, a),
            (this.urlAfterRedirects = m),
            (this.state = C),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Lo extends kn {
        constructor(g, a, m, C) {
          super(g, a),
            (this.urlAfterRedirects = m),
            (this.state = C),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class lo extends kn {
        constructor(g, a, m, C, T) {
          super(g, a),
            (this.urlAfterRedirects = m),
            (this.state = C),
            (this.shouldActivate = T),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Mo extends kn {
        constructor(g, a, m, C) {
          super(g, a),
            (this.urlAfterRedirects = m),
            (this.state = C),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Jr extends kn {
        constructor(g, a, m, C) {
          super(g, a),
            (this.urlAfterRedirects = m),
            (this.state = C),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Gi {
        constructor(g) {
          (this.route = g), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class yi {
        constructor(g) {
          (this.route = g), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class co {
        constructor(g) {
          (this.snapshot = g), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ti {
        constructor(g) {
          (this.snapshot = g), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class bo {
        constructor(g) {
          (this.snapshot = g), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class So {
        constructor(g) {
          (this.snapshot = g), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Oi {
        constructor(g, a, m) {
          (this.routerEvent = g),
            (this.position = a),
            (this.anchor = m),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Wi {}
      class Ni {
        constructor(g) {
          this.url = g;
        }
      }
      class Pi {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.injector = null),
            (this.children = new Pr()),
            (this.attachRef = null);
        }
      }
      let Pr = (() => {
        class c {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(a, m) {
            const C = this.getOrCreateContext(a);
            (C.outlet = m), this.contexts.set(a, C);
          }
          onChildOutletDestroyed(a) {
            const m = this.getContext(a);
            m && ((m.outlet = null), (m.attachRef = null));
          }
          onOutletDeactivated() {
            const a = this.contexts;
            return (this.contexts = new Map()), a;
          }
          onOutletReAttached(a) {
            this.contexts = a;
          }
          getOrCreateContext(a) {
            let m = this.getContext(a);
            return m || ((m = new Pi()), this.contexts.set(a, m)), m;
          }
          getContext(a) {
            return this.contexts.get(a) || null;
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      class ft {
        constructor(g) {
          this._root = g;
        }
        get root() {
          return this._root.value;
        }
        parent(g) {
          const a = this.pathFromRoot(g);
          return a.length > 1 ? a[a.length - 2] : null;
        }
        children(g) {
          const a = Xt(g, this._root);
          return a ? a.children.map((m) => m.value) : [];
        }
        firstChild(g) {
          const a = Xt(g, this._root);
          return a && a.children.length > 0 ? a.children[0].value : null;
        }
        siblings(g) {
          const a = pn(g, this._root);
          return a.length < 2
            ? []
            : a[a.length - 2].children
                .map((C) => C.value)
                .filter((C) => C !== g);
        }
        pathFromRoot(g) {
          return pn(g, this._root).map((a) => a.value);
        }
      }
      function Xt(c, g) {
        if (c === g.value) return g;
        for (const a of g.children) {
          const m = Xt(c, a);
          if (m) return m;
        }
        return null;
      }
      function pn(c, g) {
        if (c === g.value) return [g];
        for (const a of g.children) {
          const m = pn(c, a);
          if (m.length) return m.unshift(g), m;
        }
        return [];
      }
      class _n {
        constructor(g, a) {
          (this.value = g), (this.children = a);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function dn(c) {
        const g = {};
        return c && c.children.forEach((a) => (g[a.value.outlet] = a)), g;
      }
      class ei extends ft {
        constructor(g, a) {
          super(g), (this.snapshot = a), Pt(this, g);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function qi(c, g) {
        const a = (function Rr(c, g) {
            const L = new Ae([], {}, {}, "", {}, Ge, g, null, {});
            return new Je("", new _n(L, []));
          })(0, g),
          m = new ye.X([new Gn("", {})]),
          C = new ye.X({}),
          T = new ye.X({}),
          L = new ye.X({}),
          Q = new ye.X(""),
          Y = new ur(m, C, L, Q, T, Ge, g, a.root);
        return (Y.snapshot = a.root), new ei(new _n(Y, []), a);
      }
      class ur {
        constructor(g, a, m, C, T, L, Q, Y) {
          (this.urlSubject = g),
            (this.paramsSubject = a),
            (this.queryParamsSubject = m),
            (this.fragmentSubject = C),
            (this.dataSubject = T),
            (this.outlet = L),
            (this.component = Q),
            (this._futureSnapshot = Y),
            (this.title =
              this.dataSubject?.pipe((0, je.U)((Ne) => Ne[ct])) ??
              (0, ee.of)(void 0)),
            (this.url = g),
            (this.params = a),
            (this.queryParams = m),
            (this.fragment = C),
            (this.data = T);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, je.U)((g) => on(g)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, je.U)((g) => on(g))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Zi(c, g = "emptyOnly") {
        const a = c.pathFromRoot;
        let m = 0;
        if ("always" !== g)
          for (m = a.length - 1; m >= 1; ) {
            const C = a[m],
              T = a[m - 1];
            if (C.routeConfig && "" === C.routeConfig.path) m--;
            else {
              if (T.component) break;
              m--;
            }
          }
        return (function Wt(c) {
          return c.reduce(
            (g, a) => ({
              params: { ...g.params, ...a.params },
              data: { ...g.data, ...a.data },
              resolve: {
                ...a.data,
                ...g.resolve,
                ...a.routeConfig?.data,
                ...a._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(a.slice(m));
      }
      class Ae {
        get title() {
          return this.data?.[ct];
        }
        constructor(g, a, m, C, T, L, Q, Y, Ne) {
          (this.url = g),
            (this.params = a),
            (this.queryParams = m),
            (this.fragment = C),
            (this.data = T),
            (this.outlet = L),
            (this.component = Q),
            (this.routeConfig = Y),
            (this._resolve = Ne);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = on(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = on(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((m) => m.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Je extends ft {
        constructor(g, a) {
          super(a), (this.url = g), Pt(this, a);
        }
        toString() {
          return Vn(this._root);
        }
      }
      function Pt(c, g) {
        (g.value._routerState = c), g.children.forEach((a) => Pt(c, a));
      }
      function Vn(c) {
        const g =
          c.children.length > 0 ? ` { ${c.children.map(Vn).join(", ")} } ` : "";
        return `${c.value}${g}`;
      }
      function Ur(c) {
        if (c.snapshot) {
          const g = c.snapshot,
            a = c._futureSnapshot;
          (c.snapshot = a),
            kt(g.queryParams, a.queryParams) ||
              c.queryParamsSubject.next(a.queryParams),
            g.fragment !== a.fragment && c.fragmentSubject.next(a.fragment),
            kt(g.params, a.params) || c.paramsSubject.next(a.params),
            (function gr(c, g) {
              if (c.length !== g.length) return !1;
              for (let a = 0; a < c.length; ++a) if (!kt(c[a], g[a])) return !1;
              return !0;
            })(g.url, a.url) || c.urlSubject.next(a.url),
            kt(g.data, a.data) || c.dataSubject.next(a.data);
        } else
          (c.snapshot = c._futureSnapshot),
            c.dataSubject.next(c._futureSnapshot.data);
      }
      function Jt(c, g) {
        const a =
          kt(c.params, g.params) &&
          (function yr(c, g) {
            return (
              Rn(c, g) && c.every((a, m) => kt(a.parameters, g[m].parameters))
            );
          })(c.url, g.url);
        return (
          a &&
          !(!c.parent != !g.parent) &&
          (!c.parent || Jt(c.parent, g.parent))
        );
      }
      let Fr = (() => {
        class c {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Ge),
              (this.activateEvents = new f.vpe()),
              (this.deactivateEvents = new f.vpe()),
              (this.attachEvents = new f.vpe()),
              (this.detachEvents = new f.vpe()),
              (this.parentContexts = (0, f.f3M)(Pr)),
              (this.location = (0, f.f3M)(f.s_b)),
              (this.changeDetector = (0, f.f3M)(f.sBO)),
              (this.environmentInjector = (0, f.f3M)(f.lqb)),
              (this.inputBinder = (0, f.f3M)(Yn, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(a) {
            if (a.name) {
              const { firstChange: m, previousValue: C } = a.name;
              if (m) return;
              this.isTrackedInParentContexts(C) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(C)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(a) {
            return this.parentContexts.getContext(a)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const a = this.parentContexts.getContext(this.name);
            a?.route &&
              (a.attachRef
                ? this.attach(a.attachRef, a.route)
                : this.activateWith(a.route, a.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new f.vHH(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new f.vHH(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new f.vHH(4012, !1);
            this.location.detach();
            const a = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(a.instance),
              a
            );
          }
          attach(a, m) {
            (this.activated = a),
              (this._activatedRoute = m),
              this.location.insert(a.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(a.instance);
          }
          deactivate() {
            if (this.activated) {
              const a = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(a);
            }
          }
          activateWith(a, m) {
            if (this.isActivated) throw new f.vHH(4013, !1);
            this._activatedRoute = a;
            const C = this.location,
              L = a.snapshot.component,
              Q = this.parentContexts.getOrCreateContext(this.name).children,
              Y = new Zt(a, Q, C.injector);
            (this.activated = C.createComponent(L, {
              index: C.length,
              injector: Y,
              environmentInjector: m ?? this.environmentInjector,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵdir = f.lG2({
            type: c,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [f.TTD],
          }));
        }
        return c;
      })();
      class Zt {
        constructor(g, a, m) {
          (this.route = g), (this.childContexts = a), (this.parent = m);
        }
        get(g, a) {
          return g === ur
            ? this.route
            : g === Pr
            ? this.childContexts
            : this.parent.get(g, a);
        }
      }
      const Yn = new f.OlP("");
      let Dn = (() => {
        class c {
          constructor() {
            this.outletDataSubscriptions = new Map();
          }
          bindActivatedRouteToOutletComponent(a) {
            this.unsubscribeFromRouteData(a), this.subscribeToRouteData(a);
          }
          unsubscribeFromRouteData(a) {
            this.outletDataSubscriptions.get(a)?.unsubscribe(),
              this.outletDataSubscriptions.delete(a);
          }
          subscribeToRouteData(a) {
            const { activatedRoute: m } = a,
              C = Re([m.queryParams, m.params, m.data])
                .pipe(
                  (0, yn.w)(
                    ([T, L, Q], Y) => (
                      (Q = { ...T, ...L, ...Q }),
                      0 === Y ? (0, ee.of)(Q) : Promise.resolve(Q)
                    )
                  )
                )
                .subscribe((T) => {
                  if (
                    !a.isActivated ||
                    !a.activatedComponentRef ||
                    a.activatedRoute !== m ||
                    null === m.component
                  )
                    return void this.unsubscribeFromRouteData(a);
                  const L = (0, f.qFp)(m.component);
                  if (L)
                    for (const { templateName: Q } of L.inputs)
                      a.activatedComponentRef.setInput(Q, T[Q]);
                  else this.unsubscribeFromRouteData(a);
                });
            this.outletDataSubscriptions.set(a, C);
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({ token: c, factory: c.ɵfac }));
        }
        return c;
      })();
      function bn(c, g, a) {
        if (a && c.shouldReuseRoute(g.value, a.value.snapshot)) {
          const m = a.value;
          m._futureSnapshot = g.value;
          const C = (function Ri(c, g, a) {
            return g.children.map((m) => {
              for (const C of a.children)
                if (c.shouldReuseRoute(m.value, C.value.snapshot))
                  return bn(c, m, C);
              return bn(c, m);
            });
          })(c, g, a);
          return new _n(m, C);
        }
        {
          if (c.shouldAttach(g.value)) {
            const T = c.retrieve(g.value);
            if (null !== T) {
              const L = T.route;
              return (
                (L.value._futureSnapshot = g.value),
                (L.children = g.children.map((Q) => bn(c, Q))),
                L
              );
            }
          }
          const m = (function ti(c) {
              return new ur(
                new ye.X(c.url),
                new ye.X(c.params),
                new ye.X(c.queryParams),
                new ye.X(c.fragment),
                new ye.X(c.data),
                c.outlet,
                c.component,
                c
              );
            })(g.value),
            C = g.children.map((T) => bn(c, T));
          return new _n(m, C);
        }
      }
      const Ut = "ngNavigationCancelingError";
      function Bn(c, g) {
        const { redirectTo: a, navigationBehaviorOptions: m } = qn(g)
            ? { redirectTo: g, navigationBehaviorOptions: void 0 }
            : g,
          C = Cr(!1, 0, g);
        return (C.url = a), (C.navigationBehaviorOptions = m), C;
      }
      function Cr(c, g, a) {
        const m = new Error("NavigationCancelingError: " + (c || ""));
        return (m[Ut] = !0), (m.cancellationCode = g), a && (m.url = a), m;
      }
      function Er(c) {
        return c && c[Ut];
      }
      let Fi = (() => {
        class c {
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵcmp = f.Xpm({
            type: c,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [f.jDz],
            decls: 1,
            vars: 0,
            template: function (m, C) {
              1 & m && f._UZ(0, "router-outlet");
            },
            dependencies: [Fr],
            encapsulation: 2,
          }));
        }
        return c;
      })();
      function xr(c) {
        const g = c.children && c.children.map(xr),
          a = g ? { ...c, children: g } : { ...c };
        return (
          !a.component &&
            !a.loadComponent &&
            (g || a.loadChildren) &&
            a.outlet &&
            a.outlet !== Ge &&
            (a.component = Fi),
          a
        );
      }
      function an(c) {
        return c.outlet || Ge;
      }
      function un(c) {
        if (!c) return null;
        if (c.routeConfig?._injector) return c.routeConfig._injector;
        for (let g = c.parent; g; g = g.parent) {
          const a = g.routeConfig;
          if (a?._loadedInjector) return a._loadedInjector;
          if (a?._injector) return a._injector;
        }
        return null;
      }
      class gn {
        constructor(g, a, m, C, T) {
          (this.routeReuseStrategy = g),
            (this.futureState = a),
            (this.currState = m),
            (this.forwardEvent = C),
            (this.inputBindingEnabled = T);
        }
        activate(g) {
          const a = this.futureState._root,
            m = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(a, m, g),
            Ur(this.futureState.root),
            this.activateChildRoutes(a, m, g);
        }
        deactivateChildRoutes(g, a, m) {
          const C = dn(a);
          g.children.forEach((T) => {
            const L = T.value.outlet;
            this.deactivateRoutes(T, C[L], m), delete C[L];
          }),
            Object.values(C).forEach((T) => {
              this.deactivateRouteAndItsChildren(T, m);
            });
        }
        deactivateRoutes(g, a, m) {
          const C = g.value,
            T = a ? a.value : null;
          if (C === T)
            if (C.component) {
              const L = m.getContext(C.outlet);
              L && this.deactivateChildRoutes(g, a, L.children);
            } else this.deactivateChildRoutes(g, a, m);
          else T && this.deactivateRouteAndItsChildren(a, m);
        }
        deactivateRouteAndItsChildren(g, a) {
          g.value.component &&
          this.routeReuseStrategy.shouldDetach(g.value.snapshot)
            ? this.detachAndStoreRouteSubtree(g, a)
            : this.deactivateRouteAndOutlet(g, a);
        }
        detachAndStoreRouteSubtree(g, a) {
          const m = a.getContext(g.value.outlet),
            C = m && g.value.component ? m.children : a,
            T = dn(g);
          for (const L of Object.keys(T))
            this.deactivateRouteAndItsChildren(T[L], C);
          if (m && m.outlet) {
            const L = m.outlet.detach(),
              Q = m.children.onOutletDeactivated();
            this.routeReuseStrategy.store(g.value.snapshot, {
              componentRef: L,
              route: g,
              contexts: Q,
            });
          }
        }
        deactivateRouteAndOutlet(g, a) {
          const m = a.getContext(g.value.outlet),
            C = m && g.value.component ? m.children : a,
            T = dn(g);
          for (const L of Object.keys(T))
            this.deactivateRouteAndItsChildren(T[L], C);
          m &&
            (m.outlet &&
              (m.outlet.deactivate(), m.children.onOutletDeactivated()),
            (m.attachRef = null),
            (m.route = null));
        }
        activateChildRoutes(g, a, m) {
          const C = dn(a);
          g.children.forEach((T) => {
            this.activateRoutes(T, C[T.value.outlet], m),
              this.forwardEvent(new So(T.value.snapshot));
          }),
            g.children.length && this.forwardEvent(new Ti(g.value.snapshot));
        }
        activateRoutes(g, a, m) {
          const C = g.value,
            T = a ? a.value : null;
          if ((Ur(C), C === T))
            if (C.component) {
              const L = m.getOrCreateContext(C.outlet);
              this.activateChildRoutes(g, a, L.children);
            } else this.activateChildRoutes(g, a, m);
          else if (C.component) {
            const L = m.getOrCreateContext(C.outlet);
            if (this.routeReuseStrategy.shouldAttach(C.snapshot)) {
              const Q = this.routeReuseStrategy.retrieve(C.snapshot);
              this.routeReuseStrategy.store(C.snapshot, null),
                L.children.onOutletReAttached(Q.contexts),
                (L.attachRef = Q.componentRef),
                (L.route = Q.route.value),
                L.outlet && L.outlet.attach(Q.componentRef, Q.route.value),
                Ur(Q.route.value),
                this.activateChildRoutes(g, null, L.children);
            } else {
              const Q = un(C.snapshot);
              (L.attachRef = null),
                (L.route = C),
                (L.injector = Q),
                L.outlet && L.outlet.activateWith(C, L.injector),
                this.activateChildRoutes(g, null, L.children);
            }
          } else this.activateChildRoutes(g, null, m);
        }
      }
      class Ki {
        constructor(g) {
          (this.path = g), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Mr {
        constructor(g, a) {
          (this.component = g), (this.route = a);
        }
      }
      function Qi(c, g, a) {
        const m = c._root;
        return xi(m, g ? g._root : null, a, [m.value]);
      }
      function $r(c, g) {
        const a = Symbol(),
          m = g.get(c, a);
        return m === a
          ? "function" != typeof c || (0, f.Z0I)(c)
            ? g.get(c)
            : c
          : m;
      }
      function xi(
        c,
        g,
        a,
        m,
        C = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const T = dn(g);
        return (
          c.children.forEach((L) => {
            (function fo(
              c,
              g,
              a,
              m,
              C = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const T = c.value,
                L = g ? g.value : null,
                Q = a ? a.getContext(c.value.outlet) : null;
              if (L && T.routeConfig === L.routeConfig) {
                const Y = (function Yt(c, g, a) {
                  if ("function" == typeof a) return a(c, g);
                  switch (a) {
                    case "pathParamsChange":
                      return !Rn(c.url, g.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Rn(c.url, g.url) || !kt(c.queryParams, g.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Jt(c, g) || !kt(c.queryParams, g.queryParams);
                    default:
                      return !Jt(c, g);
                  }
                })(L, T, T.routeConfig.runGuardsAndResolvers);
                Y
                  ? C.canActivateChecks.push(new Ki(m))
                  : ((T.data = L.data), (T._resolvedData = L._resolvedData)),
                  xi(c, g, T.component ? (Q ? Q.children : null) : a, m, C),
                  Y &&
                    Q &&
                    Q.outlet &&
                    Q.outlet.isActivated &&
                    C.canDeactivateChecks.push(new Mr(Q.outlet.component, L));
              } else
                L && Li(g, Q, C),
                  C.canActivateChecks.push(new Ki(m)),
                  xi(c, null, T.component ? (Q ? Q.children : null) : a, m, C);
            })(L, T[L.value.outlet], a, m.concat([L.value]), C),
              delete T[L.value.outlet];
          }),
          Object.entries(T).forEach(([L, Q]) => Li(Q, a.getContext(L), C)),
          C
        );
      }
      function Li(c, g, a) {
        const m = dn(c),
          C = c.value;
        Object.entries(m).forEach(([T, L]) => {
          Li(L, C.component ? (g ? g.children.getContext(T) : null) : g, a);
        }),
          a.canDeactivateChecks.push(
            new Mr(
              C.component && g && g.outlet && g.outlet.isActivated
                ? g.outlet.component
                : null,
              C
            )
          );
      }
      function _i(c) {
        return "function" == typeof c;
      }
      function zr(c) {
        return c instanceof yt.K || "EmptyError" === c?.name;
      }
      const br = Symbol("INITIAL_VALUE");
      function Gr() {
        return (0, yn.w)((c) =>
          Re(
            c.map((g) =>
              g.pipe(
                (0, tr.q)(1),
                (function Kr(...c) {
                  const g = (0, re.yG)(c);
                  return (0, Ee.e)((a, m) => {
                    (g ? (0, rt.z)(c, a, g) : (0, rt.z)(c, a)).subscribe(m);
                  });
                })(br)
              )
            )
          ).pipe(
            (0, je.U)((g) => {
              for (const a of g)
                if (!0 !== a) {
                  if (a === br) return br;
                  if (!1 === a || a instanceof It) return a;
                }
              return !0;
            }),
            (0, Nn.h)((g) => g !== br),
            (0, tr.q)(1)
          )
        );
      }
      function B(c) {
        return (0, fe.z)(
          (0, te.b)((g) => {
            if (qn(g)) throw Bn(0, g);
          }),
          (0, je.U)((g) => !0 === g)
        );
      }
      class W {
        constructor(g) {
          this.segmentGroup = g || null;
        }
      }
      class ne {
        constructor(g) {
          this.urlTree = g;
        }
      }
      function Se(c) {
        return de(new W(c));
      }
      function Pe(c) {
        return de(new ne(c));
      }
      class We {
        constructor(g, a) {
          (this.urlSerializer = g), (this.urlTree = a);
        }
        noMatchError(g) {
          return new f.vHH(4002, !1);
        }
        lineralizeSegments(g, a) {
          let m = [],
            C = a.root;
          for (;;) {
            if (((m = m.concat(C.segments)), 0 === C.numberOfChildren))
              return (0, ee.of)(m);
            if (C.numberOfChildren > 1 || !C.children[Ge])
              return de(new f.vHH(4e3, !1));
            C = C.children[Ge];
          }
        }
        applyRedirectCommands(g, a, m) {
          return this.applyRedirectCreateUrlTree(
            a,
            this.urlSerializer.parse(a),
            g,
            m
          );
        }
        applyRedirectCreateUrlTree(g, a, m, C) {
          const T = this.createSegmentGroup(g, a.root, m, C);
          return new It(
            T,
            this.createQueryParams(a.queryParams, this.urlTree.queryParams),
            a.fragment
          );
        }
        createQueryParams(g, a) {
          const m = {};
          return (
            Object.entries(g).forEach(([C, T]) => {
              if ("string" == typeof T && T.startsWith(":")) {
                const Q = T.substring(1);
                m[C] = a[Q];
              } else m[C] = T;
            }),
            m
          );
        }
        createSegmentGroup(g, a, m, C) {
          const T = this.createSegments(g, a.segments, m, C);
          let L = {};
          return (
            Object.entries(a.children).forEach(([Q, Y]) => {
              L[Q] = this.createSegmentGroup(g, Y, m, C);
            }),
            new Mt(T, L)
          );
        }
        createSegments(g, a, m, C) {
          return a.map((T) =>
            T.path.startsWith(":")
              ? this.findPosParam(g, T, C)
              : this.findOrReturn(T, m)
          );
        }
        findPosParam(g, a, m) {
          const C = m[a.path.substring(1)];
          if (!C) throw new f.vHH(4001, !1);
          return C;
        }
        findOrReturn(g, a) {
          let m = 0;
          for (const C of a) {
            if (C.path === g.path) return a.splice(m), C;
            m++;
          }
          return g;
        }
      }
      const nt = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Ht(c, g, a, m, C) {
        const T = en(c, g, a);
        return T.matched
          ? ((m = (function wr(c, g) {
              return (
                c.providers &&
                  !c._injector &&
                  (c._injector = (0, f.MMx)(
                    c.providers,
                    g,
                    `Route: ${c.path}`
                  )),
                c._injector ?? g
              );
            })(g, m)),
            (function V(c, g, a, m) {
              const C = g.canMatch;
              if (!C || 0 === C.length) return (0, ee.of)(!0);
              const T = C.map((L) => {
                const Q = $r(L, c);
                return Cn(
                  (function Ue(c) {
                    return c && _i(c.canMatch);
                  })(Q)
                    ? Q.canMatch(g, a)
                    : c.runInContext(() => Q(g, a))
                );
              });
              return (0, ee.of)(T).pipe(Gr(), B());
            })(m, g, a).pipe((0, je.U)((L) => (!0 === L ? T : { ...nt }))))
          : (0, ee.of)(T);
      }
      function en(c, g, a) {
        if ("" === g.path)
          return "full" === g.pathMatch && (c.hasChildren() || a.length > 0)
            ? { ...nt }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: a,
                parameters: {},
                positionalParamSegments: {},
              };
        const C = (g.matcher || Tn)(a, c, g);
        if (!C) return { ...nt };
        const T = {};
        Object.entries(C.posParams ?? {}).forEach(([Q, Y]) => {
          T[Q] = Y.path;
        });
        const L =
          C.consumed.length > 0
            ? { ...T, ...C.consumed[C.consumed.length - 1].parameters }
            : T;
        return {
          matched: !0,
          consumedSegments: C.consumed,
          remainingSegments: a.slice(C.consumed.length),
          parameters: L,
          positionalParamSegments: C.posParams ?? {},
        };
      }
      function fn(c, g, a, m) {
        return a.length > 0 &&
          (function ni(c, g, a) {
            return a.some((m) => tn(c, g, m) && an(m) !== Ge);
          })(c, a, m)
          ? {
              segmentGroup: new Mt(g, An(m, new Mt(a, c.children))),
              slicedSegments: [],
            }
          : 0 === a.length &&
            (function Kn(c, g, a) {
              return a.some((m) => tn(c, g, m));
            })(c, a, m)
          ? {
              segmentGroup: new Mt(c.segments, On(c, 0, a, m, c.children)),
              slicedSegments: a,
            }
          : { segmentGroup: new Mt(c.segments, c.children), slicedSegments: a };
      }
      function On(c, g, a, m, C) {
        const T = {};
        for (const L of m)
          if (tn(c, a, L) && !C[an(L)]) {
            const Q = new Mt([], {});
            T[an(L)] = Q;
          }
        return { ...C, ...T };
      }
      function An(c, g) {
        const a = {};
        a[Ge] = g;
        for (const m of c)
          if ("" === m.path && an(m) !== Ge) {
            const C = new Mt([], {});
            a[an(m)] = C;
          }
        return a;
      }
      function tn(c, g, a) {
        return (
          (!(c.hasChildren() || g.length > 0) || "full" !== a.pathMatch) &&
          "" === a.path
        );
      }
      class ss {
        constructor(g, a, m, C, T, L, Q) {
          (this.injector = g),
            (this.configLoader = a),
            (this.rootComponentType = m),
            (this.config = C),
            (this.urlTree = T),
            (this.paramsInheritanceStrategy = L),
            (this.urlSerializer = Q),
            (this.allowRedirects = !0),
            (this.applyRedirects = new We(this.urlSerializer, this.urlTree));
        }
        noMatchError(g) {
          return new f.vHH(4002, !1);
        }
        recognize() {
          const g = fn(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            g,
            Ge
          ).pipe(
            me((a) => {
              if (a instanceof ne)
                return (
                  (this.allowRedirects = !1),
                  (this.urlTree = a.urlTree),
                  this.match(a.urlTree)
                );
              throw a instanceof W ? this.noMatchError(a) : a;
            }),
            (0, je.U)((a) => {
              const m = new Ae(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Ge,
                  this.rootComponentType,
                  null,
                  {}
                ),
                C = new _n(m, a),
                T = new Je("", C),
                L = (function ao(c, g, a = null, m = null) {
                  return hi(or(c), g, a, m);
                })(m, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (L.queryParams = this.urlTree.queryParams),
                (T.url = this.urlSerializer.serialize(L)),
                this.inheritParamsAndData(T._root),
                { state: T, tree: L }
              );
            })
          );
        }
        match(g) {
          return this.processSegmentGroup(
            this.injector,
            this.config,
            g.root,
            Ge
          ).pipe(
            me((m) => {
              throw m instanceof W ? this.noMatchError(m) : m;
            })
          );
        }
        inheritParamsAndData(g) {
          const a = g.value,
            m = Zi(a, this.paramsInheritanceStrategy);
          (a.params = Object.freeze(m.params)),
            (a.data = Object.freeze(m.data)),
            g.children.forEach((C) => this.inheritParamsAndData(C));
        }
        processSegmentGroup(g, a, m, C) {
          return 0 === m.segments.length && m.hasChildren()
            ? this.processChildren(g, a, m)
            : this.processSegment(g, a, m, m.segments, C, !0);
        }
        processChildren(g, a, m) {
          const C = [];
          for (const T of Object.keys(m.children))
            "primary" === T ? C.unshift(T) : C.push(T);
          return (0, J.D)(C).pipe(
            se((T) => {
              const L = m.children[T],
                Q = (function vi(c, g) {
                  const a = c.filter((m) => an(m) === g);
                  return a.push(...c.filter((m) => an(m) !== g)), a;
                })(a, T);
              return this.processSegmentGroup(g, Q, L, T);
            }),
            (function et(c, g) {
              return (0, Ee.e)((0, we.U)(c, g, arguments.length >= 2, !0));
            })((T, L) => (T.push(...L), T)),
            (0, Dt.d)(null),
            (function Lt(c, g) {
              const a = arguments.length >= 2;
              return (m) =>
                m.pipe(
                  c ? (0, Nn.h)((C, T) => c(C, T, m)) : _e.y,
                  ln(1),
                  a ? (0, Dt.d)(g) : (0, Qe.T)(() => new yt.K())
                );
            })(),
            (0, z.z)((T) => {
              if (null === T) return Se(m);
              const L = Ji(T);
              return (
                (function ho(c) {
                  c.sort((g, a) =>
                    g.value.outlet === Ge
                      ? -1
                      : a.value.outlet === Ge
                      ? 1
                      : g.value.outlet.localeCompare(a.value.outlet)
                  );
                })(L),
                (0, ee.of)(L)
              );
            })
          );
        }
        processSegment(g, a, m, C, T, L) {
          return (0, J.D)(a).pipe(
            se((Q) =>
              this.processSegmentAgainstRoute(
                Q._injector ?? g,
                a,
                Q,
                m,
                C,
                T,
                L
              ).pipe(
                me((Y) => {
                  if (Y instanceof W) return (0, ee.of)(null);
                  throw Y;
                })
              )
            ),
            (0, X.P)((Q) => !!Q),
            me((Q) => {
              if (zr(Q))
                return (function Di(c, g, a) {
                  return 0 === g.length && !c.children[a];
                })(m, C, T)
                  ? (0, ee.of)([])
                  : Se(m);
              throw Q;
            })
          );
        }
        processSegmentAgainstRoute(g, a, m, C, T, L, Q) {
          return (function Wr(c, g, a, m) {
            return (
              !!(an(c) === m || (m !== Ge && tn(g, a, c))) &&
              ("**" === c.path || en(g, c, a).matched)
            );
          })(m, C, T, L)
            ? void 0 === m.redirectTo
              ? this.matchSegmentAgainstRoute(g, C, m, T, L, Q)
              : Q && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(g, C, a, m, T, L)
              : Se(C)
            : Se(C);
        }
        expandSegmentAgainstRouteUsingRedirect(g, a, m, C, T, L) {
          return "**" === C.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(g, m, C, L)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                g,
                a,
                m,
                C,
                T,
                L
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(g, a, m, C) {
          const T = this.applyRedirects.applyRedirectCommands(
            [],
            m.redirectTo,
            {}
          );
          return m.redirectTo.startsWith("/")
            ? Pe(T)
            : this.applyRedirects.lineralizeSegments(m, T).pipe(
                (0, z.z)((L) => {
                  const Q = new Mt(L, {});
                  return this.processSegment(g, a, Q, L, C, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(g, a, m, C, T, L) {
          const {
            matched: Q,
            consumedSegments: Y,
            remainingSegments: Ne,
            positionalParamSegments: dt,
          } = en(a, C, T);
          if (!Q) return Se(a);
          const Kt = this.applyRedirects.applyRedirectCommands(
            Y,
            C.redirectTo,
            dt
          );
          return C.redirectTo.startsWith("/")
            ? Pe(Kt)
            : this.applyRedirects
                .lineralizeSegments(C, Kt)
                .pipe(
                  (0, z.z)((xt) =>
                    this.processSegment(g, m, a, xt.concat(Ne), L, !1)
                  )
                );
        }
        matchSegmentAgainstRoute(g, a, m, C, T, L) {
          let Q;
          if ("**" === m.path) {
            const Y = C.length > 0 ? at(C).parameters : {},
              Ne = new Ae(
                C,
                Y,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                d(m),
                an(m),
                m.component ?? m._loadedComponent ?? null,
                m,
                M(m)
              );
            (Q = (0, ee.of)({
              snapshot: Ne,
              consumedSegments: [],
              remainingSegments: [],
            })),
              (a.children = {});
          } else
            Q = Ht(a, m, C, g).pipe(
              (0, je.U)(
                ({
                  matched: Y,
                  consumedSegments: Ne,
                  remainingSegments: dt,
                  parameters: Kt,
                }) =>
                  Y
                    ? {
                        snapshot: new Ae(
                          Ne,
                          Kt,
                          Object.freeze({ ...this.urlTree.queryParams }),
                          this.urlTree.fragment,
                          d(m),
                          an(m),
                          m.component ?? m._loadedComponent ?? null,
                          m,
                          M(m)
                        ),
                        consumedSegments: Ne,
                        remainingSegments: dt,
                      }
                    : null
              )
            );
          return Q.pipe(
            (0, yn.w)((Y) =>
              null === Y
                ? Se(a)
                : this.getChildConfig((g = m._injector ?? g), m, C).pipe(
                    (0, yn.w)(({ routes: Ne }) => {
                      const dt = m._loadedInjector ?? g,
                        {
                          snapshot: Kt,
                          consumedSegments: xt,
                          remainingSegments: Mi,
                        } = Y,
                        { segmentGroup: Ko, slicedSegments: Qo } = fn(
                          a,
                          xt,
                          Mi,
                          Ne
                        );
                      if (0 === Qo.length && Ko.hasChildren())
                        return this.processChildren(dt, Ne, Ko).pipe(
                          (0, je.U)((ii) =>
                            null === ii ? null : [new _n(Kt, ii)]
                          )
                        );
                      if (0 === Ne.length && 0 === Qo.length)
                        return (0, ee.of)([new _n(Kt, [])]);
                      const Xn = an(m) === T;
                      return this.processSegment(
                        dt,
                        Ne,
                        Ko,
                        Qo,
                        Xn ? Ge : T,
                        !0
                      ).pipe((0, je.U)((ii) => [new _n(Kt, ii)]));
                    })
                  )
            )
          );
        }
        getChildConfig(g, a, m) {
          return a.children
            ? (0, ee.of)({ routes: a.children, injector: g })
            : a.loadChildren
            ? void 0 !== a._loadedRoutes
              ? (0, ee.of)({
                  routes: a._loadedRoutes,
                  injector: a._loadedInjector,
                })
              : (function P(c, g, a, m) {
                  const C = g.canLoad;
                  if (void 0 === C || 0 === C.length) return (0, ee.of)(!0);
                  const T = C.map((L) => {
                    const Q = $r(L, c);
                    return Cn(
                      (function b(c) {
                        return c && _i(c.canLoad);
                      })(Q)
                        ? Q.canLoad(g, a)
                        : c.runInContext(() => Q(g, a))
                    );
                  });
                  return (0, ee.of)(T).pipe(Gr(), B());
                })(g, a, m).pipe(
                  (0, z.z)((C) =>
                    C
                      ? this.configLoader.loadChildren(g, a).pipe(
                          (0, te.b)((T) => {
                            (a._loadedRoutes = T.routes),
                              (a._loadedInjector = T.injector);
                          })
                        )
                      : (function ut(c) {
                          return de(Cr(!1, 3));
                        })()
                  )
                )
            : (0, ee.of)({ routes: [], injector: g });
        }
      }
      function Vi(c) {
        const g = c.value.routeConfig;
        return g && "" === g.path;
      }
      function Ji(c) {
        const g = [],
          a = new Set();
        for (const m of c) {
          if (!Vi(m)) {
            g.push(m);
            continue;
          }
          const C = g.find((T) => m.value.routeConfig === T.value.routeConfig);
          void 0 !== C ? (C.children.push(...m.children), a.add(C)) : g.push(m);
        }
        for (const m of a) {
          const C = Ji(m.children);
          g.push(new _n(m.value, C));
        }
        return g.filter((m) => !a.has(m));
      }
      function d(c) {
        return c.data || {};
      }
      function M(c) {
        return c.resolve || {};
      }
      function Ye(c) {
        return "string" == typeof c.title || null === c.title;
      }
      function Rt(c) {
        return (0, yn.w)((g) => {
          const a = c(g);
          return a ? (0, J.D)(a).pipe((0, je.U)(() => g)) : (0, ee.of)(g);
        });
      }
      const Ct = new f.OlP("ROUTES");
      let ze = (() => {
        class c {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = (0, f.f3M)(f.Sil));
          }
          loadComponent(a) {
            if (this.componentLoaders.get(a))
              return this.componentLoaders.get(a);
            if (a._loadedComponent) return (0, ee.of)(a._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(a);
            const m = Cn(a.loadComponent()).pipe(
                (0, je.U)(nn),
                (0, te.b)((T) => {
                  this.onLoadEndListener && this.onLoadEndListener(a),
                    (a._loadedComponent = T);
                }),
                Vt(() => {
                  this.componentLoaders.delete(a);
                })
              ),
              C = new he(m, () => new jt.x()).pipe(Ke());
            return this.componentLoaders.set(a, C), C;
          }
          loadChildren(a, m) {
            if (this.childrenLoaders.get(m)) return this.childrenLoaders.get(m);
            if (m._loadedRoutes)
              return (0, ee.of)({
                routes: m._loadedRoutes,
                injector: m._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(m);
            const T = (function Bt(c, g, a, m) {
                return Cn(c.loadChildren()).pipe(
                  (0, je.U)(nn),
                  (0, z.z)((C) =>
                    C instanceof f.YKP || Array.isArray(C)
                      ? (0, ee.of)(C)
                      : (0, J.D)(g.compileModuleAsync(C))
                  ),
                  (0, je.U)((C) => {
                    m && m(c);
                    let T,
                      L,
                      Q = !1;
                    return (
                      Array.isArray(C)
                        ? ((L = C), !0)
                        : ((T = C.create(a).injector),
                          (L = T.get(Ct, [], {
                            optional: !0,
                            self: !0,
                          }).flat())),
                      { routes: L.map(xr), injector: T }
                    );
                  })
                );
              })(m, this.compiler, a, this.onLoadEndListener).pipe(
                Vt(() => {
                  this.childrenLoaders.delete(m);
                })
              ),
              L = new he(T, () => new jt.x()).pipe(Ke());
            return this.childrenLoaders.set(m, L), L;
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      function nn(c) {
        return (function gt(c) {
          return c && "object" == typeof c && "default" in c;
        })(c)
          ? c.default
          : c;
      }
      let fr = (() => {
        class c {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new jt.x()),
              (this.transitionAbortSubject = new jt.x()),
              (this.configLoader = (0, f.f3M)(ze)),
              (this.environmentInjector = (0, f.f3M)(f.lqb)),
              (this.urlSerializer = (0, f.f3M)(cn)),
              (this.rootContexts = (0, f.f3M)(Pr)),
              (this.inputBindingEnabled =
                null !== (0, f.f3M)(Yn, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, ee.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (C) =>
                this.events.next(new yi(C))),
              (this.configLoader.onLoadStartListener = (C) =>
                this.events.next(new Gi(C)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(a) {
            const m = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...a, id: m });
          }
          setupNavigations(a, m, C) {
            return (
              (this.transitions = new ye.X({
                id: 0,
                currentUrlTree: m,
                currentRawUrl: m,
                currentBrowserUrl: m,
                extractedUrl: a.urlHandlingStrategy.extract(m),
                urlAfterRedirects: a.urlHandlingStrategy.extract(m),
                rawUrl: m,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: $n,
                restoredState: null,
                currentSnapshot: C.snapshot,
                targetSnapshot: null,
                currentRouterState: C,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, Nn.h)((T) => 0 !== T.id),
                (0, je.U)((T) => ({
                  ...T,
                  extractedUrl: a.urlHandlingStrategy.extract(T.rawUrl),
                })),
                (0, yn.w)((T) => {
                  this.currentTransition = T;
                  let L = !1,
                    Q = !1;
                  return (0, ee.of)(T).pipe(
                    (0, te.b)((Y) => {
                      this.currentNavigation = {
                        id: Y.id,
                        initialUrl: Y.rawUrl,
                        extractedUrl: Y.extractedUrl,
                        trigger: Y.source,
                        extras: Y.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, yn.w)((Y) => {
                      const Ne = Y.currentBrowserUrl.toString(),
                        dt =
                          !a.navigated ||
                          Y.extractedUrl.toString() !== Ne ||
                          Ne !== Y.currentUrlTree.toString();
                      if (
                        !dt &&
                        "reload" !==
                          (Y.extras.onSameUrlNavigation ??
                            a.onSameUrlNavigation)
                      ) {
                        const xt = "";
                        return (
                          this.events.next(
                            new Nr(
                              Y.id,
                              this.urlSerializer.serialize(Y.rawUrl),
                              xt,
                              0
                            )
                          ),
                          Y.resolve(null),
                          Le.E
                        );
                      }
                      if (a.urlHandlingStrategy.shouldProcessUrl(Y.rawUrl))
                        return (0, ee.of)(Y).pipe(
                          (0, yn.w)((xt) => {
                            const Mi = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new Dr(
                                  xt.id,
                                  this.urlSerializer.serialize(xt.extractedUrl),
                                  xt.source,
                                  xt.restoredState
                                )
                              ),
                              Mi !== this.transitions?.getValue()
                                ? Le.E
                                : Promise.resolve(xt)
                            );
                          }),
                          (function y(c, g, a, m, C, T) {
                            return (0, z.z)((L) =>
                              (function Ci(c, g, a, m, C, T, L = "emptyOnly") {
                                return new ss(c, g, a, m, C, L, T).recognize();
                              })(c, g, a, m, L.extractedUrl, C, T).pipe(
                                (0, je.U)(({ state: Q, tree: Y }) => ({
                                  ...L,
                                  targetSnapshot: Q,
                                  urlAfterRedirects: Y,
                                }))
                              )
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            a.config,
                            this.urlSerializer,
                            a.paramsInheritanceStrategy
                          ),
                          (0, te.b)((xt) => {
                            (T.targetSnapshot = xt.targetSnapshot),
                              (T.urlAfterRedirects = xt.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: xt.urlAfterRedirects,
                              });
                            const Mi = new Zn(
                              xt.id,
                              this.urlSerializer.serialize(xt.extractedUrl),
                              this.urlSerializer.serialize(
                                xt.urlAfterRedirects
                              ),
                              xt.targetSnapshot
                            );
                            this.events.next(Mi);
                          })
                        );
                      if (
                        dt &&
                        a.urlHandlingStrategy.shouldProcessUrl(Y.currentRawUrl)
                      ) {
                        const {
                            id: xt,
                            extractedUrl: Mi,
                            source: Ko,
                            restoredState: Qo,
                            extras: Xn,
                          } = Y,
                          ii = new Dr(
                            xt,
                            this.urlSerializer.serialize(Mi),
                            Ko,
                            Qo
                          );
                        this.events.next(ii);
                        const mn = qi(0, this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = T =
                            {
                              ...Y,
                              targetSnapshot: mn,
                              urlAfterRedirects: Mi,
                              extras: {
                                ...Xn,
                                skipLocationChange: !1,
                                replaceUrl: !1,
                              },
                            }),
                          (0, ee.of)(T)
                        );
                      }
                      {
                        const xt = "";
                        return (
                          this.events.next(
                            new Nr(
                              Y.id,
                              this.urlSerializer.serialize(Y.extractedUrl),
                              xt,
                              1
                            )
                          ),
                          Y.resolve(null),
                          Le.E
                        );
                      }
                    }),
                    (0, te.b)((Y) => {
                      const Ne = new Lo(
                        Y.id,
                        this.urlSerializer.serialize(Y.extractedUrl),
                        this.urlSerializer.serialize(Y.urlAfterRedirects),
                        Y.targetSnapshot
                      );
                      this.events.next(Ne);
                    }),
                    (0, je.U)(
                      (Y) => (
                        (this.currentTransition = T =
                          {
                            ...Y,
                            guards: Qi(
                              Y.targetSnapshot,
                              Y.currentSnapshot,
                              this.rootContexts
                            ),
                          }),
                        T
                      )
                    ),
                    (function Oo(c, g) {
                      return (0, z.z)((a) => {
                        const {
                          targetSnapshot: m,
                          currentSnapshot: C,
                          guards: {
                            canActivateChecks: T,
                            canDeactivateChecks: L,
                          },
                        } = a;
                        return 0 === L.length && 0 === T.length
                          ? (0, ee.of)({ ...a, guardsResult: !0 })
                          : (function Xi(c, g, a, m) {
                              return (0, J.D)(c).pipe(
                                (0, z.z)((C) =>
                                  (function S(c, g, a, m, C) {
                                    const T =
                                      g && g.routeConfig
                                        ? g.routeConfig.canDeactivate
                                        : null;
                                    if (!T || 0 === T.length)
                                      return (0, ee.of)(!0);
                                    const L = T.map((Q) => {
                                      const Y = un(g) ?? C,
                                        Ne = $r(Q, Y);
                                      return Cn(
                                        (function j(c) {
                                          return c && _i(c.canDeactivate);
                                        })(Ne)
                                          ? Ne.canDeactivate(c, g, a, m)
                                          : Y.runInContext(() => Ne(c, g, a, m))
                                      ).pipe((0, X.P)());
                                    });
                                    return (0, ee.of)(L).pipe(Gr());
                                  })(C.component, C.route, a, g, m)
                                ),
                                (0, X.P)((C) => !0 !== C, !0)
                              );
                            })(L, m, C, c).pipe(
                              (0, z.z)((Q) =>
                                Q &&
                                (function w(c) {
                                  return "boolean" == typeof c;
                                })(Q)
                                  ? (function ki(c, g, a, m) {
                                      return (0, J.D)(g).pipe(
                                        se((C) =>
                                          (0, rt.z)(
                                            (function u(c, g) {
                                              return (
                                                null !== c && g && g(new co(c)),
                                                (0, ee.of)(!0)
                                              );
                                            })(C.route.parent, m),
                                            (function A(c, g) {
                                              return (
                                                null !== c && g && g(new bo(c)),
                                                (0, ee.of)(!0)
                                              );
                                            })(C.route, m),
                                            (function _(c, g, a) {
                                              const m = g[g.length - 1],
                                                T = g
                                                  .slice(0, g.length - 1)
                                                  .reverse()
                                                  .map((L) =>
                                                    (function dr(c) {
                                                      const g = c.routeConfig
                                                        ? c.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return g && 0 !== g.length
                                                        ? { node: c, guards: g }
                                                        : null;
                                                    })(L)
                                                  )
                                                  .filter((L) => null !== L)
                                                  .map((L) =>
                                                    K(() => {
                                                      const Q = L.guards.map(
                                                        (Y) => {
                                                          const Ne =
                                                              un(L.node) ?? a,
                                                            dt = $r(Y, Ne);
                                                          return Cn(
                                                            (function O(c) {
                                                              return (
                                                                c &&
                                                                _i(
                                                                  c.canActivateChild
                                                                )
                                                              );
                                                            })(dt)
                                                              ? dt.canActivateChild(
                                                                  m,
                                                                  c
                                                                )
                                                              : Ne.runInContext(
                                                                  () => dt(m, c)
                                                                )
                                                          ).pipe((0, X.P)());
                                                        }
                                                      );
                                                      return (0, ee.of)(Q).pipe(
                                                        Gr()
                                                      );
                                                    })
                                                  );
                                              return (0, ee.of)(T).pipe(Gr());
                                            })(c, C.path, a),
                                            (function h(c, g, a) {
                                              const m = g.routeConfig
                                                ? g.routeConfig.canActivate
                                                : null;
                                              if (!m || 0 === m.length)
                                                return (0, ee.of)(!0);
                                              const C = m.map((T) =>
                                                K(() => {
                                                  const L = un(g) ?? a,
                                                    Q = $r(T, L);
                                                  return Cn(
                                                    (function v(c) {
                                                      return (
                                                        c && _i(c.canActivate)
                                                      );
                                                    })(Q)
                                                      ? Q.canActivate(g, c)
                                                      : L.runInContext(() =>
                                                          Q(g, c)
                                                        )
                                                  ).pipe((0, X.P)());
                                                })
                                              );
                                              return (0, ee.of)(C).pipe(Gr());
                                            })(c, C.route, a)
                                          )
                                        ),
                                        (0, X.P)((C) => !0 !== C, !0)
                                      );
                                    })(m, T, c, g)
                                  : (0, ee.of)(Q)
                              ),
                              (0, je.U)((Q) => ({ ...a, guardsResult: Q }))
                            );
                      });
                    })(this.environmentInjector, (Y) => this.events.next(Y)),
                    (0, te.b)((Y) => {
                      if (
                        ((T.guardsResult = Y.guardsResult), qn(Y.guardsResult))
                      )
                        throw Bn(0, Y.guardsResult);
                      const Ne = new lo(
                        Y.id,
                        this.urlSerializer.serialize(Y.extractedUrl),
                        this.urlSerializer.serialize(Y.urlAfterRedirects),
                        Y.targetSnapshot,
                        !!Y.guardsResult
                      );
                      this.events.next(Ne);
                    }),
                    (0, Nn.h)(
                      (Y) =>
                        !!Y.guardsResult ||
                        (this.cancelNavigationTransition(Y, "", 3), !1)
                    ),
                    Rt((Y) => {
                      if (Y.guards.canActivateChecks.length)
                        return (0, ee.of)(Y).pipe(
                          (0, te.b)((Ne) => {
                            const dt = new Mo(
                              Ne.id,
                              this.urlSerializer.serialize(Ne.extractedUrl),
                              this.urlSerializer.serialize(
                                Ne.urlAfterRedirects
                              ),
                              Ne.targetSnapshot
                            );
                            this.events.next(dt);
                          }),
                          (0, yn.w)((Ne) => {
                            let dt = !1;
                            return (0, ee.of)(Ne).pipe(
                              (function E(c, g) {
                                return (0, z.z)((a) => {
                                  const {
                                    targetSnapshot: m,
                                    guards: { canActivateChecks: C },
                                  } = a;
                                  if (!C.length) return (0, ee.of)(a);
                                  let T = 0;
                                  return (0, J.D)(C).pipe(
                                    se((L) =>
                                      (function x(c, g, a, m) {
                                        const C = c.routeConfig,
                                          T = c._resolve;
                                        return (
                                          void 0 !== C?.title &&
                                            !Ye(C) &&
                                            (T[ct] = C.title),
                                          (function Z(c, g, a, m) {
                                            const C = (function oe(c) {
                                              return [
                                                ...Object.keys(c),
                                                ...Object.getOwnPropertySymbols(
                                                  c
                                                ),
                                              ];
                                            })(c);
                                            if (0 === C.length)
                                              return (0, ee.of)({});
                                            const T = {};
                                            return (0, J.D)(C).pipe(
                                              (0, z.z)((L) =>
                                                (function xe(c, g, a, m) {
                                                  const C = un(g) ?? m,
                                                    T = $r(c, C);
                                                  return Cn(
                                                    T.resolve
                                                      ? T.resolve(g, a)
                                                      : C.runInContext(() =>
                                                          T(g, a)
                                                        )
                                                  );
                                                })(c[L], g, a, m).pipe(
                                                  (0, X.P)(),
                                                  (0, te.b)((Q) => {
                                                    T[L] = Q;
                                                  })
                                                )
                                              ),
                                              ln(1),
                                              (0, Gt.h)(T),
                                              me((L) => (zr(L) ? Le.E : de(L)))
                                            );
                                          })(T, c, g, m).pipe(
                                            (0, je.U)(
                                              (L) => (
                                                (c._resolvedData = L),
                                                (c.data = Zi(c, a).resolve),
                                                C &&
                                                  Ye(C) &&
                                                  (c.data[ct] = C.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(L.route, m, c, g)
                                    ),
                                    (0, te.b)(() => T++),
                                    ln(1),
                                    (0, z.z)((L) =>
                                      T === C.length ? (0, ee.of)(a) : Le.E
                                    )
                                  );
                                });
                              })(
                                a.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              (0, te.b)({
                                next: () => (dt = !0),
                                complete: () => {
                                  dt ||
                                    this.cancelNavigationTransition(Ne, "", 2);
                                },
                              })
                            );
                          }),
                          (0, te.b)((Ne) => {
                            const dt = new Jr(
                              Ne.id,
                              this.urlSerializer.serialize(Ne.extractedUrl),
                              this.urlSerializer.serialize(
                                Ne.urlAfterRedirects
                              ),
                              Ne.targetSnapshot
                            );
                            this.events.next(dt);
                          })
                        );
                    }),
                    Rt((Y) => {
                      const Ne = (dt) => {
                        const Kt = [];
                        dt.routeConfig?.loadComponent &&
                          !dt.routeConfig._loadedComponent &&
                          Kt.push(
                            this.configLoader
                              .loadComponent(dt.routeConfig)
                              .pipe(
                                (0, te.b)((xt) => {
                                  dt.component = xt;
                                }),
                                (0, je.U)(() => {})
                              )
                          );
                        for (const xt of dt.children) Kt.push(...Ne(xt));
                        return Kt;
                      };
                      return Re(Ne(Y.targetSnapshot.root)).pipe(
                        (0, Dt.d)(),
                        (0, tr.q)(1)
                      );
                    }),
                    Rt(() => this.afterPreactivation()),
                    (0, je.U)((Y) => {
                      const Ne = (function tt(c, g, a) {
                        const m = bn(c, g._root, a ? a._root : void 0);
                        return new ei(m, g);
                      })(
                        a.routeReuseStrategy,
                        Y.targetSnapshot,
                        Y.currentRouterState
                      );
                      return (
                        (this.currentTransition = T =
                          { ...Y, targetRouterState: Ne }),
                        T
                      );
                    }),
                    (0, te.b)(() => {
                      this.events.next(new Wi());
                    }),
                    ((c, g, a, m) =>
                      (0, je.U)(
                        (C) => (
                          new gn(
                            g,
                            C.targetRouterState,
                            C.currentRouterState,
                            a,
                            m
                          ).activate(c),
                          C
                        )
                      ))(
                      this.rootContexts,
                      a.routeReuseStrategy,
                      (Y) => this.events.next(Y),
                      this.inputBindingEnabled
                    ),
                    (0, tr.q)(1),
                    (0, te.b)({
                      next: (Y) => {
                        (L = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new ar(
                              Y.id,
                              this.urlSerializer.serialize(Y.extractedUrl),
                              this.urlSerializer.serialize(Y.urlAfterRedirects)
                            )
                          ),
                          a.titleStrategy?.updateTitle(
                            Y.targetRouterState.snapshot
                          ),
                          Y.resolve(!0);
                      },
                      complete: () => {
                        L = !0;
                      },
                    }),
                    (function Ve(c) {
                      return (0, Ee.e)((g, a) => {
                        (0, qe.Xf)(c).subscribe(
                          (0, Be.x)(a, () => a.complete(), vt.Z)
                        ),
                          !a.closed && g.subscribe(a);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        (0, te.b)((Y) => {
                          throw Y;
                        })
                      )
                    ),
                    Vt(() => {
                      L || Q || this.cancelNavigationTransition(T, "", 1),
                        this.currentNavigation?.id === T.id &&
                          (this.currentNavigation = null);
                    }),
                    me((Y) => {
                      if (((Q = !0), Er(Y)))
                        this.events.next(
                          new vn(
                            T.id,
                            this.urlSerializer.serialize(T.extractedUrl),
                            Y.message,
                            Y.cancellationCode
                          )
                        ),
                          (function lr(c) {
                            return Er(c) && qn(c.url);
                          })(Y)
                            ? this.events.next(new Ni(Y.url))
                            : T.resolve(!1);
                      else {
                        this.events.next(
                          new zi(
                            T.id,
                            this.urlSerializer.serialize(T.extractedUrl),
                            Y,
                            T.targetSnapshot ?? void 0
                          )
                        );
                        try {
                          T.resolve(a.errorHandler(Y));
                        } catch (Ne) {
                          T.reject(Ne);
                        }
                      }
                      return Le.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(a, m, C) {
            const T = new vn(
              a.id,
              this.urlSerializer.serialize(a.extractedUrl),
              m,
              C
            );
            this.events.next(T), a.resolve(!1);
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      function ri(c) {
        return c !== $n;
      }
      let Ei = (() => {
          class c {
            buildTitle(a) {
              let m,
                C = a.root;
              for (; void 0 !== C; )
                (m = this.getResolvedTitleForRoute(C) ?? m),
                  (C = C.children.find((T) => T.outlet === Ge));
              return m;
            }
            getResolvedTitleForRoute(a) {
              return a.data[ct];
            }
            static #e = (this.ɵfac = function (m) {
              return new (m || c)();
            });
            static #t = (this.ɵprov = f.Yz7({
              token: c,
              factory: function () {
                return (0, f.f3M)(Lr);
              },
              providedIn: "root",
            }));
          }
          return c;
        })(),
        Lr = (() => {
          class c extends Ei {
            constructor(a) {
              super(), (this.title = a);
            }
            updateTitle(a) {
              const m = this.buildTitle(a);
              void 0 !== m && this.title.setTitle(m);
            }
            static #e = (this.ɵfac = function (m) {
              return new (m || c)(f.LFG(In.Dx));
            });
            static #t = (this.ɵprov = f.Yz7({
              token: c,
              factory: c.ɵfac,
              providedIn: "root",
            }));
          }
          return c;
        })(),
        eo = (() => {
          class c {
            static #e = (this.ɵfac = function (m) {
              return new (m || c)();
            });
            static #t = (this.ɵprov = f.Yz7({
              token: c,
              factory: function () {
                return (0, f.f3M)(no);
              },
              providedIn: "root",
            }));
          }
          return c;
        })();
      class to {
        shouldDetach(g) {
          return !1;
        }
        store(g, a) {}
        shouldAttach(g) {
          return !1;
        }
        retrieve(g) {
          return null;
        }
        shouldReuseRoute(g, a) {
          return g.routeConfig === a.routeConfig;
        }
      }
      let no = (() => {
        class c extends to {
          static #e = (this.ɵfac = (function () {
            let a;
            return function (C) {
              return (a || (a = f.n5z(c)))(C || c);
            };
          })());
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      const Go = new f.OlP("", { providedIn: "root", factory: () => ({}) });
      let dl = (() => {
          class c {
            static #e = (this.ɵfac = function (m) {
              return new (m || c)();
            });
            static #t = (this.ɵprov = f.Yz7({
              token: c,
              factory: function () {
                return (0, f.f3M)(qs);
              },
              providedIn: "root",
            }));
          }
          return c;
        })(),
        qs = (() => {
          class c {
            shouldProcessUrl(a) {
              return !0;
            }
            extract(a) {
              return a;
            }
            merge(a, m) {
              return a;
            }
            static #e = (this.ɵfac = function (m) {
              return new (m || c)();
            });
            static #t = (this.ɵprov = f.Yz7({
              token: c,
              factory: c.ɵfac,
              providedIn: "root",
            }));
          }
          return c;
        })();
      var Wo = (function (c) {
        return (
          (c[(c.COMPLETE = 0)] = "COMPLETE"),
          (c[(c.FAILED = 1)] = "FAILED"),
          (c[(c.REDIRECTING = 2)] = "REDIRECTING"),
          c
        );
      })(Wo || {});
      function wi(c, g) {
        c.events
          .pipe(
            (0, Nn.h)(
              (a) =>
                a instanceof ar ||
                a instanceof vn ||
                a instanceof zi ||
                a instanceof Nr
            ),
            (0, je.U)((a) =>
              a instanceof ar || a instanceof Nr
                ? Wo.COMPLETE
                : a instanceof vn && (0 === a.code || 1 === a.code)
                ? Wo.REDIRECTING
                : Wo.FAILED
            ),
            (0, Nn.h)((a) => a !== Wo.REDIRECTING),
            (0, tr.q)(1)
          )
          .subscribe(() => {
            g();
          });
      }
      function Ba(c) {
        throw c;
      }
      function ja(c, g, a) {
        return g.parse("/");
      }
      const rn = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Zs = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let hr = (() => {
        class c {
          get navigationId() {
            return this.navigationTransitions.navigationId;
          }
          get browserPageId() {
            return "computed" !== this.canceledNavigationResolution
              ? this.currentPageId
              : this.location.getState()?.ɵrouterPageId ?? this.currentPageId;
          }
          get events() {
            return this._events;
          }
          constructor() {
            (this.disposed = !1),
              (this.currentPageId = 0),
              (this.console = (0, f.f3M)(f.c2e)),
              (this.isNgZoneEnabled = !1),
              (this._events = new jt.x()),
              (this.options = (0, f.f3M)(Go, { optional: !0 }) || {}),
              (this.pendingTasks = (0, f.f3M)(f.HDt)),
              (this.errorHandler = this.options.errorHandler || Ba),
              (this.malformedUriErrorHandler =
                this.options.malformedUriErrorHandler || ja),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.urlHandlingStrategy = (0, f.f3M)(dl)),
              (this.routeReuseStrategy = (0, f.f3M)(eo)),
              (this.titleStrategy = (0, f.f3M)(Ei)),
              (this.onSameUrlNavigation =
                this.options.onSameUrlNavigation || "ignore"),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || "emptyOnly"),
              (this.urlUpdateStrategy =
                this.options.urlUpdateStrategy || "deferred"),
              (this.canceledNavigationResolution =
                this.options.canceledNavigationResolution || "replace"),
              (this.config = (0, f.f3M)(Ct, { optional: !0 })?.flat() ?? []),
              (this.navigationTransitions = (0, f.f3M)(fr)),
              (this.urlSerializer = (0, f.f3M)(cn)),
              (this.location = (0, f.f3M)(ke.Ye)),
              (this.componentInputBindingEnabled = !!(0, f.f3M)(Yn, {
                optional: !0,
              })),
              (this.eventsSubscription = new Me.w0()),
              (this.isNgZoneEnabled =
                (0, f.f3M)(f.R0b) instanceof f.R0b && f.R0b.isInAngularZone()),
              this.resetConfig(this.config),
              (this.currentUrlTree = new It()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = qi(0, null)),
              this.navigationTransitions
                .setupNavigations(this, this.currentUrlTree, this.routerState)
                .subscribe(
                  (a) => {
                    (this.lastSuccessfulId = a.id),
                      (this.currentPageId = this.browserPageId);
                  },
                  (a) => {
                    this.console.warn(`Unhandled Navigation Error: ${a}`);
                  }
                ),
              this.subscribeToNavigationEvents();
          }
          subscribeToNavigationEvents() {
            const a = this.navigationTransitions.events.subscribe((m) => {
              try {
                const { currentTransition: C } = this.navigationTransitions;
                if (null === C) return void (Ua(m) && this._events.next(m));
                if (m instanceof Dr)
                  ri(C.source) && (this.browserUrlTree = C.extractedUrl);
                else if (m instanceof Nr) this.rawUrlTree = C.rawUrl;
                else if (m instanceof Zn) {
                  if ("eager" === this.urlUpdateStrategy) {
                    if (!C.extras.skipLocationChange) {
                      const T = this.urlHandlingStrategy.merge(
                        C.urlAfterRedirects,
                        C.rawUrl
                      );
                      this.setBrowserUrl(T, C);
                    }
                    this.browserUrlTree = C.urlAfterRedirects;
                  }
                } else if (m instanceof Wi)
                  (this.currentUrlTree = C.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      C.urlAfterRedirects,
                      C.rawUrl
                    )),
                    (this.routerState = C.targetRouterState),
                    "deferred" === this.urlUpdateStrategy &&
                      (C.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, C),
                      (this.browserUrlTree = C.urlAfterRedirects));
                else if (m instanceof vn)
                  0 !== m.code && 1 !== m.code && (this.navigated = !0),
                    (3 === m.code || 2 === m.code) && this.restoreHistory(C);
                else if (m instanceof Ni) {
                  const T = this.urlHandlingStrategy.merge(
                      m.url,
                      C.currentRawUrl
                    ),
                    L = {
                      skipLocationChange: C.extras.skipLocationChange,
                      replaceUrl:
                        "eager" === this.urlUpdateStrategy || ri(C.source),
                    };
                  this.scheduleNavigation(T, $n, null, L, {
                    resolve: C.resolve,
                    reject: C.reject,
                    promise: C.promise,
                  });
                }
                m instanceof zi && this.restoreHistory(C, !0),
                  m instanceof ar && (this.navigated = !0),
                  Ua(m) && this._events.next(m);
              } catch (C) {
                this.navigationTransitions.transitionAbortSubject.next(C);
              }
            });
            this.eventsSubscription.add(a);
          }
          resetRootComponentType(a) {
            (this.routerState.root.component = a),
              (this.navigationTransitions.rootComponentType = a);
          }
          initialNavigation() {
            if (
              (this.setUpLocationChangeListener(),
              !this.navigationTransitions.hasRequestedNavigation)
            ) {
              const a = this.location.getState();
              this.navigateToSyncWithBrowser(this.location.path(!0), $n, a);
            }
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((a) => {
                const m = "popstate" === a.type ? "popstate" : "hashchange";
                "popstate" === m &&
                  setTimeout(() => {
                    this.navigateToSyncWithBrowser(a.url, m, a.state);
                  }, 0);
              }));
          }
          navigateToSyncWithBrowser(a, m, C) {
            const T = { replaceUrl: !0 },
              L = C?.navigationId ? C : null;
            if (C) {
              const Y = { ...C };
              delete Y.navigationId,
                delete Y.ɵrouterPageId,
                0 !== Object.keys(Y).length && (T.state = Y);
            }
            const Q = this.parseUrl(a);
            this.scheduleNavigation(Q, m, L, T);
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.navigationTransitions.currentNavigation;
          }
          get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation;
          }
          resetConfig(a) {
            (this.config = a.map(xr)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.navigationTransitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0),
              this.eventsSubscription.unsubscribe();
          }
          createUrlTree(a, m = {}) {
            const {
                relativeTo: C,
                queryParams: T,
                fragment: L,
                queryParamsHandling: Q,
                preserveFragment: Y,
              } = m,
              Ne = Y ? this.currentUrlTree.fragment : L;
            let Kt,
              dt = null;
            switch (Q) {
              case "merge":
                dt = { ...this.currentUrlTree.queryParams, ...T };
                break;
              case "preserve":
                dt = this.currentUrlTree.queryParams;
                break;
              default:
                dt = T || null;
            }
            null !== dt && (dt = this.removeEmptyProps(dt));
            try {
              Kt = or(C ? C.snapshot : this.routerState.snapshot.root);
            } catch {
              ("string" != typeof a[0] || !a[0].startsWith("/")) && (a = []),
                (Kt = this.currentUrlTree.root);
            }
            return hi(Kt, a, dt, Ne ?? null);
          }
          navigateByUrl(a, m = { skipLocationChange: !1 }) {
            const C = qn(a) ? a : this.parseUrl(a),
              T = this.urlHandlingStrategy.merge(C, this.rawUrlTree);
            return this.scheduleNavigation(T, $n, null, m);
          }
          navigate(a, m = { skipLocationChange: !1 }) {
            return (
              (function kr(c) {
                for (let g = 0; g < c.length; g++)
                  if (null == c[g]) throw new f.vHH(4008, !1);
              })(a),
              this.navigateByUrl(this.createUrlTree(a, m), m)
            );
          }
          serializeUrl(a) {
            return this.urlSerializer.serialize(a);
          }
          parseUrl(a) {
            let m;
            try {
              m = this.urlSerializer.parse(a);
            } catch (C) {
              m = this.malformedUriErrorHandler(C, this.urlSerializer, a);
            }
            return m;
          }
          isActive(a, m) {
            let C;
            if (((C = !0 === m ? { ...rn } : !1 === m ? { ...Zs } : m), qn(a)))
              return mr(this.currentUrlTree, a, C);
            const T = this.parseUrl(a);
            return mr(this.currentUrlTree, T, C);
          }
          removeEmptyProps(a) {
            return Object.keys(a).reduce((m, C) => {
              const T = a[C];
              return null != T && (m[C] = T), m;
            }, {});
          }
          scheduleNavigation(a, m, C, T, L) {
            if (this.disposed) return Promise.resolve(!1);
            let Q, Y, Ne;
            L
              ? ((Q = L.resolve), (Y = L.reject), (Ne = L.promise))
              : (Ne = new Promise((Kt, xt) => {
                  (Q = Kt), (Y = xt);
                }));
            const dt = this.pendingTasks.add();
            return (
              wi(this, () => {
                queueMicrotask(() => this.pendingTasks.remove(dt));
              }),
              this.navigationTransitions.handleNavigationRequest({
                source: m,
                restoredState: C,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                currentBrowserUrl: this.browserUrlTree,
                rawUrl: a,
                extras: T,
                resolve: Q,
                reject: Y,
                promise: Ne,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Ne.catch((Kt) => Promise.reject(Kt))
            );
          }
          setBrowserUrl(a, m) {
            const C = this.urlSerializer.serialize(a);
            if (this.location.isCurrentPathEqualTo(C) || m.extras.replaceUrl) {
              const L = {
                ...m.extras.state,
                ...this.generateNgRouterState(m.id, this.browserPageId),
              };
              this.location.replaceState(C, "", L);
            } else {
              const T = {
                ...m.extras.state,
                ...this.generateNgRouterState(m.id, this.browserPageId + 1),
              };
              this.location.go(C, "", T);
            }
          }
          restoreHistory(a, m = !1) {
            if ("computed" === this.canceledNavigationResolution) {
              const T = this.currentPageId - this.browserPageId;
              0 !== T
                ? this.location.historyGo(T)
                : this.currentUrlTree ===
                    this.getCurrentNavigation()?.finalUrl &&
                  0 === T &&
                  (this.resetState(a),
                  (this.browserUrlTree = a.currentUrlTree),
                  this.resetUrlToCurrentUrlTree());
            } else
              "replace" === this.canceledNavigationResolution &&
                (m && this.resetState(a), this.resetUrlToCurrentUrlTree());
          }
          resetState(a) {
            (this.routerState = a.currentRouterState),
              (this.currentUrlTree = a.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                a.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          generateNgRouterState(a, m) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: a, ɵrouterPageId: m }
              : { navigationId: a };
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)();
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      function Ua(c) {
        return !(c instanceof Wi || c instanceof Ni);
      }
      let qo = (() => {
          class c {
            constructor(a, m, C, T, L, Q) {
              (this.router = a),
                (this.route = m),
                (this.tabIndexAttribute = C),
                (this.renderer = T),
                (this.el = L),
                (this.locationStrategy = Q),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new jt.x()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1);
              const Y = L.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = "a" === Y || "area" === Y),
                this.isAnchorElement
                  ? (this.subscription = a.events.subscribe((Ne) => {
                      Ne instanceof ar && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl("0");
            }
            setTabIndexIfNotOnNativeEl(a) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", a);
            }
            ngOnChanges(a) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(a) {
              null != a
                ? ((this.commands = Array.isArray(a) ? a : [a]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(a, m, C, T, L) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== a ||
                      m ||
                      C ||
                      T ||
                      L ||
                      ("string" == typeof this.target &&
                        "_self" != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const a =
                null === this.href
                  ? null
                  : (0, f.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      "href"
                    );
              this.applyAttributeValue("href", a);
            }
            applyAttributeValue(a, m) {
              const C = this.renderer,
                T = this.el.nativeElement;
              null !== m ? C.setAttribute(T, a, m) : C.removeAttribute(T, a);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
            static #e = (this.ɵfac = function (m) {
              return new (m || c)(
                f.Y36(hr),
                f.Y36(ur),
                f.$8M("tabindex"),
                f.Y36(f.Qsj),
                f.Y36(f.SBq),
                f.Y36(ke.S$)
              );
            });
            static #t = (this.ɵdir = f.lG2({
              type: c,
              selectors: [["", "routerLink", ""]],
              hostVars: 1,
              hostBindings: function (m, C) {
                1 & m &&
                  f.NdJ("click", function (L) {
                    return C.onClick(
                      L.button,
                      L.ctrlKey,
                      L.shiftKey,
                      L.altKey,
                      L.metaKey
                    );
                  }),
                  2 & m && f.uIk("target", C.target);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: [
                  "preserveFragment",
                  "preserveFragment",
                  f.VuI,
                ],
                skipLocationChange: [
                  "skipLocationChange",
                  "skipLocationChange",
                  f.VuI,
                ],
                replaceUrl: ["replaceUrl", "replaceUrl", f.VuI],
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [f.Xq5, f.TTD],
            }));
          }
          return c;
        })(),
        No = (() => {
          class c {
            get isActive() {
              return this._isActive;
            }
            constructor(a, m, C, T, L) {
              (this.router = a),
                (this.element = m),
                (this.renderer = C),
                (this.cdr = T),
                (this.link = L),
                (this.classes = []),
                (this._isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new f.vpe()),
                (this.routerEventsSubscription = a.events.subscribe((Q) => {
                  Q instanceof ar && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, ee.of)(this.links.changes, (0, ee.of)(null))
                .pipe((0, At.J)())
                .subscribe((a) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const a = [...this.links.toArray(), this.link]
                .filter((m) => !!m)
                .map((m) => m.onChanges);
              this.linkInputChangesSubscription = (0, J.D)(a)
                .pipe((0, At.J)())
                .subscribe((m) => {
                  this._isActive !== this.isLinkActive(this.router)(m) &&
                    this.update();
                });
            }
            set routerLinkActive(a) {
              const m = Array.isArray(a) ? a : a.split(" ");
              this.classes = m.filter((C) => !!C);
            }
            ngOnChanges(a) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                queueMicrotask(() => {
                  const a = this.hasActiveLinks();
                  this._isActive !== a &&
                    ((this._isActive = a),
                    this.cdr.markForCheck(),
                    this.classes.forEach((m) => {
                      a
                        ? this.renderer.addClass(this.element.nativeElement, m)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            m
                          );
                    }),
                    a && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          "aria-current",
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          "aria-current"
                        ),
                    this.isActiveChange.emit(a));
                });
            }
            isLinkActive(a) {
              const m = (function qr(c) {
                return !!c.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (C) => !!C.urlTree && a.isActive(C.urlTree, m);
            }
            hasActiveLinks() {
              const a = this.isLinkActive(this.router);
              return (this.link && a(this.link)) || this.links.some(a);
            }
            static #e = (this.ɵfac = function (m) {
              return new (m || c)(
                f.Y36(hr),
                f.Y36(f.SBq),
                f.Y36(f.Qsj),
                f.Y36(f.sBO),
                f.Y36(qo, 8)
              );
            });
            static #t = (this.ɵdir = f.lG2({
              type: c,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (m, C, T) {
                if ((1 & m && f.Suo(T, qo, 5), 2 & m)) {
                  let L;
                  f.iGM((L = f.CRH())) && (C.links = L);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                ariaCurrentWhenActive: "ariaCurrentWhenActive",
                routerLinkActive: "routerLinkActive",
              },
              outputs: { isActiveChange: "isActiveChange" },
              exportAs: ["routerLinkActive"],
              standalone: !0,
              features: [f.TTD],
            }));
          }
          return c;
        })();
      class Ha {}
      let po = (() => {
        class c {
          constructor(a, m, C, T, L) {
            (this.router = a),
              (this.injector = C),
              (this.preloadingStrategy = T),
              (this.loader = L);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, Nn.h)((a) => a instanceof ar),
                se(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(a, m) {
            const C = [];
            for (const T of m) {
              T.providers &&
                !T._injector &&
                (T._injector = (0, f.MMx)(T.providers, a, `Route: ${T.path}`));
              const L = T._injector ?? a,
                Q = T._loadedInjector ?? L;
              ((T.loadChildren && !T._loadedRoutes && void 0 === T.canLoad) ||
                (T.loadComponent && !T._loadedComponent)) &&
                C.push(this.preloadConfig(L, T)),
                (T.children || T._loadedRoutes) &&
                  C.push(this.processRoutes(Q, T.children ?? T._loadedRoutes));
            }
            return (0, J.D)(C).pipe((0, At.J)());
          }
          preloadConfig(a, m) {
            return this.preloadingStrategy.preload(m, () => {
              let C;
              C =
                m.loadChildren && void 0 === m.canLoad
                  ? this.loader.loadChildren(a, m)
                  : (0, ee.of)(null);
              const T = C.pipe(
                (0, z.z)((L) =>
                  null === L
                    ? (0, ee.of)(void 0)
                    : ((m._loadedRoutes = L.routes),
                      (m._loadedInjector = L.injector),
                      this.processRoutes(L.injector ?? a, L.routes))
                )
              );
              if (m.loadComponent && !m._loadedComponent) {
                const L = this.loader.loadComponent(m);
                return (0, J.D)([T, L]).pipe((0, At.J)());
              }
              return T;
            });
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)(
              f.LFG(hr),
              f.LFG(f.Sil),
              f.LFG(f.lqb),
              f.LFG(Ha),
              f.LFG(ze)
            );
          });
          static #t = (this.ɵprov = f.Yz7({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          }));
        }
        return c;
      })();
      const as = new f.OlP("");
      let $a = (() => {
        class c {
          constructor(a, m, C, T, L = {}) {
            (this.urlSerializer = a),
              (this.transitions = m),
              (this.viewportScroller = C),
              (this.zone = T),
              (this.options = L),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (L.scrollPositionRestoration =
                L.scrollPositionRestoration || "disabled"),
              (L.anchorScrolling = L.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((a) => {
              a instanceof Dr
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = a.navigationTrigger),
                  (this.restoredId = a.restoredState
                    ? a.restoredState.navigationId
                    : 0))
                : a instanceof ar
                ? ((this.lastId = a.id),
                  this.scheduleScrollEvent(
                    a,
                    this.urlSerializer.parse(a.urlAfterRedirects).fragment
                  ))
                : a instanceof Nr &&
                  0 === a.code &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(
                    a,
                    this.urlSerializer.parse(a.url).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((a) => {
              a instanceof Oi &&
                (a.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(a.position)
                  : a.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(a.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(a, m) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new Oi(
                      a,
                      "popstate" === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      m
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
          static #e = (this.ɵfac = function (m) {
            f.$Z();
          });
          static #t = (this.ɵprov = f.Yz7({ token: c, factory: c.ɵfac }));
        }
        return c;
      })();
      function Bi(c, g) {
        return { ɵkind: c, ɵproviders: g };
      }
      function za() {
        const c = (0, f.f3M)(f.zs3);
        return (g) => {
          const a = c.get(f.z2F);
          if (g !== a.components[0]) return;
          const m = c.get(hr),
            C = c.get(Ga);
          1 === c.get(Ks) && m.initialNavigation(),
            c.get(qa, null, f.XFs.Optional)?.setUpPreloading(),
            c.get(as, null, f.XFs.Optional)?.init(),
            m.resetRootComponentType(a.componentTypes[0]),
            C.closed || (C.next(), C.complete(), C.unsubscribe());
        };
      }
      const Ga = new f.OlP("", { factory: () => new jt.x() }),
        Ks = new f.OlP("", { providedIn: "root", factory: () => 1 }),
        qa = new f.OlP("");
      function gl(c) {
        return Bi(0, [
          { provide: qa, useExisting: po },
          { provide: Ha, useExisting: c },
        ]);
      }
      const Qs = new f.OlP("ROUTER_FORROOT_GUARD"),
        Qn = [
          ke.Ye,
          { provide: cn, useClass: Hn },
          hr,
          Pr,
          {
            provide: ur,
            useFactory: function Ys(c) {
              return c.routerState.root;
            },
            deps: [hr],
          },
          ze,
          [],
        ];
      function Za() {
        return new f.PXZ("Router", hr);
      }
      let Zo = (() => {
        class c {
          constructor(a) {}
          static forRoot(a, m) {
            return {
              ngModule: c,
              providers: [
                Qn,
                [],
                { provide: Ct, multi: !0, useValue: a },
                {
                  provide: Qs,
                  useFactory: yl,
                  deps: [[hr, new f.FiY(), new f.tp0()]],
                },
                { provide: Go, useValue: m || {} },
                m?.useHash
                  ? { provide: ke.S$, useClass: ke.Do }
                  : { provide: ke.S$, useClass: ke.b0 },
                {
                  provide: as,
                  useFactory: () => {
                    const c = (0, f.f3M)(ke.EM),
                      g = (0, f.f3M)(f.R0b),
                      a = (0, f.f3M)(Go),
                      m = (0, f.f3M)(fr),
                      C = (0, f.f3M)(cn);
                    return (
                      a.scrollOffset && c.setOffset(a.scrollOffset),
                      new $a(C, m, c, g, a)
                    );
                  },
                },
                m?.preloadingStrategy
                  ? gl(m.preloadingStrategy).ɵproviders
                  : [],
                { provide: f.PXZ, multi: !0, useFactory: Za },
                m?.initialNavigation ? zd(m) : [],
                m?.bindToComponentInputs
                  ? Bi(8, [Dn, { provide: Yn, useExisting: Dn }]).ɵproviders
                  : [],
                [
                  { provide: ea, useFactory: za },
                  { provide: f.tb, multi: !0, useExisting: ea },
                ],
              ],
            };
          }
          static forChild(a) {
            return {
              ngModule: c,
              providers: [{ provide: Ct, multi: !0, useValue: a }],
            };
          }
          static #e = (this.ɵfac = function (m) {
            return new (m || c)(f.LFG(Qs, 8));
          });
          static #t = (this.ɵmod = f.oAB({ type: c }));
          static #n = (this.ɵinj = f.cJS({}));
        }
        return c;
      })();
      function yl(c) {
        return "guarded";
      }
      function zd(c) {
        return [
          "disabled" === c.initialNavigation
            ? Bi(3, [
                {
                  provide: f.ip1,
                  multi: !0,
                  useFactory: () => {
                    const g = (0, f.f3M)(hr);
                    return () => {
                      g.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Ks, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === c.initialNavigation
            ? Bi(2, [
                { provide: Ks, useValue: 0 },
                {
                  provide: f.ip1,
                  multi: !0,
                  deps: [f.zs3],
                  useFactory: (g) => {
                    const a = g.get(ke.V_, Promise.resolve());
                    return () =>
                      a.then(
                        () =>
                          new Promise((m) => {
                            const C = g.get(hr),
                              T = g.get(Ga);
                            wi(C, () => {
                              m(!0);
                            }),
                              (g.get(fr).afterPreactivation = () => (
                                m(!0), T.closed ? (0, ee.of)(void 0) : T
                              )),
                              C.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const ea = new f.OlP("");
    },
    7582: ($e, pe, R) => {
      function Ce(z, X, se, te) {
        return new (se || (se = Promise))(function (we, et) {
          function Dt(Lt) {
            try {
              Qe(te.next(Lt));
            } catch (Gt) {
              et(Gt);
            }
          }
          function ln(Lt) {
            try {
              Qe(te.throw(Lt));
            } catch (Gt) {
              et(Gt);
            }
          }
          function Qe(Lt) {
            Lt.done
              ? we(Lt.value)
              : (function me(we) {
                  return we instanceof se
                    ? we
                    : new se(function (et) {
                        et(we);
                      });
                })(Lt.value).then(Dt, ln);
          }
          Qe((te = te.apply(z, X || [])).next());
        });
      }
      function K(z) {
        return this instanceof K ? ((this.v = z), this) : new K(z);
      }
      function fe(z, X, se) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var me,
          te = se.apply(z, X || []),
          we = [];
        return (
          (me = {}),
          et("next"),
          et("throw"),
          et("return"),
          (me[Symbol.asyncIterator] = function () {
            return this;
          }),
          me
        );
        function et(Vt) {
          te[Vt] &&
            (me[Vt] = function (vt) {
              return new Promise(function (Ve, At) {
                we.push([Vt, vt, Ve, At]) > 1 || Dt(Vt, vt);
              });
            });
        }
        function Dt(Vt, vt) {
          try {
            !(function ln(Vt) {
              Vt.value instanceof K
                ? Promise.resolve(Vt.value.v).then(Qe, Lt)
                : Gt(we[0][2], Vt);
            })(te[Vt](vt));
          } catch (Ve) {
            Gt(we[0][3], Ve);
          }
        }
        function Qe(Vt) {
          Dt("next", Vt);
        }
        function Lt(Vt) {
          Dt("throw", Vt);
        }
        function Gt(Vt, vt) {
          Vt(vt), we.shift(), we.length && Dt(we[0][0], we[0][1]);
        }
      }
      function Le(z) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var se,
          X = z[Symbol.asyncIterator];
        return X
          ? X.call(z)
          : ((z = (function St(z) {
              var X = "function" == typeof Symbol && Symbol.iterator,
                se = X && z[X],
                te = 0;
              if (se) return se.call(z);
              if (z && "number" == typeof z.length)
                return {
                  next: function () {
                    return (
                      z && te >= z.length && (z = void 0),
                      { value: z && z[te++], done: !z }
                    );
                  },
                };
              throw new TypeError(
                X
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(z)),
            (se = {}),
            te("next"),
            te("throw"),
            te("return"),
            (se[Symbol.asyncIterator] = function () {
              return this;
            }),
            se);
        function te(we) {
          se[we] =
            z[we] &&
            function (et) {
              return new Promise(function (Dt, ln) {
                !(function me(we, et, Dt, ln) {
                  Promise.resolve(ln).then(function (Qe) {
                    we({ value: Qe, done: Dt });
                  }, et);
                })(Dt, ln, (et = z[we](et)).done, et.value);
              });
            };
        }
      }
      R.d(pe, { FC: () => fe, KL: () => Le, mG: () => Ce, qq: () => K }),
        "function" == typeof SuppressedError && SuppressedError;
    },
  },
  ($e) => {
    $e(($e.s = 4395));
  },
]);
