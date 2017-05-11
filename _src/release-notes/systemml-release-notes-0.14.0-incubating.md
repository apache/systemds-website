---
layout: page
title: SystemML 0.14.0-incubating Release Notes
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
      <h1>{{ site.data.project.name }} 0.14.0-incubating Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

The **Apache SystemML 0.14.0-incubating release** was approved on May 8, 2017. It is the sixth release of Apache SystemML since it
became an incubator project on November 2nd, 2015. Updates have been made to the project in several areas, as detailed below.


### New Features and Capabilities
- Runtime feature extensions (new libsvm-binary data converters, parfor spark buffer pool handling, parfor block partitioning of fixed size batches of rows or columns, native dataset support in parfor spark datapartition-execute)
- Compiler feature extensions (improved parfor execution type selection, improved literal replacement for nrow/ncol, simplified instruction generation across back-ends, consolidated static/dynamic rewrite utilities)

### Experimental Features
- New Code Generation capabilities for automatic operator fusion (basic code generator, compiler integration, runtime integration, in-memory source code compilation, extended explain tool, support for right indexing and replace in cellwise and row aggregate templates, support for row, column, or no aggregation in rowwise template).  Note code generation provides significant performance gains with fewer read/write intermediates, reduced scans of inputs and intermediates, and enhanced sparsity exploitation.  To enable this feature, set `codegen.enabled` property to `true` in SystemML-config.xml file.
- New instructions and operators for GPU support (relu\_maxpooling, conv2d\_bias\_add, bias\_multiply)

### Removals
- Removed support for Java 6 and Java 7
- Removed parfor perftesttool and cost estimator

### Various Fixes
* Bug fixes for diverse issues.  See [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12319522&version=12340322) for complete list.


