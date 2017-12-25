
//kumpulan array nomor bisa diedit sendiri
var telkomsel=["0812","0813","0821","0822","0852","0853","0823","0851"];
var indosat=["0814","0815","0816","0855","0856","0857","0858"];
var three=["0895","0896","0897","0898","0899"];
var smartfren=["0881","0882","0883","0884","0885","0886","0887","0888","0889"];
var xl=["0817","0818","0819","0859","0877","0878"];
var axis=["0838","0831","0832","0833"];
//kumpulan array nomor bisa diedit sendiri

$(document).on('keyup', '.notelp', ceknomor);//fungsi ceknomor dipanggil saat memasukkan input

function ceknomor(){
$('.errtelp').empty();
var ambilno=$('.notelp').val();
var panjangno=ambilno.length;
var t;
if(panjangno>=4&&panjangno<=12){//kondisi dimana panjang no hp harus 10 samapi 12 karakter selain itu di block elsenya baris 88
t=ambilno.substring(0,4);
    //proses pengecekan masing-masing array no
    var a= telkomsel.length;
    var b=0;
    var kondisi=true;
   //bukannomor=true;
    while(b<a){
        if(telkomsel[b]==t){
            $('.notelp').css({"background-image":"url(gambar/telkomsel.png)"});
            
            kondisi=false;
            }++b;
    }
    //jika menemukan salah satu nomor dari didalam array, maka tidak akan mengecek array lainnya indikatornya adalah variable kondisi
    a=indosat.length;
    b=0;
     while(b<a&&kondisi){
        if(indosat[b]==t){
             $('.notelp').css({"background-image":"url(gambar/indosat.png)"});//menampilkan logo operator
            kondisi=false;
            }++b;
    }
    
     a=three.length;
    b=0;
     while(b<a&&kondisi){
        if(three[b]==t){
             $('.notelp').css({"background-image":"url(gambar/three.png)"});
            kondisi=false;
            }++b;
    }
      a=smartfren.length;
    b=0;
     while(b<a&&kondisi){
        if(smartfren[b]==t){
             $('.notelp').css({"background-image":"url(gambar/smartfren.png)"});
            kondisi=false;
            }++b;
    }
    a=xl.length;
    b=0;
     while(b<a&&kondisi){
        if(xl[b]==t){
             $('.notelp').css({"background-image":"url(gambar/xl.png)"});
            kondisi=false;
            }++b;
    }
      a=axis.length;
    b=0;
     while(b<a&&kondisi){
        if(axis[b]==t){
             $('.notelp').css({"background-image":"url(gambar/axis.png)"});
            kondisi=false;
            }++b;
    }
    //proses pengecekan masing-masing array no berakhir
    
    //selanjutnya kondisi dimana jika nomor tidak ditemukan atau nomor terlalu panjang
    if(kondisi){
        blocktombol();
        gambaroperatorhilang();
    }else if(panjangno>=10&&panjangno<=12){
    bukablocktombol();
    }else{
        blocktombol();
    }
}else{
    blocktombol();
   gambaroperatorhilang();
}
}
//fungsi sesuai namanya bisa dipahami sendiri
function blocktombol(){
    $('.tombol').prop("disabled", true);
}
function bukablocktombol(){
    $('.tombol').prop("disabled", false);
}
function gambaroperatorhilang(){ 
    $('.notelp').css({"background-image":"url()"});
}
//fungsi sesuai namanya bisa dipahami sendiri ditutup


function isNumberKey(evt)//fungsi block, untuk tidak boleh memesukkan input selain angka, fungsi dipanggil pada htm di onkeypress
  {
       var kodeASCII = (evt.which) ? evt.which : event.keyCode
		   if (kodeASCII > 31 && (kodeASCII < 48 || kodeASCII > 57)){
		    return false;
           }
		  return true;
 }















