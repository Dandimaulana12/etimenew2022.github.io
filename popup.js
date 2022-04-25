let hamburger = document.querySelector('#hamburger');
let navlinks = document.querySelector('#navlinks');

let line = hamburger.querySelector('#line');
let line2 = hamburger.querySelector('#line2');

hamburger.addEventListener('click', function(){
    if (navlinks.classList.contains('hidden')) {
        navlinks.classList.remove('hidden');
        line.classList.add('relative', 'rotate-45');
        line2.classList.add('relative', '-rotate-45');
        line2.classList.remove('mt-2');
    } else{
        navlinks.classList.add('hidden');
        line.classList.remove('relative', 'rotate-45');
        line2.classList.remove('relative', '-rotate-45');
        line2.classList.add('mt-2');
    }

});
//guide book plc
let judul_pemenangplc = document.querySelector('#plc_pemenang');
$(document).ready(function() {
  $("#judul_pemenangplc").hide();
  $("#pemenang123_plc").hide();
  $("#pemenang45_plc").hide();
  $("#btn_more").click(function(){
    $("#pemenang123_plc").fadeToggle('slow');
    $("#pemenang45_plc").fadeToggle('slow');
    $("#judul_pemenangplc").slideDown('slow');
    $("#btn_more").hide();
    $("#btn_sembunyi").show();
  }),
  $("#btn_sembunyi").click(function(){
    $("#pemenang123_plc").fadeToggle('slow');
    $("#pemenang45_plc").fadeToggle('slow');
    $("#judul_pemenangplc").slideUp('slow');
    $("#btn_more").show();
    $("#btn_sembunyi").hide();
  })
});
//end guide book
//kategori plc dekstop
let judul_pemenangplc1 = document.querySelector('#plc_pemenang');
$(document).ready(function() {
  $("#judul_kategori").hide();
  $("#jdl_tahapplc").hide();
  $("#tahapplc").hide();
  $("#kategori").hide();
  $("#infoplc1").hide();
  $("#infoplc2").hide();
  $("#infoplc3").hide();
  $("#infoplc4").hide();
  $("#infoplc5").hide();
  $("#judul_infoplc").hide();
  $("#btn_moree").click(function(){
    judul_pemenangplc.classList.add('translate-y-44');
    judul_pemenangplc.classList.add('pb-44');
    $("#judul_kategori").slideDown('slow');
    $("#judul_infoplc").slideDown('slow');
    $("#jdl_tahapplc").slideDown('slow');
    $("#tahapplc").toggle('slide');
    $("#kategori").toggle('slide');
    $("#infoplc1").toggle('slide');
    $("#infoplc2").toggle('slide');
    $("#infoplc3").toggle('slide');
    $("#infoplc4").toggle('slide');
    $("#infoplc5").toggle('slide');
    $("#btn_moree").hide();
    $("#btn_sembunyii").show();
  }),
  $("#btn_sembunyii").click(function(){
    judul_pemenangplc.classList.remove('translate-y-44');
    judul_pemenangplc.classList.remove('pb-44');
    $("#jdl_tahapplc").slideUp('slow');
    $("#tahapplc").toggle('slide');
    $("#kategori").toggle('slide');
    $("#infoplc1").toggle('slide');
    $("#infoplc2").toggle('slide');
    $("#infoplc3").toggle('slide');
    $("#infoplc4").toggle('slide');
    $("#infoplc5").toggle('slide');
    $("#judul_infoplc").slideUp('slow');
    $("#judul_kategori").slideUp('slow');
    $("#btn_moree").show();
    $("#btn_sembunyii").hide();
  })
});
//end kategori plc dekstop

//guide book rmi
$(document).ready(function() {
    $("#pemenang123_rmi").hide();
    $("#pemenang45_rmi").hide();
    $("#judul_pemenangrmi").hide();
    $("#btn_more2rmi").click(function(){
      $("#pemenang123_rmi").fadeToggle('slow');
      $("#pemenang45_rmi").fadeToggle('slow');
      $("#judul_pemenangrmi").slideDown('slow');
      $("#btn_more2rmi").hide();
      $("#btn_sembunyi2rmi").show();
    }),
    $("#btn_sembunyi2rmi").click(function(){
      $("#pemenang123_rmi").fadeToggle('slow');
      $("#pemenang45_rmi").fadeToggle('slow');
      $("#judul_pemenangrmi").slideUp('slow');
      $("#btn_more2rmi").show();
      $("#btn_sembunyi2rmi").hide();
    })
  });
  //end guide book rmi
  //kategori, dll rmi
  let judul_pemenangrmi1 = document.querySelector('#rmi_pemenang');
  $(document).ready(function() {
    $("#jdl_tahaprmi").hide();
    $("#tahaprmi").hide();
    $("#judul_kategorirmi").hide();
    $("#judul_informi").hide();
    $("#informi1").hide();
    $("#informi2").hide();
    $("#informi3").hide();
    $("#informi4").hide();
    $("#informi5").hide();
    $("#kategorirmi").hide();
    $("#btn_more2").click(function(){
      judul_pemenangrmi1.classList.add('translate-y-44');
      judul_pemenangrmi1.classList.add('pb-44');
      $("#judul_kategorirmi").slideDown('slow');
      $("#jdl_tahaprmi").slideDown('slow');
      $("#judul_informi").slideDown('slow');
      $("#kategorirmi").toggle('slide');
      $("#tahaprmi").toggle('slide');
      $("#informi1").toggle('slide');
      $("#informi2").toggle('slide');
      $("#informi3").toggle('slide');
      $("#informi4").toggle ('slide');
      $("#informi5").toggle('slide');
      $("#btn_more2").hide();
      $("#btn_sembunyi2").show();
    }),
    $("#btn_sembunyi2").click(function(){
      judul_pemenangrmi1.classList.remove('translate-y-44');
      judul_pemenangrmi1.classList.remove('pb-44');
      $("#jdl_tahaprmi").slideUp('slow');
      $("#judul_kategorirmi").slideUp('slow');
      $("#judul_informi").slideUp('slow');
      $("#tahaprmi").toggle('slide');
      $("#informi1").toggle('slide');
      $("#informi2").toggle('slide');
      $("#informi3").toggle('slide');
      $("#informi4").toggle('slide');
      $("#informi5").toggle('slide');
      $("#kategorirmi").toggle('slide');
      $("#btn_more2").show();
      $("#btn_sembunyi2").hide();
    })
  });
  //end kategori, dll rmi
  //guide book networking
  let judul_pemenangnetwork1 = document.querySelector('#network_pemenang');
  $(document).ready(function() {
    $("#gb_net").hide();
    $("#more_net").hide(); 
    $("#judul_infonet").hide(); 
    $("#kategori_net").hide();
    $("#judul_kategorinet").hide();
    $("#infonet1").hide();
    $("#infonet2").hide();
    $("#infonet3").hide();
    $("#infonet4").hide();
    $("#infonet5").hide();
    $("#jdl_tahapnetwork").hide();
    $("#tahapnetwork").hide();
    $("#btn_more1").click(function(){
      judul_pemenangnetwork1.classList.add('translate-y-44');
      judul_pemenangnetwork1.classList.add('pb-44');
      $("#jdl_tahapnetwork").slideDown('slow');
      $("#tahapnetwork").toggle('slide');
      $("#judul_kategorinet").slideDown('slow');
      $("#more_net").slideDown('slow');
      $("#judul_infonet").slideDown('slow');
      $("#gb_net").slideDown('slow');
      $("#infonet1").toggle('slide');
      $("#infonet2").toggle('slide');
      $("#infonet3").toggle('slide');
      $("#infonet4").toggle('slide');
      $("#infonet5").toggle('slide');
      $("#kategori_net").slideDown('slow');
      $("#btn_more1").hide();
      $("#btn_sembunyi1").show();
    }),
    $("#btn_sembunyi1").click(function(){
      judul_pemenangnetwork1.classList.remove('translate-y-44');
      judul_pemenangnetwork1.classList.remove('pb-44');
      $("#jdl_tahapnetwork").slideUp('slow');
      $("#tahapnetwork").toggle('slide');
      $("#judul_kategorinet").slideUp('slow');
      $("#gb_net").slideUp('slow');
      $("#more_net").slideUp('slow');
      $("#judul_infonet").slideUp('slow');
      $("#kategori_net").slideUp('slow');
      $("#infonet1").toggle('slide');
      $("#infonet2").toggle('slide');
      $("#infonet3").toggle('slide');
      $("#infonet4").toggle('slide');
      $("#infonet5").toggle('slide');
      $("#btn_more1").show();
      $("#btn_sembunyi1").hide();
    })
  });
//end guide book networking
//kategori networking
$(document).ready(function() {
    $("#judul_pemenangnet").hide();
    $("#pemenang123_net").hide();
    $("#pemenang45_net").hide();
    $("#btn_moreenet").click(function(){
      $("#pemenang123_net").fadeToggle('slow');
      $("#pemenang45_net").fadeToggle('slow');
      $("#judul_pemenangnet").slideDown('slow');
      $("#btn_moreenet").hide();
      $("#btn_sembunyiinet").show();
    }),
    $("#btn_sembunyiinet").click(function(){
      $("#pemenang123_net").fadeToggle('slow');
      $("#pemenang45_net").fadeToggle('slow');
      $("#judul_pemenangnet").slideUp('slow');
      $("#btn_moreenet").show();
      $("#btn_sembunyiinet").hide();
          })
        });
//end kategori networking
//faq
//faq btn1
$(document).ready(function() {
    $("#faq").hide();
    $("#btn_faq").click(function(){
      $("#faq").slideToggle('slow');
    })
    $("#btn_faq1").click(function(){
      $("#faq").slideToggle('slow');
    })
  });

//faq btn2
  $(document).ready(function() {
    $("#faq1").hide();
    $("#btn_faq2").click(function(){
      $("#faq1").slideToggle('slow');
    })
    $("#btn_faq11").click(function(){
      $("#faq1").slideToggle('slow');
    })
  });
//faq btn3
$(document).ready(function() {
    $("#faq2").hide();
    $("#btn_faq3").click(function(){
      $("#faq2").slideToggle('slow');
    })
    $("#btn_faq111").click(function(){
      $("#faq2").slideToggle('slow');
    })
  });
//faq btn4
$(document).ready(function() {
    $("#faq3").hide();
    $("#btn_faq4").click(function(){
      $("#faq3").slideToggle('slow');
    })
    $("#btn_faq1111").click(function(){
      $("#faq3").slideToggle('slow');
    })
  });
//faq btn5
$(document).ready(function() {
    $("#faq4").hide();
    $("#btn_faq5").click(function(){
      $("#faq4").slideToggle('slow');
    })
    $("#btn_faq11111").click(function(){
      $("#faq4").slideToggle('slow');
  })
});
//end faq