-- 1.Find out how many tasks are in the task table1
select count(*) from task;
-- 2.Find out how many tasks in the task table do not have a valid due date
select count(*)from task where due_date is null;
-- 3.Find all the tasks that are marked as done
select count(*)from task where status_id = 3;
-- 4.Find all the tasks that are not marked as done
 select count(*)from task where status_id = 1;
 -- 5.Get all the tasks, sorted with the most recently created first
  select *from task order by created desc;
  -- 6.Get the single most recently created task
   select AVG(id) from task order by created desc;
   -- 7.Get the title and due date of all tasks where the title or description contains database
   select title, due_date from task where title like '%databases%';
   -- 8.Get the title and status (as text) of all tasks
    select task.title , status.name as statusname from task inner join status on task.status_id = status.id;