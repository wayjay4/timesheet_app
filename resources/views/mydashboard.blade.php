
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

		<title>Timesheets - Directline</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>
	</head>

	<body>

		<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Directline - New Mexico</a>
			<button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<input hidden class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">

			<ul class="navbar-nav px-3">
				<li class="nav-item text-nowrap">
		            @if (Route::has('login'))
		                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
		                    @auth
		                        <a href="{{ url('/dashboard') }}" class="text-sm text-gray-700 underline">Dashboard</a>




		                    @else
		                        <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Login</a>

		                        @if (Route::has('register'))
		                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>
		                        @endif
		                    @endauth
		                </div>
		            @endif
				</li>
			</ul>
		</nav>

		<div class="container-fluid">
			<div class="row">
				<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
					<div class="sidebar-sticky pt-3">
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link active" href="#">
									<span data-feather="home"></span>
									Dashboard <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="file"></span>
									Orders
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="shopping-cart"></span>
									Products
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="users"></span>
									Customers
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="bar-chart-2"></span>
									Reports
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
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
								<a class="nav-link" href="#">
									<span data-feather="file-text"></span>
									Current month
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="file-text"></span>
									Last quarter
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="file-text"></span>
									Social engagement
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<span data-feather="file-text"></span>
									Year-end sale
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 class="h2">Dashboard</h1>
						<div class="btn-toolbar mb-2 mb-md-0">
							<div class="btn-group mr-2">
								<button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
								<button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
							</div>
							<button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
								<span data-feather="calendar"></span>
								This week
							</button>
						</div>
					</div>

					

					<h2>Section title</h2>
					<div class="table-responsive">
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
	</body>
</html>
