<?php

class easySwooleNote
{
    /*
     * 控制器对象
     */
    /**
     * 对象池模型
     */

    /**对象方法*/
    /***调度类方法*/
    /****
     * action方法是控制器最后调用的方法，可以返回字符串让框架再次调度控制器
     */
    function index()
    {
        $this->writeJson(200, [], 'success');
        return '/test';
    }

    function test()
    {
        $this->response()->write('this is test');
        return '/test2';//当执行完test方法之后,返回/test2,让框架继续调度/test2方法
    }

    function test2()
    {
        $this->response()->write('this is test2');
        return true;
    }


    /****
     * onRequest
     *
     */

    /****
     * afterAction
     */
    /****
     * onException
     */
    /****
     * gc
     */

    /***
     * 请求相应类方法
     */
    /***
     * 反序列化方法
     */
    /***
     * session相关
     */
    /***
     * 验证相关
     */

}
