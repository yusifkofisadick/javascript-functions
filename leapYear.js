      function leapYear(year) {
        if (year % 4 === 0) {
          if (year % 100 === 0) {
            if (year % 400 === 0) {
              return true; // Leap year
            } else {
              return false; // Not a leap year
            }
          } else {
            return true; // Leap year
          }
        } else {
          return false; // Not a leap year
        }
      }
