		(function($){
					
				'use strict';
			    var loadComponentCss = $("<style></style>")
			        .append(`
			                .md-mask{
								width: 100%;
								height: 100%;
								background-color: gray;
								opacity: .2;
								z-index: 998;
								position:absolute;
								left: 0;
								top: 0;
								display:none
							}
							.lg-modal{
								width: 70%;
								/*height: 70%;*/
								min-height: 70%;
								background: white;
								box-shadow: 3px 3px 10px black;
								position: absolute;
								left: 15%;
								top: 10%;
								z-index: 999;
								border-radius: 1% 1%;
								display:none;
								
							}
							.md-modal{
								width: 50%;
								/*height: 70%;*/
								min-height: 50%;
								background: white;
								box-shadow: 3px 3px 10px black;
								position: absolute;
								left: 25%;
								top: 10%;
								z-index: 999;
								border-radius: 1% 1%;
								display:none;
								
							}
							.sm-modal{
								width: 30%;
								/*height: 70%;*/
								min-height: 30%;
								background: white;
								box-shadow: 3px 3px 10px black;
								position: absolute;
								left: 35%;
								top: 10%;
								z-index: 999;
								border-radius: 1% 1%;
								display:none;
								
							}
							.circle-modal{
								border-radius:50% 50% ;
								/*padding: 10%;*/
							}
							.close-btn{
								position: absolute;
								right: 2%;
								top: 2%;
							
						    }
			                `
			        ).insertAfter("body");
				$.fn.modal=function(option){
				var defaultSetting=({size:'md',shape:'square',tittle:'这是一个模态框'});
				var setting=$.extend(true, {},defaultSetting,option);
				this.addClass(setting.size+'-modal').addClass(setting.shape+'-modal').prepend('<h1 class="text-center">'+setting.tittle+'</h1>').append('<button class="btn-danger close-btn" data-modal-close="'+this.selector+'">X</button>').after('<div class="md-mask"></div>');
				$('.md-mask').hide();
				$("[data-modal='"+this.selector+"']").click(function(){
//					this.fadeIn();
					console.log(this.dataset.modal);
					$(this.dataset.modal).fadeIn(1000);
					$('.md-mask').fadeIn();
				});
				$('.close-btn').click(function(){
//					this.fadeOut(1000);
					$('.md-mask').fadeOut();
					$(this.dataset.modalClose).fadeOut();
				});
			}
			}(jQuery))