let kamus = new Map;
		kamus.set('red','merah');
		//input
		function masukan(){
			let inggris = document.getElementById('key1').value;
			let indonesia = document.getElementById('valeu1').value;
			if (inggris != "" && indonesia!= "") {
				alert("sukses "+inggris+" "+indonesia);
				kamus.set(inggris,indonesia);
				console.log(kamus);
			}else{
				alert("gagal");
			}
    		
		}

		//cari
		function cari(){
			let mencari = document.querySelector("#cari").value;
			let find = kamus.has(mencari);
			let result = (`${mencari} dalam bahasa indonesia adalah ${kamus.get(mencari)}`);
			if (find) {
				alert(`${mencari} dalam bahasa indonesia adalah ${kamus.get(mencari)}`);
				document.getElementById("allWord1").innerHTML=result;
			}else{
				alert("kosong");
			}
		}

		//hapus
		function hapus(){
		    let searchWord = document.querySelector("#hapus").value;
		    let word = kamus.has(searchWord);
		    if (word) {
		        kamus.delete(searchWord);
		        alert(searchWord + " is delete");
		        console.log(kamus);
		    } else {
		        alert("word is not find");
		    }
		    let text = ""
		    for (let dict of kamus.entries()) {
		        text += `${dict[0]} : ${dict[1]}` + " <br/>";
		        console.log(`${dict[0]} : ${dict[1]}`);
		    }
		    document.querySelector("#allWord").innerHTML = text;
		}