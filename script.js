(function($){

	$(document).on('click','.more-link',function(e){
	 	e.preventDefault();
	 	link = $(this);
	 	id   = link.attr('href').replace(/^.*#more-/,'');

		$.ajax({
			url : dcms_vars.ajaxurl,
			type: 'post',
			data: {
				action : 'dcms_ajax_readmore',
				id_post: id
			},
			beforeSend: function(){
				link.html('Cargando ...<img src="https://s3-sa-east-1.amazonaws.com/img.decodecms/entradas/Ajax+en+WordPress/ajax-loader.gif" style="float:left;" />');
			},
			success: function(resultado){
				 $('#post-'+id).find('.entry-content').html(resultado);		
			}

		});

	});

})(jQuery);
