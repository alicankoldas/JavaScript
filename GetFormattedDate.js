        function getFormattedDate2() {
            var date = new Date();
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var day = date.getDay();
            document.write("<br/>");
            document.write("Sample Output: Today is : " + dayNames[day] + ".");
            document.write("<br/>");

            var hour = date.getHours()
            var plugin = (hour >= 12) ? "PM" : "AM";
            hour = (hour >= 12) ? hour - 12 : hour;

            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            return "Current time is : " + hour + " "+ plugin + " : " + minutes + " : " + seconds;
        }