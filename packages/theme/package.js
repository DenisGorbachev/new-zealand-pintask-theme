Package.describe({
  summary: "A theme package"
});

Package.on_use(function(api) {
  api.use(["less"]);

  api.add_files([
    "theme.less"
  ], ["client"]);
});

