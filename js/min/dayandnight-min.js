function getStylesheet(){var e=(new Date).getHours();0<=e&&e<6&&document.write("<link rel='stylesheet' href='/stylesheets/css/dark.css' type='text/css'>"),6<=e&&e<22&&document.write("<link rel='stylesheet' href='/stylesheets/css/style.css' type='text/css'>"),22<=e&&e<=24&&document.write("<link rel='stylesheet' href='/stylesheets/css/dark.css' type='text/css'>")}getStylesheet();