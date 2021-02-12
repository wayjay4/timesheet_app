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

        <!-- Custom styles for this dashboard template -->
        <link rel="stylesheet" href="{{ mix('css/bootstrap/themes/dashboard.css') }}">

        @livewireStyles

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>

        <!-- Custom scripts for this dashboard template -->
        <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" defer></script>
        <script src="{{ mix('js/bootstrap/themes/dashboard.js') }}" defer></script>

        <!-- React script -->
        <script src="{{ mix('js/react/React_app.js') }}" defer></script>

        <script>
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
                        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div class="sidebar-sticky pt-12">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-timesheets" href="{{ route('timesheets') }}">
                                            <span data-feather="home"></span>
                                            Timesheets <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-orders" href="{{ route('orders') }}">
                                            <span data-feather="file"></span>
                                            Orders
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-products" href="{{ route('products') }}">
                                            <span data-feather="shopping-cart"></span>
                                            Products
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-customers" href="{{ route('customers') }}">
                                            <span data-feather="users"></span>
                                            Customers
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-reports" href="{{ route('reports') }}">
                                            <span data-feather="bar-chart-2"></span>
                                            Reports
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" id="sb-integrations" href="{{ route('integrations') }}">
                                            <span data-feather="layers"></span>
                                            Integrations
                                        </a>
                                    </li>
                                </ul>

                                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                        <span data-feather="plus-circle"></span>
                                    </a>
                                </h6>
                                <ul class="nav flex-column mb-2">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" href="#">
                                            <span data-feather="file-text"></span>
                                            Current month
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" href="#">
                                            <span data-feather="file-text"></span>
                                            Last quarter
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" href="#">
                                            <span data-feather="file-text"></span>
                                            Social engagement
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex" href="#">
                                            <span data-feather="file-text"></span>
                                            Year-end sale
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

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

                            <h2 hidden>Section title</h2>
                            <div hidden class="table-responsive">
                                <table class="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>random</td>
                                            <td>data</td>
                                            <td>placeholder</td>
                                            <td>text</td>
                                        </tr>
                                        <tr>
                                            <td>1,002</td>
                                            <td>placeholder</td>
                                            <td>irrelevant</td>
                                            <td>visual</td>
                                            <td>layout</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>data</td>
                                            <td>rich</td>
                                            <td>dashboard</td>
                                            <td>tabular</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>information</td>
                                            <td>placeholder</td>
                                            <td>illustrative</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1,004</td>
                                            <td>text</td>
                                            <td>random</td>
                                            <td>layout</td>
                                            <td>dashboard</td>
                                        </tr>
                                        <tr>
                                            <td>1,005</td>
                                            <td>dashboard</td>
                                            <td>irrelevant</td>
                                            <td>text</td>
                                            <td>placeholder</td>
                                        </tr>
                                        <tr>
                                            <td>1,006</td>
                                            <td>dashboard</td>
                                            <td>illustrative</td>
                                            <td>rich</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1,007</td>
                                            <td>placeholder</td>
                                            <td>tabular</td>
                                            <td>information</td>
                                            <td>irrelevant</td>
                                        </tr>
                                        <tr>
                                            <td>1,008</td>
                                            <td>random</td>
                                            <td>data</td>
                                            <td>placeholder</td>
                                            <td>text</td>
                                        </tr>
                                        <tr>
                                            <td>1,009</td>
                                            <td>placeholder</td>
                                            <td>irrelevant</td>
                                            <td>visual</td>
                                            <td>layout</td>
                                        </tr>
                                        <tr>
                                            <td>1,010</td>
                                            <td>data</td>
                                            <td>rich</td>
                                            <td>dashboard</td>
                                            <td>tabular</td>
                                        </tr>
                                        <tr>
                                            <td>1,011</td>
                                            <td>information</td>
                                            <td>placeholder</td>
                                            <td>illustrative</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1,012</td>
                                            <td>text</td>
                                            <td>placeholder</td>
                                            <td>layout</td>
                                            <td>dashboard</td>
                                        </tr>
                                        <tr>
                                            <td>1,013</td>
                                            <td>dashboard</td>
                                            <td>irrelevant</td>
                                            <td>text</td>
                                            <td>visual</td>
                                        </tr>
                                        <tr>
                                            <td>1,014</td>
                                            <td>dashboard</td>
                                            <td>illustrative</td>
                                            <td>rich</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1,015</td>
                                            <td>random</td>
                                            <td>tabular</td>
                                            <td>information</td>
                                            <td>text</td>
                                        </tr>
                                    </tbody>
                                </table>
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
