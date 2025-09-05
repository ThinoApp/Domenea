// Garden Gnome Software - Skin
// Pano2VR 7.1.9/20995
// Filename: DOMENEA.ggsk
// Generated 2025-09-05T11:40:55

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_url_popup_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url_1', 2, false, { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('opt_url_popup_1', 2, true, { ignoreInState: 1  });
	player.addVariable('resp_phone_2', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', false);
				}
				else {
					player.setVariableValue('vis_skin', true);
				}
			}
		}
		me._variable_resp_phone_2 = {};
		me._variable_resp_phone_2.ggCurrentLogicState = -1;
		me._variable_resp_phone_2.logicBlock = function() {
			var newLogicState_resp_phone_2;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_2 = 0;
			}
			else {
				newLogicState_resp_phone_2 = -1;
			}
			if (me._variable_resp_phone_2.ggCurrentLogicState != newLogicState_resp_phone_2) {
				me._variable_resp_phone_2.ggCurrentLogicState = newLogicState_resp_phone_2;
				if (me._variable_resp_phone_2.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_2', true);
				}
				else {
					player.setVariableValue('resp_phone_2', false);
				}
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAMAAADzCAYAAADzY98kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZmFiLCAyMDIyLzA4LzE2LTIyOjM1OjQxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZj'+
			'phYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDktMDFUMDY6'+
			'Mzc6MzQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTAzVDE0OjE2OjM3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTA5LTAzVDE0OjE2OjM3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Nzc2YTEzNy1mMmZkLTQ4ODAtOGM1MS0zOTZkZWMyOGNjNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDc3NmExMzctZjJmZC00ODgwLThjNTEtMzk2ZGVjMjhjYzY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDc3NmExMzctZjJmZC00ODgwLThjNTEtMzk2ZG'+
			'VjMjhjYzY5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Nzc2YTEzNy1mMmZkLTQ4ODAtOGM1MS0zOTZkZWMyOGNjNjkiIHN0RXZ0OndoZW49IjIwMjUtMDktMDFUMDY6Mzc6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pju7MAcAAA7mSURBVHic7d3bcts6'+
			'EgVQKZX//+RoHmZ0xseRbUkEiG7stapSlYfExB3gJi1db7fbBQAAAMjxa3UBAAAAgHMJAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCA'+
			'MAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACCMMAAAAADCCAMAAAAgjDAAAAAAwggDAAAAIIwwAAAAAMIIAwAAACDM79UFYLzr9Xr/623WJSb9XGoZPX6Mmzne7adO/fFOHTvV75FZ6/dOZvTxT+3efVzN9MyYndV+5svPdhm7W+15t5uhy1rCgD3NXlle/fklF2D+cdZO9Og6xsZ7RvTZ559RqS92r993nAyfd2+rEX37'+
			'bLt//HddxtRsr4zZ22V8u5kzzxk5X4BNCAM4gycttVQ6OAkIXjOz7yocFHevH3uZcWObYGS7VdrPmO9If5uv8IAwgArcEM7V7bDkydu/nd1/K26az6yj8bWflYd8Nxhwjm5nGWhBGEBVXV/xrWSHjTP5xm11/50RCiTUkfqOjkOBAPRgrsInwgC6EA48Z/XN1UwpN27V+nBGu1es4+7jCqCransGbMNXC9LV7cMfstpi57pWrteoslWt487jivmMHejBXIUPhAHsIDkYSK335bJf3TvUZcTr1NV1KCMAwGHCAHaz2w3iV1Lq+Ywd2qJT+d9p72591Kms1GHc0EG3cTqjvN3aAKYRBrCrbjcfz9q1XiN0bZuOZb5c3vte9k66lpu1jBsA2hAGsLuuN4iP7FKP2Tq1U6eyPvJT+XeoX/c6AHRl/YXJhAGk6Hyo71z2VT'+
			'q0WfXyPeureuxSPwD2Y4+CizCAPB1uEj/qVNaKqrZf1XK963N9dq8ftVT7WkjjhcqqzZevmEdwgt+rCwCLdPhecRvhGNX6ema//lTPM8bUGdf4rp6zrl9tHKE/4FXmzL9Z14knDOCjGQti5Rvae9kqbgQr2u3Mdji7flX6eka9X6nTx387uiwrQ46v/u2MOq4eQ1+pWq5UlccK+qa6ymdH2IowgLtZG+OKJ3ivqnRoO7NNVtb587XPqvfKvh5dx6P1uP//KvPwkYp1rLRe3FUrD1RmvvBRxTUdTiMMYKVHi++qG5MKm8Hq16tXmvk097MKfX3E6LJXDAUS6gjA36zTcCIfIEg1109/zrRyA5p97RXt+a4z+n/VrykcNbNNqoyPDnV0WOUZxgn0YK4SSxhAdWcHAzttCKtClZFmlr9bX5/Rj6vHSkIdAXjsyL7c/bwD'+
			'SwgD6OSsm9uuT43vdtwQO9dpRP+eWfdV7dytjt3CJAC+Zk0nkjCArnZ5jbzah8pVN7rfO2z+K/r07Gsm1JFMHdYY6O76xd+BHwgD6G7m2wJnfJDdKJ2fnL+jSyBw9GdX+saH7teZcW03egBjVFhPK5QBTiUMYCcdA4ERkkKAj0YGIBX7uUK/zi5DhTrCbBXXF9jFo33E3gJPEgawmy5PyEf9HnmHus5WtQ3cAHyvSr95OwBgrUrraKWywHTCAHZV+alxtw+U62C3D4Sr1L+VyjJLQh0BdmPthoOEAexux41ixzqNsEu7VKzH6DJVrCPMVClshEpmzY0j+4z5SgxhAAkqPTXu/IFyHXjlm3eZWwB9WLNhAGEAKXbYNHaowxkqtNOOocKodq3QP6Pt2N8As81eO3fcb2AoYQBJVj81dsNwnq6vBzq4rKX9mckeAGOcsV'+
			'abr0QQBpCm62G/a7lX0mYAUNNZN9vOAvANYQC8ZkVSbCM7n35+7GgZO9QRZvK0EY45cx8xX9meMIBEK25IbChr6GteJbAAmOvsfdK6Dl8QBpCqy8bQpZyQTggEMJeAHwYTBsDrbAy9vHt40M/ADNYWkq0a/x6uwAPCAJKdtTG8u/HZuHLoawCoSYDHtoQBQAI32+O825ad+qBTWS8XB9WO9Nk62n6dI20/Yl3utrbDdL9XFwB4yIYFvCL1BsdayTvMF151u2g/NuTNANJZ2PlO6oERujBH4Xld54uzGkwiDID3PLuhdt14Afje0RsU+wMrrBp3Vcb7kXlbpQ4wjDAASOHJAuxp5QFdIABz2bthImEAAAAwS7XQy9sB8D/CAACA93k7AObwVgBMJgwAAABmqBp2eTsALsIAAICjvB0AY3krAE4gDAAAAEarHnJ5O4B4'+
			'wgAAgOO8HQBAK8IAIIWDNgCc48iee+avCHg7gGjCAACgs0q/W+ztAKqrNF+AxYQB8J5nN1ObLgCvEAjQXZe3AlZeE0r4vboAsFjVQ9ftYnOqQB+wm9Fj+qs19NF1Xl1vu86/66Xu3sJrKo3BbjfYKZzXaE0YACRwMGdnKw+ir1zbgfl5bjDm6ti2XcrcNbQQ4hFJGAAAMNaIGwuBwBzatL9n5taZ/Wyu0pYwgGRnJcDvHgptLgBAFyPPVSPCtEecq+ADYQC8zkbSy7sHCv0MHOHtAHjNGQ9pHl1jxBwzV2nJtwlAbX5/7RjtB6w06iYDqntrnP76VeJW5HYxzwhVYgbCAmcv+kcOhDYogGz2Abb058+f1UUYyTylHWEAvMYrYH10/URjYC+j1hM3GlRlbEJTwgASddy0OpZ5Je0FVCIQgAzmKK0IA0iz8mnx0f9vgz'+
			'mHtwKAyuwFVGI8QmPCAJLssGHtUIfZtBFQ0cig0ToHdZmftCEMIMXRhXnUIc4nS89VpZ8BHhEIAFCGMIAE1Q5MAoE5tAnQgUCAXRh/0JwwgN2N2KiqPi22Cf/XqO8HrtrPwH5GBwL2A6jFnKQFYQA7q7wQ+2TpMUbVXxAAnG30upO+H3Au4+1n2ojyfq8uAEwwcvHtcJN4r2+Hso6S1sfdaWM4R+J+AMCbhAHsZHQCO/swdb2MLXPKIVDSvt59jD3TF7uPRzhi9D5wd7uYe8yzYh/2eUswgTCAHXRe3GccBHc9BM7o5x3b6UzaD46bGQjcfz50M2Pcfv6ZZ5wfdz2TsQlhAJ3NXMTPXLhnBQL3n93drH7eoW2APcwKBC6XvfYD1tvl7PX5ep0fLMHbhAF0c8ZiveLANPvJ0P0anex04AD4ycxA4HIRClBXhTE5Mxjw'+
			'dgBlCQOo7uykduVifdZB8H6tinYNewCe8crncbyrw15ATd0+m+lds89jUIYwgGpWLr4VNqWzNqAqh8GksAfgWSv2gvt1j/z/DjylraF6H4wO5ow7ShIGcHfmIlXx8FBpgT47kX50rRntsbrfK/UxjOSQuacVTyePhgPsa9RY7DamvCXA1oQBfPTV7xPuvAhW3ZRWbz479XnVPoaRdpqzr9h9fp/xawPf2XVc7Vqv71SYKxXK8I5RZzLBLeX8Wl0ASrp9+rOr6gty9fJ1oA1hbzvvUR9ZyzjqyJluxDzrPoavl/51gL8IA0jVZUG3+bxPu0EGgQDUttPYPVqXlPWKJoQBpOl6c92xzKt07WOAn1jfOOrVm9GjN6/GKxQmDCDFDgeoHeowm/YBEtgP6GDXMertALYhDCDBbpuRQ+DftAmQyLrHTG5av2busQVhALu6Xv'+
			'a/Qdy5bs/avY8BfmIdpKKEMXmkjoIWSvDVguwmYfP5aPXXTq2S1s8AP/m4LqbtCYxnDEEAYQC7SL85TDkEpvczwDNSg2JqSNqrr5djX9mY1FYUJAygMwvoY7sdAvUzwHtSgmLGMlYghDCATtwUvqbzIVBfA2c58mSvk857An0k7t8pawgbEgZQWeKGMsvntqy4aelv4B3Wjtd12BMAmEwYQAUOcud71OZnHgb1+f9pC+hnt3n7XX1G7w27tV03M9s/uW+9HUBL19vNuN3N9frPWlylc5M3hx0cGUepff9sm6W2TxevjP2RfVll7e5g9Bx6pu3N239bNU/euX66V9p/db929VK7uQ9jNYMQAAAAwvxaXQAAAADgXMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAA'+
			'AAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAA'+
			'AACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDDCAAAAAAgjDAAAAIAwwgAAAAAIIwwAAACAMMIAAAAACCMMAAAAgDD/AbPZ9R4XQLIcAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 59px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 59px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 27px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>VIVEZ PLEINEMENT<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._thumbnail_menu_toggle=document.createElement('div');
		el.ggId="thumbnail_menu_toggle";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu_toggle.style.opacity == 0.0) { me._thumbnail_menu_toggle.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_toggle.style.opacity=0;
				}
				else {
					me._thumbnail_menu_toggle.style.visibility=me._thumbnail_menu_toggle.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_toggle.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu_toggle.logicBlock_alpha();
		me._thumbnail_menu_toggle.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_phone', !player.getVariableValue('vis_thumbnail_menu_phone'));
			}
		}
		me._thumbnail_menu_toggle.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_menu_toggle']=true;
			me._menu_icon.logicBlock_visible();
			me._menu_icon_active.logicBlock_visible();
		}
		me._thumbnail_menu_toggle.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_menu_toggle']=false;
			me._menu_icon.logicBlock_visible();
			me._menu_icon_active.logicBlock_visible();
		}
		me._thumbnail_menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_icon=document.createElement('div');
		els=me._menu_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSByPSIxLjciIGNsYXNzPSJzdDAiIGN5PSIyMCIgY3g9IjIwIi8+CiA8Y2lyY2xlIHI9IjEuNyIgY2xhc3M9InN0MCIgY3k9IjIwIiBjeD0iMzEuNyIvPgogPGNpcmNsZSByPSIxLjciIGNsYXNzPSJzdDAiIGN5PSIyMCIgY3g9IjguMyIvPgo8L3N2Zz4K';
		me._menu_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_menu_toggle'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_icon.style.transition='';
				if (me._menu_icon.ggCurrentLogicStateVisible == 0) {
					me._menu_icon.style.visibility="hidden";
					me._menu_icon.ggVisible=false;
				}
				else {
					me._menu_icon.style.visibility=(Number(me._menu_icon.style.opacity)>0||!me._menu_icon.style.opacity)?'inherit':'hidden';
					me._menu_icon.ggVisible=true;
				}
			}
		}
		me._menu_icon.logicBlock_visible();
		me._menu_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle.appendChild(me._menu_icon);
		el=me._menu_icon_active=document.createElement('div');
		els=me._menu_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSByPSIxLjciIGNsYXNzPSJzdDAiIGN5PSIyMCIgY3g9IjIwIi8+CiA8Y2lyY2xlIHI9IjEuNyIgY2xhc3M9InN0MCIgY3k9IjIwIiBjeD0iMzEuNyIvPgogPGNpcmNsZSByPSIxLjciIGNsYXNzPSJzdDAiIGN5PSIyMCIgY3g9IjguMyIvPgo8L3N2Zz4K';
		me._menu_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_menu_toggle'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_icon_active.style.transition='';
				if (me._menu_icon_active.ggCurrentLogicStateVisible == 0) {
					me._menu_icon_active.style.visibility=(Number(me._menu_icon_active.style.opacity)>0||!me._menu_icon_active.style.opacity)?'inherit':'hidden';
					me._menu_icon_active.ggVisible=true;
				}
				else {
					me._menu_icon_active.style.visibility="hidden";
					me._menu_icon_active.ggVisible=false;
				}
			}
		}
		me._menu_icon_active.logicBlock_visible();
		me._menu_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle.appendChild(me._menu_icon_active);
		me.divSkin.appendChild(me._thumbnail_menu_toggle);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 76px;';
		hs+='height : 130px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 1px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_bg=document.createElement('div');
		el.ggId="thumbs_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_bg.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_bg);
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 130;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols <= me._node_cloner.ggNumFilterPassed) {
				me._node_cloner.ggCloneOffset += me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._node_cloner.ggCloneOffset > 0) {
				me._node_cloner.ggCloneOffset -= me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffset = Math.max(me._node_cloner.ggCloneOffset, 0);
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			var parentWidth = me._node_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner.parentNode.parentNode.ggAvailableWidth : me._node_cloner.parentNode.parentNode.clientWidth) : me._node_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner.offsetLeft) * me._node_cloner.ggNumRepeat / 100.0) / me._node_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && false) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
			centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) % me._node_cloner.offsetWidth) / 2;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			numNodes = tourNodes.length;
			if ((parentWidth - me._node_cloner.offsetLeft) > (me._node_cloner.offsetWidth * numNodes)) {
				centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) - (me._node_cloner.offsetWidth * numNodes)) / 2;
			}
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					keepCloning = false;
				}
			}
			player.setVariableValue('node_cloner_hasDown', me._node_cloner.ggCloneOffset > 0);
			player.setVariableValue('node_cloner_hasUp', me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols < me._node_cloner.ggNumFilterPassed);
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_cloner.style.transition='';
				if (me._node_cloner.ggCurrentLogicStateVisible == 0) {
					me._node_cloner.style.visibility="hidden";
					me._node_cloner.ggVisible=false;
				}
				else {
					me._node_cloner.style.visibility=(Number(me._node_cloner.style.opacity)>0||!me._node_cloner.style.opacity)?'inherit':'hidden';
					me._node_cloner.ggVisible=true;
				}
			}
		}
		me._node_cloner.logicBlock_visible();
		me._node_cloner.ggCurrentLogicStateVisible = -1;
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._thumbnail_menu.appendChild(me._node_cloner);
		el=me._thumbs_right=document.createElement('div');
		els=me._thumbs_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : -60px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasUp') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_right.style.transition='';
				if (me._thumbs_right.ggCurrentLogicStateVisible == 0) {
					me._thumbs_right.style.visibility="hidden";
					me._thumbs_right.ggVisible=false;
				}
				else {
					me._thumbs_right.style.visibility=(Number(me._thumbs_right.style.opacity)>0||!me._thumbs_right.style.opacity)?'inherit':'hidden';
					me._thumbs_right.ggVisible=true;
				}
			}
		}
		me._thumbs_right.logicBlock_visible();
		me._thumbs_right.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoUp();
		}
		me._thumbs_right.onmouseenter=function (e) {
			me._thumbs_right__img.style.visibility='hidden';
			me._thumbs_right__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_right']=true;
		}
		me._thumbs_right.onmouseleave=function (e) {
			me._thumbs_right__img.style.visibility='inherit';
			me._thumbs_right__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_right']=false;
		}
		me._thumbs_right.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_right);
		el=me._thumbs_left=document.createElement('div');
		els=me._thumbs_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 70px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasDown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_left.style.transition='';
				if (me._thumbs_left.ggCurrentLogicStateVisible == 0) {
					me._thumbs_left.style.visibility="hidden";
					me._thumbs_left.ggVisible=false;
				}
				else {
					me._thumbs_left.style.visibility=(Number(me._thumbs_left.style.opacity)>0||!me._thumbs_left.style.opacity)?'inherit':'hidden';
					me._thumbs_left.ggVisible=true;
				}
			}
		}
		me._thumbs_left.logicBlock_visible();
		me._thumbs_left.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoDown();
		}
		me._thumbs_left.onmouseenter=function (e) {
			me._thumbs_left__img.style.visibility='hidden';
			me._thumbs_left__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_left']=true;
		}
		me._thumbs_left.onmouseleave=function (e) {
			me._thumbs_left__img.style.visibility='inherit';
			me._thumbs_left__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_left']=false;
		}
		me._thumbs_left.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_left);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_phone=document.createElement('div');
		el.ggId="thumbnail_menu_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_phone.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_phone.style.visibility=me._thumbnail_menu_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_phone.style.opacity == 0.0) { me._thumbnail_menu_phone.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_phone.logicBlock_alpha();
		me._thumbnail_menu_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeDI9IjgiIHkyPSIyNCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeDI9IjgiIHkyPSIyNCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._thumbnail_menu_phone.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 129px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 398px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 398px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 82.9167%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._thumbnail_menu_phone.appendChild(me._thumbnail_scroller_phone);
		me.divSkin.appendChild(me._thumbnail_menu_phone);
		el=me._thumbnail_menu_code=document.createElement('div');
		el.ggId="thumbnail_menu_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code);
		el=me._snow_effect=document.createElement('div');
		el.ggId="snow_effect";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._snow_effect.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._snow_effect.ggUpdatePosition=function (useTransition) {
		}
		el=me._glmatrix_code=document.createElement('div');
		el.ggId="glmatrix_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._glmatrix_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._glmatrix_code.ggUpdatePosition=function (useTransition) {
		}
		me._snow_effect.appendChild(me._glmatrix_code);
		el=me._snow_code=document.createElement('div');
		el.ggId="snow_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._snow_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._snow_code.ggUpdatePosition=function (useTransition) {
		}
		me._snow_effect.appendChild(me._snow_code);
		me.divSkin.appendChild(me._snow_effect);
		me._thumbnail_menu_toggle.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu_toggle']=false;
		me._menu_icon.logicBlock_visible();
		me._menu_icon_active.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me._node_cloner.logicBlock_visible();
		me._thumbs_right.logicBlock_visible();
		me.elementMouseOver['thumbs_right']=false;
		me._thumbs_left.logicBlock_visible();
		me.elementMouseOver['thumbs_left']=false;
		me._thumbnail_menu_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		el = me._thumbnail_menu_code;
		;
		el = me._glmatrix_code;
		
!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports):"function"==typeof define&&define.amd?define(["exports"],a):a(t.glMatrix={})}(this,function(t){"use strict";var a=1e-6,n="undefined"!=typeof Float32Array?Float32Array:Array,r=Math.random;var u=Math.PI/180;var e=Object.freeze({EPSILON:a,get ARRAY_TYPE(){return n},RANDOM:r,setMatrixArrayType:function(t){n=t},toRadian:function(t){return t*u},equals:function(t,n){return Math.abs(t-n)<=a*Math.max(1,Math.abs(t),Math.abs(n))}});function o(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*M+e*c,t[3]=u*M+o*c,t}function i(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t}var h=o,M=i,c=Object.freeze({create:function(){var t=new n(4);return n!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,a,r,u){var e=new n(4);return e[0]=t,e[1]=a,e[2]=r,e[3]=u,e},set:function(t,a,n,r,u){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t},transpose:function(t,a){if(t===a){var n=a[1];t[1]=a[2],t[2]=n}else t[0]=a[0],t[1]=a[2],t[2]=a[1],t[3]=a[3];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=n*o,t):null},adjoint:function(t,a){var n=a[0];return t[0]=a[3],t[1]=-a[1],t[2]=-a[2],t[3]=n,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:o,rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t},scale:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},LDU:function(t,a,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,a,n]},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t},subtract:i,exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=n[0],h=n[1],M=n[2],c=n[3];return Math.abs(r-i)<=a*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=a*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-M)<=a*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-c)<=a*Math.max(1,Math.abs(o),Math.abs(c))},multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},mul:h,sub:M});function s(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return t[0]=r*M+e*c,t[1]=u*M+o*c,t[2]=r*s+e*f,t[3]=u*s+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function f(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}var l=s,v=f,b=Object.freeze({create:function(){var t=new n(6);return n!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,a,r,u,e,o){var i=new n(6);return i[0]=t,i[1]=a,i[2]=r,i[3]=u,i[4]=e,i[5]=o,i},set:function(t,a,n,r,u,e,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=n*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=n*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-n*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:s,rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=Math.sin(n),c=Math.cos(n);return t[0]=r*c+e*M,t[1]=u*c+o*M,t[2]=r*-M+e*c,t[3]=u*-M+o*c,t[4]=i,t[5]=h,t},scale:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1];return t[0]=r*M,t[1]=u*M,t[2]=e*c,t[3]=o*c,t[4]=i,t[5]=h,t},translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*M+e*c+i,t[5]=u*M+o*c+h,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t},subtract:f,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(r-M)<=a*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(u-c)<=a*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-s)<=a*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-f)<=a*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(h-v)<=a*Math.max(1,Math.abs(h),Math.abs(v))},mul:l,sub:v});function m(){var t=new n(9);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function d(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],p=n[6],x=n[7],q=n[8];return t[0]=f*r+l*o+v*M,t[1]=f*u+l*i+v*c,t[2]=f*e+l*h+v*s,t[3]=b*r+m*o+d*M,t[4]=b*u+m*i+d*c,t[5]=b*e+m*h+d*s,t[6]=p*r+x*o+q*M,t[7]=p*u+x*i+q*c,t[8]=p*e+x*h+q*s,t}function p(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t}var x=d,q=p,w=Object.freeze({create:m,fromMat4:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},clone:function(t){var a=new n(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},fromValues:function(t,a,r,u,e,o,i,h,M){var c=new n(9);return c[0]=t,c[1]=a,c[2]=r,c[3]=u,c[4]=e,c[5]=o,c[6]=i,c[7]=h,c[8]=M,c},set:function(t,a,n,r,u,e,o,i,h,M){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=M,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,a){if(t===a){var n=a[1],r=a[2],u=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=u}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=c*o-i*M,f=-c*e+i*h,l=M*e-o*h,v=n*s+r*f+u*l;return v?(v=1/v,t[0]=s*v,t[1]=(-c*r+u*M)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(c*n-u*h)*v,t[5]=(-i*n+u*e)*v,t[6]=l*v,t[7]=(-M*n+r*h)*v,t[8]=(o*n-r*e)*v,t):null},adjoint:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8];return t[0]=o*c-i*M,t[1]=u*M-r*c,t[2]=r*i-u*o,t[3]=i*h-e*c,t[4]=n*c-u*h,t[5]=u*e-n*i,t[6]=e*M-o*h,t[7]=r*h-n*M,t[8]=n*o-r*e,t},determinant:function(t){var a=t[0],n=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],M=t[8];return a*(M*e-o*h)+n*(-M*u+o*i)+r*(h*u-e*i)},multiply:d,translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=n[0],l=n[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+M,t[7]=f*u+l*i+c,t[8]=f*e+l*h+s,t},rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=Math.sin(n),l=Math.cos(n);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=M,t[7]=c,t[8]=s,t},scale:function(t,a,n){var r=n[0],u=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=u*a[3],t[4]=u*a[4],t[5]=u*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},fromQuat:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n+n,i=r+r,h=u+u,M=n*o,c=r*o,s=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-s-v,t[3]=c-d,t[6]=f+m,t[1]=c+d,t[4]=1-M-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-M-s,t},normalFromMat4:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15],p=n*i-r*o,x=n*h-u*o,q=n*M-e*o,w=r*h-u*i,y=r*M-e*i,g=u*M-e*h,A=c*b-s*v,R=c*m-f*v,P=c*d-l*v,j=s*m-f*b,z=s*d-l*b,I=f*d-l*m,S=p*I-x*z+q*j+w*P-y*R+g*A;return S?(S=1/S,t[0]=(i*I-h*z+M*j)*S,t[1]=(h*P-o*I-M*R)*S,t[2]=(o*z-i*P+M*A)*S,t[3]=(u*z-r*I-e*j)*S,t[4]=(n*I-u*P+e*R)*S,t[5]=(r*P-n*z-e*A)*S,t[6]=(b*g-m*y+d*w)*S,t[7]=(m*q-v*g-d*x)*S,t[8]=(v*y-b*q+d*p)*S,t):null},projection:function(t,a,n){return t[0]=2/a,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t},subtract:p,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],p=n[6],x=n[7],q=n[8];return Math.abs(r-f)<=a*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=a*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=a*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=a*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=a*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=a*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(M-p)<=a*Math.max(1,Math.abs(M),Math.abs(p))&&Math.abs(c-x)<=a*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(s-q)<=a*Math.max(1,Math.abs(s),Math.abs(q))},mul:x,sub:q});function y(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function g(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=a[9],l=a[10],v=a[11],b=a[12],m=a[13],d=a[14],p=a[15],x=n[0],q=n[1],w=n[2],y=n[3];return t[0]=x*r+q*i+w*s+y*b,t[1]=x*u+q*h+w*f+y*m,t[2]=x*e+q*M+w*l+y*d,t[3]=x*o+q*c+w*v+y*p,x=n[4],q=n[5],w=n[6],y=n[7],t[4]=x*r+q*i+w*s+y*b,t[5]=x*u+q*h+w*f+y*m,t[6]=x*e+q*M+w*l+y*d,t[7]=x*o+q*c+w*v+y*p,x=n[8],q=n[9],w=n[10],y=n[11],t[8]=x*r+q*i+w*s+y*b,t[9]=x*u+q*h+w*f+y*m,t[10]=x*e+q*M+w*l+y*d,t[11]=x*o+q*c+w*v+y*p,x=n[12],q=n[13],w=n[14],y=n[15],t[12]=x*r+q*i+w*s+y*b,t[13]=x*u+q*h+w*f+y*m,t[14]=x*e+q*M+w*l+y*d,t[15]=x*o+q*c+w*v+y*p,t}function A(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=r+r,h=u+u,M=e+e,c=r*i,s=r*h,f=r*M,l=u*h,v=u*M,b=e*M,m=o*i,d=o*h,p=o*M;return t[0]=1-(l+b),t[1]=s+p,t[2]=f-d,t[3]=0,t[4]=s-p,t[5]=1-(c+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(c+l),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function R(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function P(t,a){var n=a[0]+a[5]+a[10],r=0;return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(a[6]-a[9])/r,t[1]=(a[8]-a[2])/r,t[2]=(a[1]-a[4])/r):a[0]>a[5]&&a[0]>a[10]?(r=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/r,t[0]=.25*r,t[1]=(a[1]+a[4])/r,t[2]=(a[8]+a[2])/r):a[5]>a[10]?(r=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/r,t[0]=(a[1]+a[4])/r,t[1]=.25*r,t[2]=(a[6]+a[9])/r):(r=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/r,t[0]=(a[8]+a[2])/r,t[1]=(a[6]+a[9])/r,t[2]=.25*r),t}function j(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t}var z=g,I=j,S=Object.freeze({create:function(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var a=new n(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},fromValues:function(t,a,r,u,e,o,i,h,M,c,s,f,l,v,b,m){var d=new n(16);return d[0]=t,d[1]=a,d[2]=r,d[3]=u,d[4]=e,d[5]=o,d[6]=i,d[7]=h,d[8]=M,d[9]=c,d[10]=s,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,a,n,r,u,e,o,i,h,M,c,s,f,l,v,b,m){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=M,t[9]=c,t[10]=s,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:y,transpose:function(t,a){if(t===a){var n=a[1],r=a[2],u=a[3],e=a[6],o=a[7],i=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=r,t[9]=e,t[11]=a[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15],p=n*i-r*o,x=n*h-u*o,q=n*M-e*o,w=r*h-u*i,y=r*M-e*i,g=u*M-e*h,A=c*b-s*v,R=c*m-f*v,P=c*d-l*v,j=s*m-f*b,z=s*d-l*b,I=f*d-l*m,S=p*I-x*z+q*j+w*P-y*R+g*A;return S?(S=1/S,t[0]=(i*I-h*z+M*j)*S,t[1]=(u*z-r*I-e*j)*S,t[2]=(b*g-m*y+d*w)*S,t[3]=(f*y-s*g-l*w)*S,t[4]=(h*P-o*I-M*R)*S,t[5]=(n*I-u*P+e*R)*S,t[6]=(m*q-v*g-d*x)*S,t[7]=(c*g-f*q+l*x)*S,t[8]=(o*z-i*P+M*A)*S,t[9]=(r*P-n*z-e*A)*S,t[10]=(v*y-b*q+d*p)*S,t[11]=(s*q-c*y-l*p)*S,t[12]=(i*R-o*j-h*A)*S,t[13]=(n*j-r*R+u*A)*S,t[14]=(b*x-v*w-m*p)*S,t[15]=(c*w-s*x+f*p)*S,t):null},adjoint:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15];return t[0]=i*(f*d-l*m)-s*(h*d-M*m)+b*(h*l-M*f),t[1]=-(r*(f*d-l*m)-s*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-M*m)-i*(u*d-e*m)+b*(u*M-e*h),t[3]=-(r*(h*l-M*f)-i*(u*l-e*f)+s*(u*M-e*h)),t[4]=-(o*(f*d-l*m)-c*(h*d-M*m)+v*(h*l-M*f)),t[5]=n*(f*d-l*m)-c*(u*d-e*m)+v*(u*l-e*f),t[6]=-(n*(h*d-M*m)-o*(u*d-e*m)+v*(u*M-e*h)),t[7]=n*(h*l-M*f)-o*(u*l-e*f)+c*(u*M-e*h),t[8]=o*(s*d-l*b)-c*(i*d-M*b)+v*(i*l-M*s),t[9]=-(n*(s*d-l*b)-c*(r*d-e*b)+v*(r*l-e*s)),t[10]=n*(i*d-M*b)-o*(r*d-e*b)+v*(r*M-e*i),t[11]=-(n*(i*l-M*s)-o*(r*l-e*s)+c*(r*M-e*i)),t[12]=-(o*(s*m-f*b)-c*(i*m-h*b)+v*(i*f-h*s)),t[13]=n*(s*m-f*b)-c*(r*m-u*b)+v*(r*f-u*s),t[14]=-(n*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=n*(i*f-h*s)-o*(r*f-u*s)+c*(r*h-u*i),t},determinant:function(t){var a=t[0],n=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],M=t[8],c=t[9],s=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(a*o-n*e)*(s*m-f*b)-(a*i-r*e)*(c*m-f*v)+(a*h-u*e)*(c*b-s*v)+(n*i-r*o)*(M*m-f*l)-(n*h-u*o)*(M*b-s*l)+(r*h-u*i)*(M*v-c*l)},multiply:g,translate:function(t,a,n){var r,u,e,o,i,h,M,c,s,f,l,v,b=n[0],m=n[1],d=n[2];return a===t?(t[12]=a[0]*b+a[4]*m+a[8]*d+a[12],t[13]=a[1]*b+a[5]*m+a[9]*d+a[13],t[14]=a[2]*b+a[6]*m+a[10]*d+a[14],t[15]=a[3]*b+a[7]*m+a[11]*d+a[15]):(r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=a[9],l=a[10],v=a[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=M,t[7]=c,t[8]=s,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+s*d+a[12],t[13]=u*b+h*m+f*d+a[13],t[14]=e*b+M*m+l*d+a[14],t[15]=o*b+c*m+v*d+a[15]),t},scale:function(t,a,n){var r=n[0],u=n[1],e=n[2];return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*u,t[5]=a[5]*u,t[6]=a[6]*u,t[7]=a[7]*u,t[8]=a[8]*e,t[9]=a[9]*e,t[10]=a[10]*e,t[11]=a[11]*e,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},rotate:function(t,n,r,u){var e,o,i,h,M,c,s,f,l,v,b,m,d,p,x,q,w,y,g,A,R,P,j,z,I=u[0],S=u[1],E=u[2],O=Math.sqrt(I*I+S*S+E*E);return O<a?null:(I*=O=1/O,S*=O,E*=O,e=Math.sin(r),i=1-(o=Math.cos(r)),h=n[0],M=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],p=n[10],x=n[11],q=I*I*i+o,w=S*I*i+E*e,y=E*I*i-S*e,g=I*S*i-E*e,A=S*S*i+o,R=E*S*i+I*e,P=I*E*i+S*e,j=S*E*i-I*e,z=E*E*i+o,t[0]=h*q+f*w+m*y,t[1]=M*q+l*w+d*y,t[2]=c*q+v*w+p*y,t[3]=s*q+b*w+x*y,t[4]=h*g+f*A+m*R,t[5]=M*g+l*A+d*R,t[6]=c*g+v*A+p*R,t[7]=s*g+b*A+x*R,t[8]=h*P+f*j+m*z,t[9]=M*P+l*j+d*z,t[10]=c*P+v*j+p*z,t[11]=s*P+b*j+x*z,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},rotateX:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[4],o=a[5],i=a[6],h=a[7],M=a[8],c=a[9],s=a[10],f=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=e*u+M*r,t[5]=o*u+c*r,t[6]=i*u+s*r,t[7]=h*u+f*r,t[8]=M*u-e*r,t[9]=c*u-o*r,t[10]=s*u-i*r,t[11]=f*u-h*r,t},rotateY:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[0],o=a[1],i=a[2],h=a[3],M=a[8],c=a[9],s=a[10],f=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=e*u-M*r,t[1]=o*u-c*r,t[2]=i*u-s*r,t[3]=h*u-f*r,t[8]=e*r+M*u,t[9]=o*r+c*u,t[10]=i*r+s*u,t[11]=h*r+f*u,t},rotateZ:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[0],o=a[1],i=a[2],h=a[3],M=a[4],c=a[5],s=a[6],f=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=e*u+M*r,t[1]=o*u+c*r,t[2]=i*u+s*r,t[3]=h*u+f*r,t[4]=M*u-e*r,t[5]=c*u-o*r,t[6]=s*u-i*r,t[7]=f*u-h*r,t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,n,r){var u,e,o,i=r[0],h=r[1],M=r[2],c=Math.sqrt(i*i+h*h+M*M);return c<a?null:(i*=c=1/c,h*=c,M*=c,u=Math.sin(n),o=1-(e=Math.cos(n)),t[0]=i*i*o+e,t[1]=h*i*o+M*u,t[2]=M*i*o-h*u,t[3]=0,t[4]=i*h*o-M*u,t[5]=h*h*o+e,t[6]=M*h*o+i*u,t[7]=0,t[8]=i*M*o+h*u,t[9]=h*M*o-i*u,t[10]=M*M*o+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:A,fromQuat2:function(t,a){var r=new n(3),u=-a[0],e=-a[1],o=-a[2],i=a[3],h=a[4],M=a[5],c=a[6],s=a[7],f=u*u+e*e+o*o+i*i;return f>0?(r[0]=2*(h*i+s*u+M*o-c*e)/f,r[1]=2*(M*i+s*e+c*u-h*o)/f,r[2]=2*(c*i+s*o+h*e-M*u)/f):(r[0]=2*(h*i+s*u+M*o-c*e),r[1]=2*(M*i+s*e+c*u-h*o),r[2]=2*(c*i+s*o+h*e-M*u)),A(t,a,r),t},getTranslation:R,getScaling:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[4],o=a[5],i=a[6],h=a[8],M=a[9],c=a[10];return t[0]=Math.sqrt(n*n+r*r+u*u),t[1]=Math.sqrt(e*e+o*o+i*i),t[2]=Math.sqrt(h*h+M*M+c*c),t},getRotation:P,fromRotationTranslationScale:function(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=a[3],h=u+u,M=e+e,c=o+o,s=u*h,f=u*M,l=u*c,v=e*M,b=e*c,m=o*c,d=i*h,p=i*M,x=i*c,q=r[0],w=r[1],y=r[2];return t[0]=(1-(v+m))*q,t[1]=(f+x)*q,t[2]=(l-p)*q,t[3]=0,t[4]=(f-x)*w,t[5]=(1-(s+m))*w,t[6]=(b+d)*w,t[7]=0,t[8]=(l+p)*y,t[9]=(b-d)*y,t[10]=(1-(s+v))*y,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,a,n,r,u){var e=a[0],o=a[1],i=a[2],h=a[3],M=e+e,c=o+o,s=i+i,f=e*M,l=e*c,v=e*s,b=o*c,m=o*s,d=i*s,p=h*M,x=h*c,q=h*s,w=r[0],y=r[1],g=r[2],A=u[0],R=u[1],P=u[2],j=(1-(b+d))*w,z=(l+q)*w,I=(v-x)*w,S=(l-q)*y,E=(1-(f+d))*y,O=(m+p)*y,T=(v+x)*g,D=(m-p)*g,F=(1-(f+b))*g;return t[0]=j,t[1]=z,t[2]=I,t[3]=0,t[4]=S,t[5]=E,t[6]=O,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=n[0]+A-(j*A+S*R+T*P),t[13]=n[1]+R-(z*A+E*R+D*P),t[14]=n[2]+P-(I*A+O*R+F*P),t[15]=1,t},fromQuat:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n+n,i=r+r,h=u+u,M=n*o,c=r*o,s=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-s-v,t[1]=c+d,t[2]=f-m,t[3]=0,t[4]=c-d,t[5]=1-M-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-M-s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,a,n,r,u,e,o){var i=1/(n-a),h=1/(u-r),M=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(n+a)*i,t[9]=(u+r)*h,t[10]=(o+e)*M,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*M,t[15]=0,t},perspective:function(t,a,n,r,u){var e,o=1/Math.tan(a/2);return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,a,n,r){var u=Math.tan(a.upDegrees*Math.PI/180),e=Math.tan(a.downDegrees*Math.PI/180),o=Math.tan(a.leftDegrees*Math.PI/180),i=Math.tan(a.rightDegrees*Math.PI/180),h=2/(o+i),M=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=M,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*M*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},ortho:function(t,a,n,r,u,e,o){var i=1/(a-n),h=1/(r-u),M=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*M,t[11]=0,t[12]=(a+n)*i,t[13]=(u+r)*h,t[14]=(o+e)*M,t[15]=1,t},lookAt:function(t,n,r,u){var e,o,i,h,M,c,s,f,l,v,b=n[0],m=n[1],d=n[2],p=u[0],x=u[1],q=u[2],w=r[0],g=r[1],A=r[2];return Math.abs(b-w)<a&&Math.abs(m-g)<a&&Math.abs(d-A)<a?y(t):(s=b-w,f=m-g,l=d-A,e=x*(l*=v=1/Math.sqrt(s*s+f*f+l*l))-q*(f*=v),o=q*(s*=v)-p*l,i=p*f-x*s,(v=Math.sqrt(e*e+o*o+i*i))?(e*=v=1/v,o*=v,i*=v):(e=0,o=0,i=0),h=f*i-l*o,M=l*e-s*i,c=s*o-f*e,(v=Math.sqrt(h*h+M*M+c*c))?(h*=v=1/v,M*=v,c*=v):(h=0,M=0,c=0),t[0]=e,t[1]=h,t[2]=s,t[3]=0,t[4]=o,t[5]=M,t[6]=f,t[7]=0,t[8]=i,t[9]=c,t[10]=l,t[11]=0,t[12]=-(e*b+o*m+i*d),t[13]=-(h*b+M*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)},targetTo:function(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=r[0],h=r[1],M=r[2],c=u-n[0],s=e-n[1],f=o-n[2],l=c*c+s*s+f*f;l>0&&(c*=l=1/Math.sqrt(l),s*=l,f*=l);var v=h*f-M*s,b=M*c-i*f,m=i*s-h*c;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=s*m-f*b,t[5]=f*v-c*m,t[6]=c*b-s*v,t[7]=0,t[8]=c,t[9]=s,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t},subtract:j,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t[9]=a[9]+n[9]*r,t[10]=a[10]+n[10]*r,t[11]=a[11]+n[11]*r,t[12]=a[12]+n[12]*r,t[13]=a[13]+n[13]*r,t[14]=a[14]+n[14]*r,t[15]=a[15]+n[15]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],p=t[15],x=n[0],q=n[1],w=n[2],y=n[3],g=n[4],A=n[5],R=n[6],P=n[7],j=n[8],z=n[9],I=n[10],S=n[11],E=n[12],O=n[13],T=n[14],D=n[15];return Math.abs(r-x)<=a*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(u-q)<=a*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=a*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-y)<=a*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(i-g)<=a*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(h-A)<=a*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(M-R)<=a*Math.max(1,Math.abs(M),Math.abs(R))&&Math.abs(c-P)<=a*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(s-j)<=a*Math.max(1,Math.abs(s),Math.abs(j))&&Math.abs(f-z)<=a*Math.max(1,Math.abs(f),Math.abs(z))&&Math.abs(l-I)<=a*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-S)<=a*Math.max(1,Math.abs(v),Math.abs(S))&&Math.abs(b-E)<=a*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(m-O)<=a*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(d-T)<=a*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(p-D)<=a*Math.max(1,Math.abs(p),Math.abs(D))},mul:z,sub:I});function E(){var t=new n(3);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function O(t){var a=t[0],n=t[1],r=t[2];return Math.sqrt(a*a+n*n+r*r)}function T(t,a,r){var u=new n(3);return u[0]=t,u[1]=a,u[2]=r,u}function D(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t}function F(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t}function L(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t}function V(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2];return Math.sqrt(n*n+r*r+u*u)}function Q(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2];return n*n+r*r+u*u}function Y(t){var a=t[0],n=t[1],r=t[2];return a*a+n*n+r*r}function X(t,a){var n=a[0],r=a[1],u=a[2],e=n*n+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t}function Z(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]}function _(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[0],i=n[1],h=n[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}var B,N=D,k=F,U=L,W=V,C=Q,G=O,H=Y,J=(B=E(),function(t,a,n,r,u,e){var o,i;for(a||(a=3),n||(n=0),i=r?Math.min(r*a+n,t.length):t.length,o=n;o<i;o+=a)B[0]=t[o],B[1]=t[o+1],B[2]=t[o+2],u(B,B,e),t[o]=B[0],t[o+1]=B[1],t[o+2]=B[2];return t}),K=Object.freeze({create:E,clone:function(t){var a=new n(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},length:O,fromValues:T,copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t},set:function(t,a,n,r){return t[0]=a,t[1]=n,t[2]=r,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},subtract:D,multiply:F,divide:L,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t},scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t},scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t},distance:V,squaredDistance:Q,squaredLength:Y,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t},normalize:X,dot:Z,cross:_,lerp:function(t,a,n,r){var u=a[0],e=a[1],o=a[2];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t[2]=o+r*(n[2]-o),t},hermite:function(t,a,n,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,M=o*(e-1),c=o*(3-2*e);return t[0]=a[0]*i+n[0]*h+r[0]*M+u[0]*c,t[1]=a[1]*i+n[1]*h+r[1]*M+u[1]*c,t[2]=a[2]*i+n[2]*h+r[2]*M+u[2]*c,t},bezier:function(t,a,n,r,u,e){var o=1-e,i=o*o,h=e*e,M=i*o,c=3*e*i,s=3*h*o,f=h*e;return t[0]=a[0]*M+n[0]*c+r[0]*s+u[0]*f,t[1]=a[1]*M+n[1]*c+r[1]*s+u[1]*f,t[2]=a[2]*M+n[2]*c+r[2]*s+u[2]*f,t},random:function(t,a){a=a||1;var n=2*r()*Math.PI,u=2*r()-1,e=Math.sqrt(1-u*u)*a;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t[2]=u*a,t},transformMat4:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[3]*r+n[7]*u+n[11]*e+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*u+n[8]*e+n[12])/o,t[1]=(n[1]*r+n[5]*u+n[9]*e+n[13])/o,t[2]=(n[2]*r+n[6]*u+n[10]*e+n[14])/o,t},transformMat3:function(t,a,n){var r=a[0],u=a[1],e=a[2];return t[0]=r*n[0]+u*n[3]+e*n[6],t[1]=r*n[1]+u*n[4]+e*n[7],t[2]=r*n[2]+u*n[5]+e*n[8],t},transformQuat:function(t,a,n){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],M=a[2],c=u*M-e*h,s=e*i-r*M,f=r*h-u*i,l=u*f-e*s,v=e*c-r*f,b=r*s-u*c,m=2*o;return c*=m,s*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+c+l,t[1]=h+s+v,t[2]=M+f+b,t},rotateX:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},rotateY:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},rotateZ:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},angle:function(t,a){var n=T(t[0],t[1],t[2]),r=T(a[0],a[1],a[2]);X(n,n),X(r,r);var u=Z(n,r);return u>1?0:u<-1?Math.PI:Math.acos(u)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=n[0],i=n[1],h=n[2];return Math.abs(r-o)<=a*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=a*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-h)<=a*Math.max(1,Math.abs(e),Math.abs(h))},sub:N,mul:k,div:U,dist:W,sqrDist:C,len:G,sqrLen:H,forEach:J});function $(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function tt(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function at(t,a,r,u){var e=new n(4);return e[0]=t,e[1]=a,e[2]=r,e[3]=u,e}function nt(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t}function rt(t,a,n,r,u){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t}function ut(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t}function et(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t}function ot(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t[3]=a[3]*n[3],t}function it(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t[3]=a[3]/n[3],t}function ht(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t}function Mt(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2],e=a[3]-t[3];return Math.sqrt(n*n+r*r+u*u+e*e)}function ct(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2],e=a[3]-t[3];return n*n+r*r+u*u+e*e}function st(t){var a=t[0],n=t[1],r=t[2],u=t[3];return Math.sqrt(a*a+n*n+r*r+u*u)}function ft(t){var a=t[0],n=t[1],r=t[2],u=t[3];return a*a+n*n+r*r+u*u}function lt(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*n+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function vt(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]+t[3]*a[3]}function bt(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=a[3];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t[2]=o+r*(n[2]-o),t[3]=i+r*(n[3]-i),t}function mt(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]}function dt(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=n[0],h=n[1],M=n[2],c=n[3];return Math.abs(r-i)<=a*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=a*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-M)<=a*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-c)<=a*Math.max(1,Math.abs(o),Math.abs(c))}var pt=et,xt=ot,qt=it,wt=Mt,yt=ct,gt=st,At=ft,Rt=function(){var t=$();return function(a,n,r,u,e,o){var i,h;for(n||(n=4),r||(r=0),h=u?Math.min(u*n+r,a.length):a.length,i=r;i<h;i+=n)t[0]=a[i],t[1]=a[i+1],t[2]=a[i+2],t[3]=a[i+3],e(t,t,o),a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3];return a}}(),Pt=Object.freeze({create:$,clone:tt,fromValues:at,copy:nt,set:rt,add:ut,subtract:et,multiply:ot,divide:it,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t[3]=Math.ceil(a[3]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t[3]=Math.floor(a[3]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t[3]=Math.min(a[3],n[3]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t[3]=Math.max(a[3],n[3]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t[3]=Math.round(a[3]),t},scale:ht,scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},distance:Mt,squaredDistance:ct,length:st,squaredLength:ft,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=-a[3],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t[3]=1/a[3],t},normalize:lt,dot:vt,lerp:bt,random:function(t,a){var n,u,e,o,i,h;a=a||1;do{i=(n=2*r()-1)*n+(u=2*r()-1)*u}while(i>=1);do{h=(e=2*r()-1)*e+(o=2*r()-1)*o}while(h>=1);var M=Math.sqrt((1-i)/h);return t[0]=a*n,t[1]=a*u,t[2]=a*e*M,t[3]=a*o*M,t},transformMat4:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3];return t[0]=n[0]*r+n[4]*u+n[8]*e+n[12]*o,t[1]=n[1]*r+n[5]*u+n[9]*e+n[13]*o,t[2]=n[2]*r+n[6]*u+n[10]*e+n[14]*o,t[3]=n[3]*r+n[7]*u+n[11]*e+n[15]*o,t},transformQuat:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[0],i=n[1],h=n[2],M=n[3],c=M*r+i*e-h*u,s=M*u+h*r-o*e,f=M*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=c*M+l*-o+s*-h-f*-i,t[1]=s*M+l*-i+f*-o-c*-h,t[2]=f*M+l*-h+c*-i-s*-o,t[3]=a[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:mt,equals:dt,sub:pt,mul:xt,div:qt,dist:wt,sqrDist:yt,len:gt,sqrLen:At,forEach:Rt});function jt(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function zt(t,a,n){n*=.5;var r=Math.sin(n);return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=Math.cos(n),t}function It(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*c+o*i+u*M-e*h,t[1]=u*c+o*h+e*i-r*M,t[2]=e*c+o*M+r*h-u*i,t[3]=o*c-r*i-u*h-e*M,t}function St(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Et(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Ot(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Tt(t,n,r,u){var e,o,i,h,M,c=n[0],s=n[1],f=n[2],l=n[3],v=r[0],b=r[1],m=r[2],d=r[3];return(o=c*v+s*b+f*m+l*d)<0&&(o=-o,v=-v,b=-b,m=-m,d=-d),1-o>a?(e=Math.acos(o),i=Math.sin(e),h=Math.sin((1-u)*e)/i,M=Math.sin(u*e)/i):(h=1-u,M=u),t[0]=h*c+M*v,t[1]=h*s+M*b,t[2]=h*f+M*m,t[3]=h*l+M*d,t}function Dt(t,a){var n,r=a[0]+a[4]+a[8];if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(a[5]-a[7])*n,t[1]=(a[6]-a[2])*n,t[2]=(a[1]-a[3])*n;else{var u=0;a[4]>a[0]&&(u=1),a[8]>a[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;n=Math.sqrt(a[3*u+u]-a[3*e+e]-a[3*o+o]+1),t[u]=.5*n,n=.5/n,t[3]=(a[3*e+o]-a[3*o+e])*n,t[e]=(a[3*e+u]+a[3*u+e])*n,t[o]=(a[3*o+u]+a[3*u+o])*n}return t}var Ft,Lt,Vt,Qt,Yt,Xt,Zt=tt,_t=at,Bt=nt,Nt=rt,kt=ut,Ut=It,Wt=ht,Ct=vt,Gt=bt,Ht=st,Jt=Ht,Kt=ft,$t=Kt,ta=lt,aa=mt,na=dt,ra=(Ft=E(),Lt=T(1,0,0),Vt=T(0,1,0),function(t,a,n){var r=Z(a,n);return r<-.999999?(_(Ft,Lt,a),G(Ft)<1e-6&&_(Ft,Vt,a),X(Ft,Ft),zt(t,Ft,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(_(Ft,a,n),t[0]=Ft[0],t[1]=Ft[1],t[2]=Ft[2],t[3]=1+r,ta(t,t))}),ua=(Qt=jt(),Yt=jt(),function(t,a,n,r,u,e){return Tt(Qt,a,u,e),Tt(Yt,n,r,e),Tt(t,Qt,Yt,2*e*(1-e)),t}),ea=(Xt=m(),function(t,a,n,r){return Xt[0]=n[0],Xt[3]=n[1],Xt[6]=n[2],Xt[1]=r[0],Xt[4]=r[1],Xt[7]=r[2],Xt[2]=-a[0],Xt[5]=-a[1],Xt[8]=-a[2],ta(t,Dt(t,Xt))}),oa=Object.freeze({create:jt,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:zt,getAxisAngle:function(t,n){var r=2*Math.acos(n[3]),u=Math.sin(r/2);return u>a?(t[0]=n[0]/u,t[1]=n[1]/u,t[2]=n[2]/u):(t[0]=1,t[1]=0,t[2]=0),r},multiply:It,rotateX:St,rotateY:Et,rotateZ:Ot,calculateW:function(t,a){var n=a[0],r=a[1],u=a[2];return t[0]=n,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-u*u)),t},slerp:Tt,random:function(t){var a=r(),n=r(),u=r(),e=Math.sqrt(1-a),o=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=o*Math.sin(2*Math.PI*u),t[3]=o*Math.cos(2*Math.PI*u),t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*n+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-n*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t},conjugate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t},fromMat3:Dt,fromEuler:function(t,a,n,r){var u=.5*Math.PI/180;a*=u,n*=u,r*=u;var e=Math.sin(a),o=Math.cos(a),i=Math.sin(n),h=Math.cos(n),M=Math.sin(r),c=Math.cos(r);return t[0]=e*h*c-o*i*M,t[1]=o*i*c+e*h*M,t[2]=o*h*M-e*i*c,t[3]=o*h*c+e*i*M,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Zt,fromValues:_t,copy:Bt,set:Nt,add:kt,mul:Ut,scale:Wt,dot:Ct,lerp:Gt,length:Ht,len:Jt,squaredLength:Kt,sqrLen:$t,normalize:ta,exactEquals:aa,equals:na,rotationTo:ra,sqlerp:ua,setAxes:ea});function ia(t,a,n){var r=.5*n[0],u=.5*n[1],e=.5*n[2],o=a[0],i=a[1],h=a[2],M=a[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=M,t[4]=r*M+u*h-e*i,t[5]=u*M+e*o-r*h,t[6]=e*M+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function ha(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t}var Ma=Bt;var ca=Bt;function sa(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[4],h=n[5],M=n[6],c=n[7],s=a[4],f=a[5],l=a[6],v=a[7],b=n[0],m=n[1],d=n[2],p=n[3];return t[0]=r*p+o*b+u*d-e*m,t[1]=u*p+o*m+e*b-r*d,t[2]=e*p+o*d+r*m-u*b,t[3]=o*p-r*b-u*m-e*d,t[4]=r*c+o*i+u*M-e*h+s*p+v*b+f*d-l*m,t[5]=u*c+o*h+e*i-r*M+f*p+v*m+l*b-s*d,t[6]=e*c+o*M+r*h-u*i+l*p+v*d+s*m-f*b,t[7]=o*c-r*i-u*h-e*M+v*p-s*b-f*m-l*d,t}var fa=sa;var la=Ct;var va=Ht,ba=va,ma=Kt,da=ma;var pa=Object.freeze({create:function(){var t=new n(8);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var a=new n(8);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a},fromValues:function(t,a,r,u,e,o,i,h){var M=new n(8);return M[0]=t,M[1]=a,M[2]=r,M[3]=u,M[4]=e,M[5]=o,M[6]=i,M[7]=h,M},fromRotationTranslationValues:function(t,a,r,u,e,o,i){var h=new n(8);h[0]=t,h[1]=a,h[2]=r,h[3]=u;var M=.5*e,c=.5*o,s=.5*i;return h[4]=M*u+c*r-s*a,h[5]=c*u+s*t-M*r,h[6]=s*u+M*a-c*t,h[7]=-M*t-c*a-s*r,h},fromRotationTranslation:ia,fromTranslation:function(t,a){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*a[0],t[5]=.5*a[1],t[6]=.5*a[2],t[7]=0,t},fromRotation:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,a){var r=jt();P(r,a);var u=new n(3);return R(u,a),ia(t,r,u),t},copy:ha,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,a,n,r,u,e,o,i,h){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t},getReal:Ma,getDual:function(t,a){return t[0]=a[4],t[1]=a[5],t[2]=a[6],t[3]=a[7],t},setReal:ca,setDual:function(t,a){return t[4]=a[0],t[5]=a[1],t[6]=a[2],t[7]=a[3],t},getTranslation:function(t,a){var n=a[4],r=a[5],u=a[6],e=a[7],o=-a[0],i=-a[1],h=-a[2],M=a[3];return t[0]=2*(n*M+e*o+r*h-u*i),t[1]=2*(r*M+e*i+u*o-n*h),t[2]=2*(u*M+e*h+n*i-r*o),t},translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=.5*n[0],h=.5*n[1],M=.5*n[2],c=a[4],s=a[5],f=a[6],l=a[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*M-e*h+c,t[5]=o*h+e*i-r*M+s,t[6]=o*M+r*h-u*i+f,t[7]=-r*i-u*h-e*M+l,t},rotateX:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return St(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateY:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return Et(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateZ:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return Ot(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateByQuatAppend:function(t,a,n){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],M=a[2],c=a[3];return t[0]=i*o+c*r+h*e-M*u,t[1]=h*o+c*u+M*r-i*e,t[2]=M*o+c*e+i*u-h*r,t[3]=c*o-i*r-h*u-M*e,i=a[4],h=a[5],M=a[6],c=a[7],t[4]=i*o+c*r+h*e-M*u,t[5]=h*o+c*u+M*r-i*e,t[6]=M*o+c*e+i*u-h*r,t[7]=c*o-i*r-h*u-M*e,t},rotateByQuatPrepend:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*c+o*i+u*M-e*h,t[1]=u*c+o*h+e*i-r*M,t[2]=e*c+o*M+r*h-u*i,t[3]=o*c-r*i-u*h-e*M,i=n[4],h=n[5],M=n[6],c=n[7],t[4]=r*c+o*i+u*M-e*h,t[5]=u*c+o*h+e*i-r*M,t[6]=e*c+o*M+r*h-u*i,t[7]=o*c-r*i-u*h-e*M,t},rotateAroundAxis:function(t,n,r,u){if(Math.abs(u)<a)return ha(t,n);var e=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);u*=.5;var o=Math.sin(u),i=o*r[0]/e,h=o*r[1]/e,M=o*r[2]/e,c=Math.cos(u),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*i+f*M-l*h,t[1]=f*c+v*h+l*i-s*M,t[2]=l*c+v*M+s*h-f*i,t[3]=v*c-s*i-f*h-l*M;var b=n[4],m=n[5],d=n[6],p=n[7];return t[4]=b*c+p*i+m*M-d*h,t[5]=m*c+p*h+d*i-b*M,t[6]=d*c+p*M+b*h-m*i,t[7]=p*c-b*i-m*h-d*M,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t},multiply:sa,mul:fa,scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t},dot:la,lerp:function(t,a,n,r){var u=1-r;return la(a,n)<0&&(r=-r),t[0]=a[0]*u+n[0]*r,t[1]=a[1]*u+n[1]*r,t[2]=a[2]*u+n[2]*r,t[3]=a[3]*u+n[3]*r,t[4]=a[4]*u+n[4]*r,t[5]=a[5]*u+n[5]*r,t[6]=a[6]*u+n[6]*r,t[7]=a[7]*u+n[7]*r,t},invert:function(t,a){var n=ma(a);return t[0]=-a[0]/n,t[1]=-a[1]/n,t[2]=-a[2]/n,t[3]=a[3]/n,t[4]=-a[4]/n,t[5]=-a[5]/n,t[6]=-a[6]/n,t[7]=a[7]/n,t},conjugate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t[4]=-a[4],t[5]=-a[5],t[6]=-a[6],t[7]=a[7],t},length:va,len:ba,squaredLength:ma,sqrLen:da,normalize:function(t,a){var n=ma(a);if(n>0){n=Math.sqrt(n);var r=a[0]/n,u=a[1]/n,e=a[2]/n,o=a[3]/n,i=a[4],h=a[5],M=a[6],c=a[7],s=r*i+u*h+e*M+o*c;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*s)/n,t[5]=(h-u*s)/n,t[6]=(M-e*s)/n,t[7]=(c-o*s)/n}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],p=n[7];return Math.abs(r-s)<=a*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(u-f)<=a*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(e-l)<=a*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(o-v)<=a*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=a*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=a*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(M-d)<=a*Math.max(1,Math.abs(M),Math.abs(d))&&Math.abs(c-p)<=a*Math.max(1,Math.abs(c),Math.abs(p))}});function xa(){var t=new n(2);return n!=Float32Array&&(t[0]=0,t[1]=0),t}function qa(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t}function wa(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t}function ya(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t}function ga(t,a){var n=a[0]-t[0],r=a[1]-t[1];return Math.sqrt(n*n+r*r)}function Aa(t,a){var n=a[0]-t[0],r=a[1]-t[1];return n*n+r*r}function Ra(t){var a=t[0],n=t[1];return Math.sqrt(a*a+n*n)}function Pa(t){var a=t[0],n=t[1];return a*a+n*n}var ja=Ra,za=qa,Ia=wa,Sa=ya,Ea=ga,Oa=Aa,Ta=Pa,Da=function(){var t=xa();return function(a,n,r,u,e,o){var i,h;for(n||(n=2),r||(r=0),h=u?Math.min(u*n+r,a.length):a.length,i=r;i<h;i+=n)t[0]=a[i],t[1]=a[i+1],e(t,t,o),a[i]=t[0],a[i+1]=t[1];return a}}(),Fa=Object.freeze({create:xa,clone:function(t){var a=new n(2);return a[0]=t[0],a[1]=t[1],a},fromValues:function(t,a){var r=new n(2);return r[0]=t,r[1]=a,r},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t},set:function(t,a,n){return t[0]=a,t[1]=n,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t},subtract:qa,multiply:wa,divide:ya,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t},scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t},scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t},distance:ga,squaredDistance:Aa,length:Ra,squaredLength:Pa,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t},normalize:function(t,a){var n=a[0],r=a[1],u=n*n+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=a[0]*u,t[1]=a[1]*u,t},dot:function(t,a){return t[0]*a[0]+t[1]*a[1]},cross:function(t,a,n){var r=a[0]*n[1]-a[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,a,n,r){var u=a[0],e=a[1];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t},random:function(t,a){a=a||1;var n=2*r()*Math.PI;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t},transformMat2:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[2]*u,t[1]=n[1]*r+n[3]*u,t},transformMat2d:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[2]*u+n[4],t[1]=n[1]*r+n[3]*u+n[5],t},transformMat3:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[3]*u+n[6],t[1]=n[1]*r+n[4]*u+n[7],t},transformMat4:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[4]*u+n[12],t[1]=n[1]*r+n[5]*u+n[13],t},rotate:function(t,a,n,r){var u=a[0]-n[0],e=a[1]-n[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+n[0],t[1]=u*o+e*i+n[1],t},angle:function(t,a){var n=t[0],r=t[1],u=a[0],e=a[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(n*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]},equals:function(t,n){var r=t[0],u=t[1],e=n[0],o=n[1];return Math.abs(r-e)<=a*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-o)<=a*Math.max(1,Math.abs(u),Math.abs(o))},len:ja,sub:za,mul:Ia,div:Sa,dist:Ea,sqrDist:Oa,sqrLen:Ta,forEach:Da});t.glMatrix=e,t.mat2=c,t.mat2d=b,t.mat3=w,t.mat4=S,t.quat=oa,t.quat2=pa,t.vec2=Fa,t.vec3=K,t.vec4=Pt,Object.defineProperty(t,"__esModule",{value:!0})});
		el = me._snow_code;
		// you can modify these...
var snowOnLoad = true;
var snowFlakeCount = 3000;
var snowFlakeSize = 0.006;
var snowFlakeSpeed = 0.0017;
var snowFlakeWindSpeed = 0.0;
var snowFlakeWindDirection = 0;
var snowFlakeYOffset = 0.5; // move the snowfield up to have a "floor"

// to start and stop the effect, you can use a 'Go to URL' action and put the following piece of code into the URL field: "javascript: startSnow();" or "javascript: stopSnow();"

var snowShaderProgram;
var snowFlakeTexture;
var snowInitialized = false;
var snowListenerAdded = false;
var snowAlpha=0;

function snowInitShader() {
    var gl = player.getWebGlContext();
    var hs;
    var snowVertexShader;
    var snowFragmentShader;
    
    snowVertexShader = gl.createShader(gl.VERTEX_SHADER);
    hs = 'precision mediump float;';
    hs += "attribute vec3 aVertexPosition;\n";
    hs += "attribute vec2 aCornerPosition;\n";
    hs += "uniform mat4 uMVMatrix;\n";
    hs += "uniform mat4 uPMatrix;\n";
    hs += "uniform vec2 uFlakeScale;\n";
    hs += "uniform vec3 uTime;\n";
    hs += "uniform vec3 uOffset;\n";
    hs += "uniform float uAlpha;\n";
    hs += "varying float vAlpha;\n";
    hs += "varying vec2 vTextureCoord;\n";
    hs += "void main(void) {\n";
    hs += " vec3 fPos=mod(aVertexPosition+uTime,1.0)*2.0-1.0;";
    hs += " vAlpha = uAlpha*min(1.0,10.0*(1.0-abs(fPos.y)));\n";
    hs += " gl_Position = uPMatrix * uMVMatrix * vec4((fPos+uOffset), 1.0);\n";
    hs += " gl_Position.xy += (aCornerPosition-0.5)*uFlakeScale;\n";
    hs += " vTextureCoord = aCornerPosition;\n";
    hs += "}\n";

    gl.shaderSource(snowVertexShader, hs);
    gl.compileShader(snowVertexShader);

    if (!gl.getShaderParameter(snowVertexShader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(snowVertexShader));
        snowVertexShader = null;
    }
    
    snowFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    hs = 'precision mediump float;';
    hs += "varying vec2 vTextureCoord;\n";
    hs += "uniform sampler2D uSampler;\n";
    hs += "varying float vAlpha;\n";
    hs += "void main(void) {\n";
    hs += " gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
    hs += " gl_FragColor.a*=vAlpha;\n";
    hs += "}\n";
    
    gl.shaderSource(snowFragmentShader, hs);
    gl.compileShader(snowFragmentShader);

    if (!gl.getShaderParameter(snowFragmentShader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(snowFragmentShader));
        snowFragmentShader = null;
    }
    
    snowShaderProgram = gl.createProgram();
    gl.attachShader(snowShaderProgram, snowVertexShader);
    gl.attachShader(snowShaderProgram, snowFragmentShader);
    gl.linkProgram(snowShaderProgram);
    if (!gl.getProgramParameter(snowShaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialize snow shaders!");
    }
    snowShaderProgram.vertexPositionAttribute = gl.getAttribLocation(snowShaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    snowShaderProgram.cornerPositionAttribute = gl.getAttribLocation(snowShaderProgram, "aCornerPosition");
    gl.enableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    snowShaderProgram.pMatrixUniform = gl.getUniformLocation(snowShaderProgram, "uPMatrix");
    snowShaderProgram.mvMatrixUniform = gl.getUniformLocation(snowShaderProgram, "uMVMatrix");
    snowShaderProgram.samplerUniform = gl.getUniformLocation(snowShaderProgram, "uSampler");
    snowShaderProgram.flakeScaleUniform = gl.getUniformLocation(snowShaderProgram, "uFlakeScale");
    snowShaderProgram.timeUniform = gl.getUniformLocation(snowShaderProgram, "uTime");
    snowShaderProgram.offsetUniform = gl.getUniformLocation(snowShaderProgram, "uOffset");
    snowShaderProgram.alphaUniform = gl.getUniformLocation(snowShaderProgram, "uAlpha");
}

var snowFlakeArray=[];
var snowFlakeBuffer;

function snowInitTexture() {
    var gl = player.getWebGlContext();
    snowFlakeTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, snowFlakeTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, skin._snowflake__img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

function initSnowFlakes() {
    // The corners are two byte packed into one short, they are unpacked and normalized in the attributes
    // This way one vertex is only 8 bytes
    var corners=[0xff00,0x0000,0xffff,0x0000,0x00ff,0xffff]; 
    for (i = 0; i < snowFlakeCount; i++) {
        var snowFlake = {x: Math.random(),
                         y: Math.random(),
                         z: Math.random()};
        var j=0;
        for(j=0;j<6;j++) {
            snowFlakeArray.push(Math.round((snowFlake.x)*0xffff));
            snowFlakeArray.push(Math.round((snowFlake.y)*0xffff));
            snowFlakeArray.push(Math.round((snowFlake.z)*0xffff));
            snowFlakeArray.push(corners[j]);
        }
    }
}

function snowInitWebGL() {
    var gl = player.getWebGlContext();

    snowFlakeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, snowFlakeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Uint16Array(snowFlakeArray), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    if (skin._snowflake__img.complete) {
        snowInitTexture();
    } else {
        skin._snowflake__img.onload = function() {
           snowInitTexture();
        }
    }
}

var mvMatrix = skin.glMatrix.mat4.create();
var mvPreMatrix = skin.glMatrix.mat4.create();
var pMatrix = skin.glMatrix.mat4.create();
var tick=0;

function paintSnow() {
    if (!player.getIsLoaded()) false;
    var mat4=skin.glMatrix.mat4;
    var gl = player.getWebGlContext();
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);

    gl.useProgram(snowShaderProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, snowFlakeBuffer);
    gl.enableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    gl.enableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    gl.vertexAttribPointer(snowShaderProgram.vertexPositionAttribute, 3, gl.UNSIGNED_SHORT, true, 8, 0);
    gl.vertexAttribPointer(snowShaderProgram.cornerPositionAttribute, 2, gl.UNSIGNED_BYTE, true, 8, 6);
	
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, snowFlakeTexture);

    var viewerSize = player.getViewerSize();
    var viewerAr = viewerSize['width'] / viewerSize['height'];
    var d2r = Math.PI/180;
    var pan = player.getPan() * d2r;
    var tilt = player.getTilt() * d2r;
    var fov =  Math.min(150.0, player.getVFov()) * d2r;
    mat4.identity(pMatrix);
    mat4.perspective(pMatrix, fov, viewerAr, 0.01, 100.0);
    gl.uniformMatrix4fv(snowShaderProgram.pMatrixUniform, false, pMatrix);

    mat4.identity(mvPreMatrix);
    mat4.rotateX(mvPreMatrix, mvPreMatrix, -tilt);
    mat4.rotateY(mvPreMatrix, mvPreMatrix, -pan);
    gl.uniformMatrix4fv(snowShaderProgram.mvMatrixUniform, false, mvPreMatrix);
    gl.uniform2f(snowShaderProgram.flakeScaleUniform,snowFlakeSize/(viewerAr*Math.tan(fov/2.0)),-snowFlakeSize/Math.tan(fov/2.0));
    gl.uniform3f(snowShaderProgram.offsetUniform,0,snowFlakeYOffset,0);
    snowAlpha=Math.min(1,snowAlpha+0.01);
    gl.uniform1f(snowShaderProgram.alphaUniform,snowAlpha);
    gl.uniform3f(snowShaderProgram.timeUniform,(1.0+tick*snowFlakeWindSpeed*Math.sin(d2r*snowFlakeWindDirection)) % 1.0,
    (1.0-tick*snowFlakeSpeed) % 1.0,
    (1.0+tick*snowFlakeWindSpeed*Math.cos(d2r*snowFlakeWindDirection)) % 1.0);
    tick++;
    // draw all flakes at once
    gl.drawArrays(gl.TRIANGLES, 0, 6*snowFlakeCount);
    
    gl.disable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
    gl.disableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    gl.disableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    player.requestRedraw();
}

function startSnow() {
    if (!player.getWebGlContext) return;
    if (!snowInitialized) {
        initSnowFlakes();
        snowInitShader();
        snowInitWebGL();
        snowInitialized = true;
    }
    if (!snowListenerAdded) {
        player.addListener('renderframe', paintSnow);
        snowListenerAdded = true;
    }
    player.requestRedraw();
}

function stopSnow() {
    if (!player.getWebGlContext) return;
    if (snowListenerAdded) {
        player.removeEventListener('renderframe', paintSnow);
        snowListenerAdded = false;
    }
}

if (snowOnLoad) {
    player.addListener("webglready", function() {
        startSnow();
    });
};
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_skin.logicBlock();
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_skin.logicBlock();
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._node_cloner.logicBlock_visible();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.ggUpdatePosition();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_1.logicBlock();
			me._variable_resp_phone_2.logicBlock();
		});
		player.addListener('varchanged_node_cloner_hasDown', function(event) {
			me._thumbs_left.logicBlock_visible();
		});
		player.addListener('varchanged_node_cloner_hasUp', function(event) {
			me._thumbs_right.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_thumbnail_menu', function(event) {
			me._thumbnail_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnail_menu_phone', function(event) {
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_thumb_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb_phone.onclick=function (e) {
			if (me._node_thumb_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._node_thumb_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_phone_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img_phone']=true;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img_phone']=false;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_img_border_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 88px;';
		hs+='left : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border_phone.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border_phone.style.visibility=me._thumb_img_border_phone.ggVisible?'inherit':'hidden';
					me._thumb_img_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border_phone.style.opacity == 0.0) { me._thumb_img_border_phone.style.visibility="hidden"; } }, 205);
					me._thumb_img_border_phone.style.opacity=0;
				}
			}
		}
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_img_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img_phone.appendChild(me._thumb_img_border_phone);
		me._node_thumb_phone.appendChild(me._thumb_img_phone);
		el=me._thumb_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumb_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title_phone.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title_phone.ggElementNodeId()) == true)) || 
				((me._thumb_title_phone.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title_phone.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title_phone.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title_phone.style.transition='color 0s';
				if (me._thumb_title_phone.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title_phone.style.color="rgba(255,255,255,0.588235)";
				}
				else {
					me._thumb_title_phone.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title_phone.logicBlock_textcolor();
		me._thumb_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb_phone.appendChild(me._thumb_title_phone);
		me.__div.appendChild(me._node_thumb_phone);
		me.elementMouseOver['thumb_img_phone']=false;
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_title_phone.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
				me._thumb_title_phone.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb=document.createElement('div');
		el.ggId="node_thumb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_thumb.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img=document.createElement('div');
		els=me._thumb_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage outer-shadow";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img']=true;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img']=false;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border=document.createElement('div');
		el.ggId="thumb_img_border";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 98px;';
		hs+='left : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border.style.visibility=me._thumb_img_border.ggVisible?'inherit':'hidden';
					me._thumb_img_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border.style.opacity == 0.0) { me._thumb_img_border.style.visibility="hidden"; } }, 205);
					me._thumb_img_border.style.opacity=0;
				}
			}
		}
		me._thumb_img_border.logicBlock_alpha();
		me._thumb_img_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img.appendChild(me._thumb_img_border);
		me._node_thumb.appendChild(me._thumb_img);
		el=me._thumb_title=document.createElement('div');
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title.ggElementNodeId()) == true)) || 
				((me._thumb_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title.style.transition='color 0s';
				if (me._thumb_title.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title.style.color="rgba(255,255,255,0.588235)";
				}
				else {
					me._thumb_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title.logicBlock_textcolor();
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._thumb_title);
		me.__div.appendChild(me._node_thumb);
		me.elementMouseOver['thumb_img']=false;
		me._thumb_img_border.logicBlock_alpha();
		me._thumb_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title.logicBlock_textcolor();
				me._thumb_title.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title.logicBlock_textcolor();
			};
	};
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_1.style.transition='';
				if (me._ht_node_1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_1.style.visibility="hidden";
					me._ht_node_1.ggVisible=false;
				}
				else {
					me._ht_node_1.style.visibility=(Number(me._ht_node_1.style.opacity)>0||!me._ht_node_1.style.opacity)?'inherit':'hidden';
					me._ht_node_1.ggVisible=true;
				}
			}
		}
		me._ht_node_1.logicBlock_visible();
		me._ht_node_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.ggParameter.sx = 2.5;
					me._ht_node_bg.ggParameter.sy = 2.5;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
				else {
					me._ht_node_bg.ggParameter.sx = 1;
					me._ht_node_bg.ggParameter.sy = 1;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
			}
		}
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_node_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.33,sy:0.33,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 28px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					me._ht_node_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -28px)';
				}
				else {
					me._ht_node_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_title.style.top='calc(50% - ((0px + 0px) / 2) + 28px)';
				}
			}
		}
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 305);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_title);
		el=me._lottie_1=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_1.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._lottie_1.ggLottie.goToAndStop(me._lottie_1.ggLottie.getDuration(true), true);
		});
		el.ggId="Lottie 1";
		el.ggDx=-14;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 14px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 12px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._lottie_1);
		el=me._ht_node_thumb=document.createElement('div');
		els=me._ht_node_thumb__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_thumb_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 41px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.32,sy:0.32,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_thumb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_thumb.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_thumb.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_thumb.style.transition='opacity 300ms ease 0ms';
				if (me._ht_node_thumb.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_thumb.style.visibility=me._ht_node_thumb.ggVisible?'inherit':'hidden';
					me._ht_node_thumb.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_thumb.style.opacity == 0.0) { me._ht_node_thumb.style.visibility="hidden"; } }, 305);
					me._ht_node_thumb.style.opacity=0;
				}
			}
		}
		me._ht_node_thumb.logicBlock_alpha();
		me._ht_node_thumb.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_thumb);
		me._ht_node_1.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node_1.appendChild(me._ht_node_custom_image);
		me._ht_node_1.logicBlock_visible();
		me.elementMouseOver['ht_node_1']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_thumb.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node_1.logicBlock_visible();
			};
			me.__div = me._ht_node_1;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._lottie_10.onclick.call(me._lottie_10);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_10=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_10.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._lottie_10.ggLottie.goToAndStop(me._lottie_10.ggLottie.getDuration(true), true);
		});
		el.ggId="Lottie 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._lottie_10);
		me.elementMouseOver['ht_node']=false;
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node_1';
				hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .outer-shadow { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};