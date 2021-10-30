---
layout: page
title: SystemDS 2.2.0 Release Notes
description: Project Release Notes
group: nav-right
---
<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->

<section class="full-stripe full-stripe--subpage-header clear-header">
  <div class="ml-container ml-container--horizontally-center">
    <div class="col col-12 content-group content-group--center-content content-group--center-align">
      <h1>{{ site.data.project.name }} 2.2.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 2.2.0

SystemDS 2.2 is a minor release. This release contains major improvements to existing features,
a large number of performance and robustness fixes, and some experimental features to better
support the end-to-end data science lifecycle. In addition to that, this is the last release
with Java 8 and Spark 2.x.

The major changes (compared to SystemDS 2.1) include:

- Federated Backend: Extended operations and built-ins to support various workflows and algorithms.
- Full support for compressed linear algebra.
- Full support for multithreaded feature transformation.
- Various performance improvements to existing builtins in SystemDS's local, distributed, and native runtimes.
- Performance and robustness fixes for eval. Parfor support for eval.
- Robust performance test suite.
- Asynchronous triggering of spark operations via prefetch and broadcast
- New feature: Generating custom readers by example [experimental]
- Robust release automation scripts with dry-run support.
- Miscellaneous Improvements: Improved documentation, better testing, Python API, GPU backend.
