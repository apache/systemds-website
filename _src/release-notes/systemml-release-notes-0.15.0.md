---
layout: page
title: SystemML 0.15.0 Release Notes
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
      <h1>{{ site.data.project.name }} 0.15.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

The **Apache SystemML 0.15.0 release** was approved on September 13, 2017. It is the first release of Apache SystemML since it
[became a Top-Level Project (TLP)](https://blogs.apache.org/foundation/entry/the-apache-software-foundation-announces13) on May 31, 2017. Updates have been made to the project in several areas, as detailed below.


### New Features and Capabilities
- Added several new 2D convolution layers.
- Graduated `nn` library from staging to `scripts/nn`.

### Experimental Features
- Expanded Code Generation for broader performance improvements.
- Enhanced GPU support and scalability.

### Removals
- Removed file-based transform.
- Removed original MLContext API.

### Various Fixes
* Bug fixes for diverse issues.  See [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12319522&version=12341587) for complete list.


