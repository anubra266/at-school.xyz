<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--SEO assets -->
    <meta name="theme-color" content="#000000" />
    <meta name="title" content="at-School" />
    <meta name="description" content="We help to keep the flow of education, wherever you are, at anytime." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://at-school.xyz/" />
    <meta property="og:title" content="at-School" />
    <meta property="og:description" content="We help to keep the flow of education, wherever you are, at anytime." />
    <meta property="og:image" content="%PUBLIC_URL%/at-school.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@anubra266" />
    <meta property="twitter:creator" content="@anubra266" />
    <meta property="twitter:url" content="https://at-school.xyz/" />
    <meta property="twitter:title" content="at-School" />
    <meta property="twitter:description"
        content="We help to keep the flow of education, wherever you are, at anytime." />
    <meta property="twitter:image" content="%PUBLIC_URL%/at-school.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <!--include assets required for Inertia app here -->
    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <!-- End assets call-->
    <title>at-School</title>
    <!--backend routes -->
    @routes
    <!-- ------------- -->
</head>

<body>
    <!-- App -->
    @inertia
    <!-- --- -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/landing/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/landing/jquery-ui.js"></script>
    <script src="js/landing/popper.min.js"></script>
    <script src="js/landing/bootstrap.min.js"></script>
    <script src="js/landing/owl.carousel.min.js"></script>
    <script src="js/landing/jquery.stellar.min.js"></script>
    <script src="js/landing/jquery.countdown.min.js"></script>
    <script src="js/landing/bootstrap-datepicker.min.js"></script>
    <script src="js/landing/jquery.easing.1.3.js"></script>
    <script src="js/landing/aos.js"></script>
    <script src="js/landing/jquery.fancybox.min.js"></script>
    <script src="js/landing/jquery.sticky.js"></script>


    <script src="js/landing/main.js"></script>
</body>

</html>
