const namaHewan = {
    hewan: false,
    printed: function(){
        console.log(`nama ku adalah ${this.name}. apakah saya hewan? ${this.hewan}`)
    }
};

const hewan2 = Object.create(namaHewan);

hewan2.name  = "heli";
hewan2.hewan = true;
hewan2.printed();