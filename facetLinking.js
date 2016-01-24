$( document ).ready( function() {
	$(".embed").each( function() {
		//var baseurl = "http://app.cfregisters.org/registers?filter[author1][]=La Harpe (Jean François de)&filter[title1][]=Philoctète";
		//var urlsuffix = "&utf8=%25E2%259C%2593";
		var baseurl = $( this ).attr("baseurl");
		var urlsuffix = $( this ).attr("suffixurl");
		$( this ).find(".facet").each( function() {
			var facetid = $( this ).attr("id");
			if (facetid != undefined) {
				//console.log(facetid);
				$( this ).find(".label").each( function() {
					$( this ).click( function() {
						window.open(baseurl + "&filter[" + facetid + "][]=" + $( this ).html().trim() + urlsuffix, "", "");
					});
				});
			}
		});
		$( this ).append("<i class='icon-gotoapp'></i>");
		$( this ).find(".icon-gotoapp").click( function() {
			window.open(baseurl + urlsuffix, "", "");
		}).hover( function() {
			$( this ).parents(".embed").css("border-style", "solid");
		}, function() {
			$( this ).parents(".embed").css("border-style", "dashed");
		});
		$( this ).find(".timeline").click(function() { window.open(baseurl + urlsuffix, "", ""); });
	});
});
