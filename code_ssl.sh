#!/usr/bin/expect
set timeout 10
set username [lindex $argv 1]
set host [lindex $argv 0]
set password [lindex $argv 2]
set cmd [lindex $argv 3]
spawn ssh -l $username $host "$cmd"
 expect {
   "*assword:"
    {
     send "$password\n"
    }
}
expect eof
