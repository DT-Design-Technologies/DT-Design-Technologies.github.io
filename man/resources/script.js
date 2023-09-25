// <script async>
	function getRDoc(e) {
		var R = e.getBoundingClientRect();
		return {
			top: R.top + pageYOffset,
			left: R.left + pageXOffset,
			width: R.width,
			height: R.height
		};
	}
//-----------------
	window.onload = function() {
		// document.innerHTML = document.innerHTML.replace(/((^|\s)[А-ЯЁа-яё]{1,3})\s/g, '$1&nbsp;');
		var T = document.querySelector('body > table');
		var TR = getRDoc(T);
//-----------------
		var TT = document.querySelector('body > table table');
		var hdr = TT.insertRow(0);		// TT.insertAdjacentHTML('afterbegin', inc.hdr);	//wrong tbody
		hdr.outerHTML = inc.hdr;
		document.querySelector('h5').innerHTML = document.getElementById('version').innerHTML;
//-----------------
		var btn = document.createElement('div');
		T.after(btn);
		T.insertAdjacentHTML('afterend', "<div><img id=\"preview\" title=\"Нажмите, чтобы закрыть\"/></div>");
		btn.insertAdjacentHTML('beforeend', "<div class=\"button back\">Назад</div>");
		// btn.insertAdjacentHTML('beforeend', "<div class=\"button debug\">debug</div>");
		btn.insertAdjacentHTML('beforeend', "<div class=\"button cut\">Развернуть всё</div>");
//-----------------
		var lih = document.querySelectorAll('ol > li > h3:first-child');
		for(var i = 0, e = null; i < lih.length; i++) {
			e = lih[i];
			e.parentNode.style.setProperty('--tm', '2px');	//fckn magic
		}
//-----------------
		var tdi = document.querySelectorAll('div td > img');	//fckn crutch
		for(var i = 0, e = null; i < tdi.length; i++) {
			// e = tdi[i].parentNode.nextElementSibling;	//check <td>?
			// e = e && e.querySelector(':scope > ul');	//.hasChildNodes .contains
			// if (e) e.parentNode.style.paddingLeft = "8px";
			e = tdi[i].parentNode;
			if (!e.nextElementSibling || e.nextElementSibling.querySelector(':scope > img')) continue;
			e.style.width = 96 + 8 + "px";	//not minWidth because colspan
		}
//-----------------
		var mrk = document.querySelectorAll('span.mark');	//span[class="mark"]
		for(var i = 0, e = null, L = null/*, R = null*/; i < mrk.length; i++) {
			e = mrk[i];
			L = e.closest('li');
/*			R = getRDoc(e);
			e.style.setProperty('--lm', TR.left + 20 - R.left + 'px');
			e.style.setProperty('--tm', getRDoc(L).top - R.top + (parseFloat(window.getComputedStyle(L).paddingTop) || 0) + 4 + 'px');	//-> onresize!*/
			L.classList.add("marked");
			L.style.setProperty('--ll', window.getComputedStyle(L, ':before').left);
			// L.style.setProperty('--ml', TR.left + 20 - getRDoc(L).left + 'px');
			// L.style.setProperty('--mt', (parseFloat(window.getComputedStyle(L).paddingTop) || 0) + 4 + 'px');
			// L.style.marginTop = "10px";	//.parentNode
/*			e = document.createElement('hr');
			e.style.borderTop = "1px dashed lightgray";
			L.before(e);*/
		}
//-----------------
		var prv = document.getElementById('preview');
		var img = document.getElementsByTagName('img');
		var ttl = /:\s([^\s]+)\s/.exec(document.title)[1];
		for(var i = 0, e = null, h = 0; i < img.length; i++) {
			e = img[i];
			if (e.id == 'preview') continue;
			e.src = "./resources/tmb/" + ttl + "/" + e.alt + ".png";	//tmb[e.alt] || pic[e.alt] || pic.noimg
			if (e.alt == 'cap') continue;
			e.onclick = function() {
				prv.src = "./resources/pic/" + ttl + "/" + this.alt + ".png";		//pic[this.alt] || pic.noimg
				prv.style.transform = "scale(1)";
				// prv.parentNode.style.display = "block";
				prv.parentNode.style.opacity = "1";
				prv.parentNode.style["z-index"] = "99";
			};
			e.title = "Нажмите, чтобы посмотреть";
			// if (h = h || parseFloat(window.getComputedStyle(e).maxHeight) || 0)							//fckn crutch
			// 	e.style.setProperty('--sc', (parseFloat(window.getComputedStyle(e).height) || h) / h);
			e.onerror = function() {
				this.src = "./resources/noimage.png";
			};
		}
		prv.parentNode.onclick = function() {
			prv.style.transform = "scale(0)";
			// prv.parentNode.style.display = "none";
			prv.parentNode.style.opacity = "0";
			prv.parentNode.style["z-index"] = "-1";
		};
		prv.onerror = function() {
			this.src = "./resources/noimage.png";
		};
//-----------------
		//src: <a href="#TAG"><span class="... a">TAG</span></a>
		//tgt: <a name="TAG"></a>...<span class="... r">TAG</span>
		var tag = document.querySelectorAll('span.a, span.A');	//span[class~="a"]
		for(var i = 0, e = null, a = null; i < tag.length; i++) {
			e = tag[i];
			a = document.createElement('a');
			a.href = (/ A$/.test(e.className) && "AEMAPs User Guide.html#" || "#") + e.innerHTML;
			a.innerHTML = e.outerHTML;
			e.replaceWith(a);
		}
		var trg = document.querySelectorAll('span.r');
		for(var i = 0, e = null, a = null; i < trg.length; i++) {
			e = trg[i];
			a = document.createElement('a');
			a.name = e.innerHTML;
			e.parentNode.prepend(a);
		}
//-----------------
		//src: <a class="cut" href="#target">...</a>
		//tgt: <div><a name="target"></a></div>
		var cut = document.querySelectorAll('a.cut');	//a[class="cut"]
		for(var i = 0, e = null; i < cut.length; i++) {
			e = cut[i];
			e.toggle = (function(NM) {
				var A = document.querySelector('a[name="' + NM + '"]:not([class])');
				if (!A) return null;
				var B = A.parentNode;	//check <div>?
				var L = B.closest('li');
				// var N = L && L.nextElementSibling;
				var S = document.head.appendChild(document.createElement("style"));	//document.documentElement.style.setProperty('--cl', -R.left + 'px');
				var D = false;	//R = null
				// B.style.paddingTop = "5px";
				// B.style.paddingBottom = "5px";
				var av = parseFloat(window.getComputedStyle(A).getPropertyValue('--av')) || 0;
				var mt = parseFloat(window.getComputedStyle(B).marginTop) || 0;
				var nt = parseFloat(B.parentNode.nextElementSibling && window.getComputedStyle(B.parentNode.nextElementSibling).marginTop) || 0;
				B.style.marginTop = mt + av + "px";
				B.style.marginBottom = av + nt + "px";
				// B.style.transition = "all ease 0.5s";
				return function(_cond) {
					switch (_cond) {
						case null: D = !D; break;
						case true: D = false; break;
						case false: D = true; break;
					}
					if (D) {
						B.style.display = "none";
						// B.style.transform = "scale(0)";
						// if (N && N.nodeName == 'LI') N.style.marginTop = 0;
						this.text = "развернуть";
						D = false;
					} else {
						B.style.display = "block";
						// B.style.transform = "scale(1)";
						// if (N && N.nodeName == 'LI') N.style.marginTop = "5px";
						// R = getRDoc(B);													//here because not ready while load
						A.style.setProperty('left', TR.left + 20 - getRDoc(B).left + 'px');
						A.style.setProperty('width', T.clientWidth - 40 + 'px');
						S.innerHTML = `
							a[name=` + NM + `]:after {
								left: ` + (L && (getRDoc(L).left + (parseFloat(window.getComputedStyle(L, ':before').left) || 0) - TR.left - 20) || 8) + 'px' + `;
							}
						`;
/*						S.innerHTML = `
							a[name=` + NM + `]:before {
								padding-top: 10px;
								left: ` + (TR.left + 20 - R.left + 'px') + `;
								top: ` + (- 5 - 5 + 'px') + `;
								width: ` + (T.clientWidth - 40 + 'px') + `;
								height: ` + (R.height + 'px') + `;
							}
							a[name=` + NM + `]:after {
								padding-top: 10px;
								left: ` + (TR.left + 20 - R.left + 'px') + `;
								top: ` + (- 5 - 5 + 'px') + `;
								width: ` + (T.clientWidth - 40 + 'px') + `;
								height: ` + (R.height + 'px') + `;
							}
						`;*/
						this.text = "свернуть";
						D = true;
					}
				};
			})(e.href.split("#")[1]);
			e.onclick = function() {
				this.toggle();
				for(var i = 0; i < cut.length; i++) {
					if (cut[i] != this) cut[i].toggle(null);
				}
				return false;
			};
			// e.href = "#cut";
			e.toggle(false);
		}
//-----------------
		//src: <a href="#any">...</a>
		//tgt: <a name="any"></a>
		var ref = document.querySelectorAll('a[href^="#"]:not([class])');
		var bck = document.querySelector('div.button.back');
		for(var i = 0, e = null; i < ref.length; i++) {
			e = ref[i];
			e.onclick = (function(NM) {
				var A = document.querySelector('a[name="' + NM + '"]:not([class])');
				if (!A) return null;
				var C = document.querySelector('a[href="#' + NM + '"].cut');
				return function(/*evt*/) {
					if (C) C.toggle(true);
					setTimeout(function() {									//fckn crutch
						bck.from = pageYOffset;
						bck.to = getRDoc(A).top;	// | 0	//Math.round
						bck.style.opacity = "1";
						bck.style["z-index"] = "99";
						window.scrollTo({
							top: bck.to,
							left: 0,
							behavior: 'smooth'
						}); 
					}, 16);
					setTimeout(function() { bck.to = false; }, 1000);		//fckn crutch
					// evt = evt || window.event;
					// evt.preventDefault ? evt.preventDefault() : (evt.returnValue=false);
					return false;
				};
			})(e.href.split("#")[1]);
		}
//-----------------
		window.onscroll = function() {
			prv.parentNode.onclick();
			bck.onclick();
		};
		window.onresize = function() {
			for(var i = 0; i < cut.length; i++) {
				cut[i].toggle(null);
			}
			bck.onclick();
		};
		document.addEventListener('keydown', function(evt) {
			if(evt.code == 'Escape') {
				prv.parentNode.onclick();
				bck.onclick();
			}
		});
		window.scrollTo({	//window.onbeforeunload
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
//-----------------
		var btn = document.getElementsByClassName('button');
		for(var i = 0, e = null; i < btn.length; i++) {
			e = btn[i];
			e.onclick = {
				debug: function() {
					var S = document.head.appendChild(document.createElement("style"));
					S.innerHTML = `
						td {
							border: ` + (this.isOn ? `none` : `1px solid black`) + `;
						}
						div {
							border: ` + (this.isOn ? `none` : `1px solid red`) + `;
						}
						ol, li {
							outline: ` + (this.isOn ? `none` : `1px solid blue`) + `;
						}
					`;
					this.isOn = !this.isOn;
					window.onresize();
				},
				cut: function() {
					for(var i = 0; i < cut.length; i++) {
						cut[i].toggle(!this.isOn);
					}
					this.innerHTML = this.isOn ? "Развернуть всё" : "Свернуть всё";
					this.isOn = !this.isOn;
				},
				back: function(e) {
					if (this.to) return false;
					if (e) window.scrollTo({
						top: this.from,
						left: 0,
						behavior: 'smooth'
					});
					this.style.opacity = "0";
					this.style["z-index"] = "-1";
				},
			}[e.classList[1]];	//e.text || e.textContent || e.innerText
		}
//-----------------
		var ftr = TT.insertRow();
		ftr.outerHTML = inc.ftr.replace("<span></span>", (new Date()).getFullYear());
		// document.querySelector('h5:last-of-type > span').innerHTML = (new Date()).getFullYear();
	}
// </script>