<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Loop Demo</title>
</head>
<body>
    <!-- ここで実行させる … https://paiza.io/ja/projects/new -->
     <h1>PHP Dynamic Page Demo</h1>
    <ul>
      <?php for ($i = 1; $i <= 50; $i++) { ?>
        <li><?php echo $i; ?></li>
      <?php } ?>
    </ul>
</body>
</html>
