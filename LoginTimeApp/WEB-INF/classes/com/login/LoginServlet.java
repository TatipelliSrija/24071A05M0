package com.login;

import java.io.*;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");

        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();

        out.println("<h2>Login Successful</h2>");
        out.println("<h3>Welcome " + name + "</h3>");
        out.println("<p>Date: " + date + "</p>");
        out.println("<p>Time: " + time + "</p>");
    }
}
