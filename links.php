<!DOCTYPE html>
<html>
<head>
	<?php include('include/styles.php') ?>
	<style type="text/css">
		.alllinklist {
			padding: 30px;
		}
		.alllinklist ul li {
			margin-bottom: 10px;
		}
		.alllinklist ul li a{
			position: relative;
			font-size: 18px;
			padding-left: 25px;
			color: #000000;
			font-weight: 700;
			transition: all 0.3s ease-in-out;
		}
		.alllinklist ul li a:hover {
			color: #e36f45;
		}
		.alllinklist ul li a:before {
			content: "\68";
			font-family: "sulmona" !important;
			font-size: 16px;
			position: absolute;
			left: 0;
			top: 0;
			color: #222222;
		}
	</style>
</head>
<body>
<?php include('include/header.php') ?>

<div class="alllinklist">
	<div class="container">
		<ul>
			<li><a target="_blank" href="index.php">Home</a></li>
			<li><a target="_blank" href="about-us.php">About Us</a></li>
			<li><a target="_blank" href="gallery.php">Photo Gallery</a></li>
			<li><a target="_blank" href="private-events.php">Public &amp; Private Events</a></li>
			<li><a target="_blank" href="menu.php">Menu</a></li>
			<li><a target="_blank" href="contact-us.php">Contact Us</a></li>
			<li><a target="_blank" href="404.php">404</a></li>
		</ul>
	</div>
</div>

	<?php include('include/footer.php'); ?>
	<?php include('include/scripts.php'); ?>

</body>
</html>