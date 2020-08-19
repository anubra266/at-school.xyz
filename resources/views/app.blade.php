<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--include assets required for Inertia app here -->
    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="css/custom.css" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>

    <!-- End assets call-->
    <title>Inertia App</title>
    @routes
</head>

<body>
    <!--Call the Inertia app here like
        <div id="root"></div>
        in normal create-react-app
    -->
    @inertia
    <script src="js/landing/jquery-3.3.1.min.js"></script>
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
