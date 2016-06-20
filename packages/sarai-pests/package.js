Package.describe({
  name: 'sarai:sarai-pests',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    "sarai:sarai-lib",
    "sarai:sarai-user",
    "sarai:sarai-admin",
    "sarai:sarai-layout",
    "sarai:sarai-pests-data",
    "sarai:sarai-pests-form-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-pests/index.html",
    "client/components/sarai-pests/index.js",
    "client/components/sarai-pests/index.less",
    "client/components/sarai-pests/route.js",
    "client/components/sarai-pests/on-created.js",
    "client/components/sarai-pests-lib/index.html",
    "client/components/sarai-pests-lib/index.js",
    "client/components/sarai-pests-lib/index.less",
    "client/components/sarai-pests-lib/route.js",
    "client/components/sarai-pests-lib/on-created.js",
    "client/components/sarai-pests-id/index.html",
    "client/components/sarai-pests-id/index.js",
    "client/components/sarai-pests-id/index.less",
    "client/components/sarai-pests-id/route.js",
    "client/components/sarai-pests-id/on-created.js",
    "client/components/sarai-pests-id/on-rendered.js",
    "client/components/sarai-pests-entity-page/index.html",
    "client/components/sarai-pests-entity-page/index.less",
    "client/components/sarai-pests-entity-page/index.js",
    "client/components/sarai-pests-entity-page/route.js",
    "client/components/sarai-pests-entity-page/on-created.js",
    "client/components/sarai-pests-clinic/index.html",
    "client/components/sarai-pests-clinic/index.less",
    "client/components/sarai-pests-clinic/index.js",
    "client/components/sarai-pests-clinic/route.js",
    "client/components/sarai-pests-form/index.html",
    "client/components/sarai-pests-form/index.js",
    "client/components/sarai-pests-form/index.less",
    "client/components/sarai-pests-form/route.js",
    "client/components/sarai-pests-form/on-created.js",
  ]

  api.addFiles(client, "client")

  api.addAssets([
    // "public/images/drop-here.png",
    "public/images/pest_banner.png",
    "public/images/armyworm.png",
    "public/images/locust.png",
    "public/images/services/pest_clinic_white.png",
    "public/images/services/pest_book_white.png",
    "public/images/services/pest_identification_white.png",
    "public/images/services/alerts_white.png",
    
    
    "public/images/clinic/rs.jpg",
    "public/images/clinic/bg.jpg",
    "public/images/clinic/bg2.jpg",
    "public/images/clinic/bg3.jpg",
    "public/images/clinic/field1.jpg",
    "public/images/clinic/field2.jpg",
    "public/images/clinic/control_black.png",
    "public/images/clinic/control_gray.png",
    "public/images/clinic/control_white.png",
    "public/images/clinic/id_black.png",
    "public/images/clinic/id_gray.png",
    "public/images/clinic/id_white.png",
    "public/images/clinic/comp_black.png",
    "public/images/clinic/comp_gray.png",
    "public/images/clinic/comp_white.png",
    "public/images/clinic/assess_black.png",
    "public/images/clinic/plant_black.png",
    "public/images/clinic/insect_black.png",
    "public/images/clinic/plant_gray.png",
    "public/images/clinic/insect_gray.png",
    "public/images/clinic/plant_green.png",
    "public/images/clinic/insect_green.png",
    "public/images/clinic/micro.png",
    "public/images/clinic/leafhopper.jpg",
    "public/images/clinic/ricehoppers.jpg"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-pests');
});
