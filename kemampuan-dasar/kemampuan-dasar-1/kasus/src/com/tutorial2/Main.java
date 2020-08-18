package com.tutorial2;
import Java.io.*;
import Java.util.*;
class FindFile

public class Main {
    public static void recursiveFind(Path path, Consumer<Path> c) {
        try (DirectoryStream<Path> newDirectoryStream = Files.newDirectoryStream(path)) {
            StreamSupport.stream(newDirectoryStream.spliterator(), false)
                    .peek(p -> {
                        c.accept(p);
                        if (p.toFile()
                                .isDirectory()) {
                            recursiveFind(p, c);
                        }
                    })
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    recursiveFind(Paths.get("."), System.out::println);
    recursiveFind(Paths.get("."), p -> {
        if (p.toFile().getName().toString().equals("src")) {
            System.out.println(p);
        }
    });
}

