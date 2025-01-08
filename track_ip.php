<?php
// Get visitor's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

// Get the current date and time
$date_time = date('Y-m-d H:i:s');

// Prepare the log entry
$log_entry = "IP: $ip_address - Date/Time: $date_time\n";

// Save the IP to a log file
$file = 'visitor_log.txt'; // Log file name
file_put_contents($file, $log_entry, FILE_APPEND | LOCK_EX);

// Optional: Display a message (or nothing at all)
echo "IP logged successfully.";
?>
