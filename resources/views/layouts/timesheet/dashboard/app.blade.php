<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name') }}</title>

  <!-- Styles -->
  <link href="{{ asset('css/bootstrap/bootstrap.min.css') }}" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
</head>

<body>
  <div class="container">
    <h1 class="h1">
      @yield('header')
    </h1>

    <div class="content">
      @yield('content')
    </div>
  </div>

  <!-- Scripts -->
  <script src="{{ asset('js/react/React_app.js') }}"></script>
  <span hidden id="storage" data-acct="<?=$user->id?>">

  @yield('addtl_scripts')
</body>
</html>
