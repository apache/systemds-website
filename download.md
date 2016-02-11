---
layout: page
title: Download
description: Project Download Page
group: nav-right
---
{% include JB/setup %}

<br/><br/><br/>

## {{ site.data.project.name }} Downloads

{{ site.data.project.name }} is released as a source artifact.

Binary artifacts (including the ones available in maven) are made available for your convenience.

You will be prompted for a mirror - if the file is not found on yours, please be patient, as it may take 24 hours to reach all mirrors.

{{ site.data.project.name }} is distributed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

<h2>Download {{ site.data.project.name }} 0.9.0</h2>

<div class="row">
    <div class="span10">
        <table class="table table-hover">
        <tr>
          <th><b>Name</b></th>
          <th><b>Archive</b></th>
          <th><b>MD5</b></th>
          <!--th><b>SHA-1</b></th-->
          <th><b>Signature</b></th>
        </tr>

        <tr>
            <td>SystemML-0.9.0-incubating (tar.gz)</td><td><a href="http://www.apache.org/dyn/closer.lua/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.tar.gz">tar.gz</a></td>
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.tar.gz.md5">MD5</a> </td>
            <!--td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.tar.gz.sha1">SHA-1</a></td-->
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.tar.gz.asc">ASC</a></td>
        </tr>

        <tr>
            <td>SystemML-0.9.0-incubating (zip) </td><td> <a href="http://www.apache.org/dyn/closer.lua/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.zip">zip</a></td>
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.zip.md5">MD5</a></td>
            <!--td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.zip.sha1">SHA-1</a></td-->
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating.zip.asc">ASC</a></td>
        </tr>

        <tr>
            <td>SystemML-0.9.0-incubating (Source tar.gz) </td><td> <a href="http://www.apache.org/dyn/closer.lua/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.tar.gz">tar.gz</a></td>
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.tar.gz.md5">MD5</a></td>
            <!--td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.tar.gz.sha1">SHA-1</a></td-->
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.tar.gz.asc">ASC</a></td>
        </tr>

        <tr>
            <td>SystemML-0.9.0-incubating (Source zip) </td><td> <a href="http://www.apache.org/dyn/closer.lua/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.zip">zip</a></td>
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.zip.md5">MD5</a></td>
            <!--td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.zip.sha1">SHA-1</a></td-->
            <td><a href="http://www.apache.org/dist/incubator/systemml/0.9.0-incubating/systemml-0.9.0-incubating-src.zip.asc">ASC</a></td>
        </tr>

        <tr>
            <td>Release Notes </td><td> <a href="/0.9.0-incubating/release_notes.html">0.9.0-incubating</a></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <!--tr class="a">
            <td>KEYS</td>
            <td><a href="http://svn.apache.org/repos/asf/wink/tags/wink-1.4.0/KEYS">KEYS</a> </td>
            <td></td>
            <td></td>
            <td></td>
        </tr-->
        </table>

        <p>Instructions for checking hashes and signatures is indicated on the <a href="http://www.apache.org/info/verification.html">Verifying Apache Software Foundation Releases</a> page.</p>
        <p>You can also retrieve the source files from our svn repository by typing :</p>

        <pre>git clone {{ site.data.project.source_repository }}</pre>


        <h4> Using Maven </h4>

        <p>We strongly encourage our users to configure a Maven repository mirror closer to their location, please read <a href="http://maven.apache.org/guides/mini/guide-mirror-settings.html">How to Use Mirrors for Repositories</a>.

        <strong>Dependencies</strong>

        <p>Add the following dependencies to your Maven pom.xml.</p>

        <strong>Server:</strong>
        <pre>&lt;dependency&gt;
    &lt;groupId&gt;org.apache.systemmlk&lt;/groupId&gt;
    &lt;artifactId&gt;systemml&lt;/artifactId&gt;
    &lt;version&gt;0.9.0-incubating&lt;/version&gt;
&lt;/dependency&gt;</pre>
    </div>

</div>