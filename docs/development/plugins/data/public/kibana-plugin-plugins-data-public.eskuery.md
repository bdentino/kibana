<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-public](./kibana-plugin-plugins-data-public.md) &gt; [esKuery](./kibana-plugin-plugins-data-public.eskuery.md)

## esKuery variable

> Warning: This API is now obsolete.
> 
> Import helpers from the "<!-- -->@<!-- -->kbn/es-query" package directly instead.  8.0
> 

<b>Signature:</b>

```typescript
esKuery: {
    nodeTypes: import("@kbn/es-query/target_types/kuery/node_types").NodeTypes;
    fromKueryExpression: (expression: any, parseOptions?: Partial<import("@kbn/es-query/target_types/kuery/types").KueryParseOptions> | undefined) => import("@kbn/es-query").KueryNode;
    toElasticsearchQuery: (node: import("@kbn/es-query").KueryNode, indexPattern?: import("@kbn/es-query").IndexPatternBase | undefined, config?: Record<string, any> | undefined, context?: Record<string, any> | undefined) => import("@kbn/common-utils").JsonObject;
}
```
