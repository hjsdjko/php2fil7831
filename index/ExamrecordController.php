<?php




session_start();
class ExamrecordController extends CommonController {

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header('Access-Control-Allow-Headers:Origin,Content-Type,Accept,token,X-Requested-With,device');
    }
    public $columData = [
		'id','addtime'
        ,'userid'
        ,'username'
        ,'paperid'
        ,'papername'
        ,'questionid'
        ,'questionname'
        ,'options'
        ,'score'
        ,'answer'
        ,'analysis'
        ,'ismark'
        ,'type'
        ,'myscore'
        ,'myanswer'
    ];
    /**
     * 分页，列表
     * get
     */
    public function page(){
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
        $userid = $tokens['id'];
		$where = " where 1 ";//查询条件
        $orwhere = '';
		
        $page = isset($_REQUEST['page'])?$_REQUEST['page']:"1";
        $limt = isset($_REQUEST['limit'])?$_REQUEST['limit']:"10";
        $sort = isset($_REQUEST['sort'])?$_REQUEST['sort']:"id";
        $order = isset($_REQUEST['order'])?$_REQUEST['order']:"asc";
        foreach ($_REQUEST as $k => $val){
			if(in_array($k, $this->columData)){
                if ($val != ''){
                    $where.= " and ".$k." like '".$val."'";
                }
			}
        }
        $userid = isset($_REQUEST['userid'])?$_REQUEST['userid']:"";
        if (!empty($userid)){
            $where .= " and `userid` = ".$userid;
        }
        if ($tokens['isAdmin']!=1  && !empty($userid)){
            $where .= " and `userid` = ".$userid;
        }
		$data = json_decode(base64_decode($token),true);
        if ($data['isAdmin']!=1){
			$where .= " and `userid` = ".$data['id'];
        }
        
        if(!empty($userid) && !empty($_REQUEST['paperid'])) {
            $where .= " and `userid`=".$userid." and `paperid` = ".$_REQUEST['paperid'];
        }
        $sql = "select * from `examrecord` ".$where;
        $count = table_sql($sql);
        if ($count->num_rows < 1){
            $numberCount = 0;
        }else{
            $numberCount = $count->num_rows;
        }
        $page_count = ceil($numberCount/$limt);//页数
        $startCount = ($page-1)*$limt;
        $where .= empty($orwhere) ? '' : "and (".$orwhere.")";
        $lists = "select * from `examrecord` ".$where." order by ".$sort." ".$order." limit ".$startCount.",".$limt;
        $result = table_sql($lists);
        $arrayData = array();
        if ($result->num_rows > 0) {
            while ($datas = $result->fetch_assoc()){
                array_push($arrayData,$datas);
            }
        }
        exit(json_encode([
            'code'=>0,
            'data' => [
                "total" => $numberCount,
                "pageSize" => $limt,
                "totalPage" => $page_count,
                "currPage" => $page,
                "list" => $arrayData
            ]
        ]));
    }

        /**
     * 分页，列表list
     * get
     */
    public function lists(){
        $sql = "select * from `examrecord`";
        $result = table_sql($sql);
        $arrayData = array();
        if ($result->num_rows > 0) {
            while ($datas = $result->fetch_assoc()){
                array_push($arrayData,$datas);
            }
        }
        exit(json_encode([
            'code'=>0,
            'data' =>$arrayData
        ]));
    }
    /**
     * 分页，列表list
     * get
     */
    public function list(){
        $page = isset($_REQUEST['page'])?$_REQUEST['page']:"1";
        $limt = isset($_REQUEST['limit'])?$_REQUEST['limit']:"10";
        $sort = isset($_REQUEST['sort'])?$_REQUEST['sort']:"id";
        $order = isset($_REQUEST['order'])?$_REQUEST['order']:"asc";
        $refid = isset($_REQUEST['refid']) ? $_REQUEST['refid'] : "0";
		$where = " where 1 ";//查询条件
        if(isset($_REQUEST['goodid'])) {
            $where .= " and goodid = ".$_REQUEST['goodid']." ";
        }
        $sorts = explode(",", $sort);
        $orders = explode(",", $order);
        $sortorders = "";
        foreach ($sorts as $index => $value) {
            if($index == count($sorts)-1){
                $sortorders =$sortorders.$value." ".$orders[$index];
            }else{
                $sortorders =$sortorders.$value." ".$orders[$index].",";
            }
        }
		foreach ($_REQUEST as $k => $val){
			if(in_array($k, $this->columData)){
				$where.= " and ".$k." like '".$val."'";
			}
        }
        
        $token = $this->token();
        $base = json_decode(base64_decode($token),true);
        $userid = $base['id'];
        if ($base['isAdmin']!=1){
            $where .= " and `userid` = ".$userid;
        }
        $sql = "select * from `examrecord`".$where;
        $count = table_sql($sql);
        if ($count->num_rows < 1){
            $numberCount = 0;
        }else{
            $numberCount = $count->num_rows;
        }
        $page_count = ceil($numberCount/$limt);//页数
        $startCount = ($page-1)*$limt;
        $lists = "select * from `examrecord` ".$where." order by ".$sortorders." limit ".$startCount.",".$limt;
        $result = table_sql($lists);
        $arrayData = array();
        if ($result->num_rows > 0) {
            while ($datas = $result->fetch_assoc()){
                array_push($arrayData,$datas);
            }
        }
        exit(json_encode([
            'code'=>0,
            'data' => [
                "total" => $numberCount,
                "pageSize" => $limt,
                "totalPage" => $page_count,
                "currPage" => $page,
                "list" => $arrayData
            ]
        ]));
    }
    public function groupby(){
		$where = " where 1 ";//查询条件
        $page = isset($_REQUEST['page'])?$_REQUEST['page']:"1";
        $limt = isset($_REQUEST['limit'])?$_REQUEST['limit']:"10";
        $sort = isset($_REQUEST['sort'])?$_REQUEST['sort']:"id";
        $order = isset($_REQUEST['order'])?$_REQUEST['order']:"asc";
        $token = $this->token();
        $data = json_decode(base64_decode($token),true);
        if ($data['isAdmin']!=1){
            $where .= " and `userid` = ".$data['id'];
        }
        if (isset($_REQUEST['papername'])){
            $where .= " and `papername` like '".$_REQUEST['papername']."' ";
        }
        $sql = 'select userid,username,paperid,papername,sum(myscore) myscore,
        ROUND(CAST(SUM(CASE WHEN myscore > 0 THEN 1 ELSE 0 END) AS DECIMAL(10, 2)) / CAST(COUNT(myscore) AS DECIMAL(10, 2)), 2) as accuracy
        ,SUM(CASE WHEN type = 4 AND ismark = 0 THEN 1 ELSE 0 END) as ismark from examrecord '.$where.' group by userid,username,paperid,papername';
        $count = table_sql($sql);
        if ($count->num_rows < 1){
            $numberCount = 1;
        }else{
            $numberCount = $count->num_rows;
        }
        $page_count = ceil($numberCount/$limt);//页数
        $startCount = ($page-1)*10;
        $lists = $sql." limit ".$startCount.",".$limt;
        $result = table_sql($lists);
        $arrayData = array();
        if ($result->num_rows > 0) {
            while ($datas = $result->fetch_assoc()){
                array_push($arrayData,$datas);
            }
        }
        exit(json_encode([
            'code'=>0,
            'data' => [
                "total" => $numberCount,
                "pageSize" => $limt,
                "totalPage" => $page_count,
                "currPage" => $page,
                "list" => $arrayData
            ]
        ]));
    }
    public function deleteRecords(){
        $userid = isset($_REQUEST['userid'])?$_REQUEST['userid']:"0";
        $paperid = isset($_REQUEST['paperid'])?$_REQUEST['paperid']:"0";
        $sql = "delete from examrecord WHERE userid=".$userid." and paperid=".$paperid;
        $result = table_sql($sql);
        exit(json_encode(['code'=>0]));
    }



    /**
     * 新增数据接口
     * post
     */
    public function save(){
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
        $uid = $tokens['id'];
        $keyArr = $valArr = array();
        $tmpData = strval(file_get_contents("php://input"));//Content-Type: application/json 需要用到php://input 处理输入流
        
        if (!empty($tmpData)&& isset($tmpData)){
            $postData = json_decode($tmpData,true);
			$postData['userid'] = $uid;
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if(!empty($value) || $value === 0) {
                    if ($key == 'id') {
                        continue;
                    }
                    array_push($keyArr,"`".$key."`");
                    if($key == 'clicktime') {
                        array_push($valArr,"'".date('Y-m-d h:i:s', time())."'");
                    } else {
                        array_push($valArr,"'".$value."'");
                    }
                }
            }
        }
        }
        $k = implode(',',$keyArr);
        $v = implode(',',$valArr);
        $sql = "INSERT INTO `examrecord` (".$k.") VALUES (".$v.")";
        $result = table_sql($sql);
        exit(json_encode(['code'=>0]));
    }
    /**
     * 新增数据接口 add
     * post
     */
    public function add(){
        $keyArr = $valArr = array();
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
        $uid = $tokens['id'];
        $tmpData = strval(file_get_contents("php://input"));
        if (!empty($tmpData)&& isset($tmpData)){
            $postData = json_decode($tmpData,true);
                    $token = $this->token();
                    $tokens = json_decode(base64_decode($token),true);
                    if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
                    $uid = $tokens['id'];
					$postData['userid'] = $uid;
            foreach ($postData as $key => $value){
                if (in_array($key, $this->columData)){
                    if(!empty($value) || $value === 0) {
                        if ($key == 'id') {
                            continue;
                        }
                        array_push($keyArr,"`".$key."`");
                        if($key == 'clicktime') {
                            array_push($valArr,"'".date('Y-m-d h:i:s', time())."'");
                        } else {
                            array_push($valArr,"'".$value."'");
                        }
                    }
                }
            }

        }
        $k = implode(',',$keyArr);
        $v = implode(',',$valArr);
        $sql = "INSERT INTO `examrecord` (".$k.") VALUES (".$v.")";
        $result = table_sql($sql);
        exit(json_encode(['code'=>0]));
    }
    /**
     * 更新接口
     * post
     */
    public function update(){
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
        $uid = $tokens['id'];
        $tmpData = strval(file_get_contents("php://input"));
        $postData = json_decode($tmpData,true);
        $v = array();
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if ($key == "id"){
                    $id = $value;
                }
                if(!empty($value) || $value === 0) {
                    array_push($v,$key." = '".$value."'");
                }
            }
        }
        $value = implode(',',$v);
        $sql = "UPDATE examrecord SET ".$value." where id = ".$id;
        $result = table_sql($sql);

        exit(json_encode(['code'=>0]));
    }
    /**
     * 删除
     * post
     */
    public function delete(){
        $ids = strval(file_get_contents("php://input"));//发现接收的是字符串
        preg_match_all('/\d+/',$ids,$arr);
        $str = implode(',',$arr[0]);//拼接字符，
        $sql = "delete from examrecord WHERE id in({$str})";
        $result = table_sql($sql);
        exit(json_encode(['code'=>0]));
    }
    /**
     * 查询一条数据
     * get
     */
    public function info($id=false){

        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
        $userid = $tokens['id'];
        $name = isset($_REQUEST['name'])? $_REQUEST['name']:"";
        if (!empty($id)){
            $where = "`id` = ".$id;
        }else{
            $where = "`name` = ".$name;
        }
        $sql = "select * from `examrecord` where ".$where;
        $result = table_sql($sql);
        if ($result->num_rows > 0) {
            // 输出数据
            while($row = $result->fetch_assoc()) {
                $lists = $row;
            }
        }
        exit(json_encode([
            'code'=>0,
            'data'=> $lists
        ]));
    }
    /**
     * 查询一条数据
     * get
     */
    public function detail($id=false){
        $name = isset($_REQUEST['name'])? $_REQUEST['name']:"";
        if ($id){
            $where = "`id` = ".$id;
        }else{
            $where = "`name` = ".$name;
        }
        $sql = "select * from `examrecord` where ".$where;
        $result = table_sql($sql);
        if (!$result) exit(json_encode(['code'=>500,'msg'=>"查询数据发生错误。"]));
        if ($result->num_rows > 0) {
            // 输出数据
            while($row = $result->fetch_assoc()) {
                $lists = $row;
            }
        }
        exit(json_encode([
            'code'=>0,
            'data'=> $lists
        ]));
    }

    /**
     * 按值统计接口
     **/
    public function value(){
        $url = explode('?',$_SERVER['REQUEST_URI']);
        $request = explode('/',$url[0]);
        $xColumnName = $request[4];
        $yColumnName = $request[5];
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        $where = " where 1 ";
        $sql = "SELECT ".$xColumnName.",sum(".$yColumnName.") total FROM examrecord ".$where." group by ".$xColumnName." LIMIT 10";
        if(urldecode($request[6]) == '日') {
            $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m-%d') ".$xColumnName.", sum(".$yColumnName.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m-%d') LIMIT 10";
        }
        if(urldecode($request[6]) == '月') {
            $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m') ".$xColumnName.", sum(".$yColumnName.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m') LIMIT 10";
        }
        if(urldecode($request[6]) == '年') {
            $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y') ".$xColumnName.", sum(".$yColumnName.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y') LIMIT 10";
        }
        $result = table_sql($sql);
        if ($result->num_rows > 0) {
            // 输出数据
            $total = array();
            while($row = $result->fetch_assoc()) {
                array_push($total,array('total' => intval($row['total']),$xColumnName => $row[$xColumnName]));
            }
        }
        exit(json_encode(['code'=>0,'data'=>$total]));
    }

    /**
     * (按值统计）时间统计类型(多)
     **/
    public function valueMul(){
        $url = explode('?',$_SERVER['REQUEST_URI']);
        $request = explode('/',$url[0]);
        $xColumnName = $request[4];
        $yColumnName = isset($_REQUEST['yColumnNameMul'])? $_REQUEST['yColumnNameMul']:"";
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        $where = " where 1 ";
        $valueData = array();

        foreach(explode(",", $yColumnName) as $item){
            $sql = "SELECT ".$xColumnName.",sum(".$item.") total FROM examrecord ".$where." group by ".$xColumnName." LIMIT 10";
            if(urldecode($request[6]) == '日') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m-%d') ".$xColumnName.", sum(".$item.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m-%d') LIMIT 10";
            }
            if(urldecode($request[6]) == '月') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m') ".$xColumnName.", sum(".$item.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m') LIMIT 10";
            }
            if(urldecode($request[6]) == '年') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y') ".$xColumnName.", sum(".$item.") total FROM examrecord ".$where."  GROUP BY DATE_FORMAT(".$xColumnName.", '%Y') LIMIT 10";
            }
            $result = table_sql($sql);
            if ($result->num_rows > 0) {// 输出数据
                $total = array();
                while($row = $result->fetch_assoc()) {
                    array_push($total,array('total' => intval($row['total']),$xColumnName => $row[$xColumnName]));
                }
                $valueData[] = $total;
            }
        }

        exit(json_encode(['code'=>0,'data'=>$valueData]));
    }




    /**
     * 获取需要提醒的记录数接口
     * get
     */
    public function remind($columnName,$type){
        $remindStart = isset($_GET['remindstart'])?$_GET['remindstart']:"";
        $remindEnd = isset($_GET['remindend'])?$_GET['remindend']:"";
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        $where = " where 1 ";//查询条件
                $token = $this->token();
                $tokens = json_decode(base64_decode($token),true);
                if (!isset($tokens['id']) || empty($tokens['id'])) exit(json_encode(['code'=>401,'msg'=>"你还没有登录。"]));
                $uid = $tokens['id'];
                $where .= " and `userid` = '".$uid."'";
        if ($type == 1){//数字
            if ($remindStart && $remindEnd){
                $where .= " and ".$columnName."<='".$remindEnd."' and ".$columnName.">='".$remindStart."'";
            }elseif($remindStart){
                $where .= " and ".$columnName.">='".$remindStart."'";
            }elseif($remindEnd){
                $where .= " and ".$columnName."<='".$remindEnd."'";
            }
        }else{
            if ($remindStart && $remindEnd){
                $where .= " and ".$columnName."<='".date("Y-m-d",strtotime("+".$remindEnd." day"))."' and ".$columnName.">='".date("Y-m-d",strtotime("+".$remindStart." day"))."'";
            }elseif($remindStart){
                $where .= " and ".$columnName.">='".date("Y-m-d",strtotime("+".$remindStart." day"))."'";
            }elseif($remindEnd){
                $where .= " and ".$columnName."<='".date("Y-m-d",strtotime("+".$remindEnd." day"))."'";
            }
            
        }
        $sql = "select * from `examrecord` ".$where;
        $result = table_sql($sql);
        exit(json_encode(['code'=> 0 ,'count' => $result->num_rows]));
    }






    public function group($columnName){
        $token = $this->token();
        $tokens = json_decode(base64_decode($token),true);
        $where = " where 1 ";
        $sql = "SELECT ".$columnName.",count(".$columnName.") as total FROM examrecord ".$where." GROUP BY ".$columnName." ORDER BY $columnName asc LIMIT 10";
        $result = table_sql($sql);
        if ($result->num_rows > 0) {
            // 输出数据
            $total = array();
            while($row = $result->fetch_assoc()) {
                array_push($total,array('total' => $row['total'],$columnName => $row[$columnName]));
            }
        }
        exit(json_encode(['code'=>0,'data'=>$total]));
    }












}

