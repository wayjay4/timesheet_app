<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'DirectLine') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @livewireStyles

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>

        <!-- React script -->
        <script src="{{ mix('js/react/React_app.js') }}" defer></script>

        <script defer>
            function handleLoad(){
                setActiveLink();
            }

            function setActiveLink(){
                // get current page we are on (ie. sidebar link identifier)
                let sb_linkname = document.getElementById('storage').getAttribute("data-page");
                // set page's link to 'active'
                document.getElementById("sb-"+sb_linkname).classList.add("active");

                // NOTE: another way of doing this with current url
                // get current page we are on (ie. sidebar link identifier)
                // let pathArr = window.location.pathname.split('/');
                // let sb_linkname = pathArr[pathArr.length-1];
                // set page's link to 'active'
                // document.getElementById("sb-"+sb_linkname).classList.add("active");
            }
        </script>
    </head>
    <body class="font-sans antialiased" onload="handleLoad()">
        <div class="min-h-screen bg-trans">
            @livewire('navigation-dropdown')

            <!-- Page Heading -->
            <header hidden class="bg-white shadow sticky-top" style="z-index: 102;">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        @yield('header')
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <div class="container-fluid">
                    <div class="row">
                        @include('dashboard.sidebar-navigation')

                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h2 class="h2">@yield('header')</h2>
                                <div class="btn-toolbar mb-2 mb-md-0">
                                    <div class="btn-group mr-2">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex">
                                        <span data-feather="calendar"></span>
                                        This week
                                    </button>
                                </div>
                            </div>

                            <div class="content">
                                @yield('content')
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>

        @stack('modals')

        @livewireScripts

        @yield('addtl_scripts')

        <span hidden id="storage" data-acct="<?=$user->id?>" data-profilePhoto="<?=$user->profile_photo_url?>" data-page="<?=$page?>">
    </body>
</html>
