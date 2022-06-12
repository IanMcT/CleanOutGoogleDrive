function myFunction() {
  // Loop through every file in the user's Drive.
  var files = DriveApp.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    //Check if the file was last updated over two years ago (you can change the 365 to make it shorter or longer)
    //and if the file size is greater than 100 MB
    if ((new Date() - file.getLastUpdated() < 365*2 * 24 * 60 * 60 * 1000)&&
        (file.getSize()>100000000  )) {
          try{
            //Set the file to be in the trash, you'll have 30 days to be able to restore it.
            file.setTrashed(true);
            //Log the name so you can easily see
            Logger.log(file.getName());
          }catch(e){
            //if someone else owns the file you can't delete it.
            Logger.log("Could not delete: " + file.getName() + " " + file.getUrl());
          }
    }
  
  }
}
