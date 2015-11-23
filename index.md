---
layout: page
title: Home
tagline: Apache Project !
---

{% include JB/setup %}

## Apache SystemML

  SystemML provides declarative large-scale machine learning (ML) that aims at flexible specification  
of ML algorithms and automatic generation of hybrid runtime plans ranging from single node,  
in-memory computations, to distributed computations on Apache Hadoop and  Apache Spark. 


### Algorithm Customizability

ML algorithms are expressed in a R or Python syntax, that includes linear algebra primitives, statistical functions, 
 and ML-specific constructs. This high-level language significantly increases the productivity of data scientists 
 as it provides (1) full flexibility in expressing custom analytics, and (2) data independence from the underlying 
 input formats and physical data representations. Automatic optimization according to data characteristics such as  
distribution on the disk file system, and sparsity as well as processing characteristics in the distributed environment  
like number of nodes, CPU, memory per node, ensures both efficiency and scalability. 

{% highlight r %} m = matrix("1 2 3 4 5 6 7 8 9 10 11 12", rows=4, cols=3)  
for (i in 1:nrow(m)) {
    for (j in 1:ncol(m)) {
        n = m[i,j] print('[' + i + ',' + j + ']:' + as.scalar(n))
    }
 } {% endhighlight %}  

### Multiple Execution Modes

  SystemML computations can be executed in a variety of different modes. To begin with, SystemML
 can be operated in Standalone mode on a single machine, allowing data scientists to develop 
algorithms locally without need of a distributed cluster. Algorithms can be distributed across Hadoop or Spark. 
This flexibility allows the utilization of an organization's existing resources and expertise. In addition, SystemML
 can be operated via Java, Scala, and Python. SystemML also features an embedded API for scoring models. 

{% highlight r %} ../spark-bin-hadoop/bin/spark-submit \
      --class com.ibm.bi.dml.api.DMLScript \
      --master yarn-client \
      --num-executors 6 \
      --driver-memory 12g \
      --executor-memory 55g \
      --executor-cores 24 \
      ./SystemML.jar -f test.dml
{% endhighlight %}
   
### Automatic Optimization

Algorithms specified in DML are dynamically compiled and optimized based on data and cluster characteristics using rule-based 
and cost-based optimization techniques. The optimizer automatically generates hybrid runtime execution plans ranging from 
in-memory single-node execution to distributed computations on Spark or Hadoop. This ensures both efficiency and scalability. 
Automatic optimization reduces or eliminates the need to hand-tune distributed runtime execution plans and system configurations.

