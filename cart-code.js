$(document).ready(function () {
    //setup the cart
    var cartCountAll = 0;
    var cartCountSmall = 0;
    var cartCountMedium = 0;
    var cartCountLarge = 0;
    var productSize = 'S';
    $(".product-size-button.small").addClass("selected-size"); //default size when the page is loaded the first time
    var displayMobileCart = true;
    $('.cart-count').text('( ' + cartCountAll + ' )'); //design had spaces before and after numbers
    $('.product-size-selected').text(productSize);

    $(".cart-button").click(function () {
        cartCountAll = cartCountAll + 1;
        $('.cart-count').text('( ' + cartCountAll + ' )');
        
        if (productSize === 'S') {
            cartCountSmall = cartCountSmall + 1;

            if (cartCountSmall > 0) {
                $(".cart-expanded-small-product").show();
                $('.expanded-cart-count-s').text(cartCountSmall + 'x');
            }
        }

        if (productSize === 'M') {
            cartCountMedium = cartCountMedium + 1;

            if (cartCountMedium > 0) {
                $(".cart-expanded-medium-product").show();
                $('.expanded-cart-count-m').text(cartCountMedium + 'x');
            }
        }

        if (productSize === 'L') {
            cartCountLarge = cartCountLarge + 1;

            if (cartCountLarge > 0) {
                $(".cart-expanded-large-product").show();
                $('.expanded-cart-count-l').text(cartCountLarge + 'x');
            }
        }
    });

    $(".product-size-button").click(function () {
        productSize = $(this).closest('.product-size-button').text();

        //show selected size
        $('.product-size-selected').text(productSize);

        //Change color when selecting size
        $(".product-size-button.small").removeClass("selected-size");
        $(".product-size-button.medium").removeClass("selected-size");
        $(".product-size-button.large").removeClass("selected-size");

        if (productSize === 'S') {
            $(".product-size-button.small").addClass("selected-size");
        }
        if (productSize === 'M') {
            $(".product-size-button.medium").addClass("selected-size");
        }
        if (productSize === 'L') {
            $(".product-size-button.large").addClass("selected-size");
        }
    });

    $('.cart-small').hover(function () {
        $(".cart-small").addClass("cart-small-open");
        $(".cart-expanded").show();
        $(".cart-expanded-border-top-part").show();

        if (cartCountAll === 0) {
            $('.cart-expanded-empty').show();
        }
    });

    $(".cart-small").mouseleave(function () {
        $(".cart-small").removeClass("cart-small-open");
        $(".cart-expanded").hide();
        $(".cart-expanded-empty").hide();
    });


    $('.cart-small-responsive').click(function () {
        //open the mobile cart if the user clicks on it
        if (displayMobileCart === true) {
            $(".cart-small-responsive").addClass("cart-small-open");
            $(".cart-expanded").show();
            $(".cart-expanded").addClass("cart-expanded-mobile");
            $(".cart-expanded-border-top-part-mobile").show();

            if (cartCountAll === 0) {
                $('.cart-expanded-empty').show();
            }
        }

        //hide the mobile opened cart if the user clicks on it again
        if (displayMobileCart === false) {
            $(".cart-small-responsive").removeClass("cart-small-open");
            $(".cart-expanded").hide();
            $(".cart-expanded-border-top-part-mobile").hide();

            if (cartCountAll === 0) {
                $('.cart-expanded-empty').hide();
            }
        }
        
        if (displayMobileCart === true) {
            displayMobileCart = false;
        } else {
            displayMobileCart = true;
        }
    });
});
